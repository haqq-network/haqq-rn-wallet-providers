import {derive} from '@haqq/provider-web3-utils';
import tron from 'tronweb';

import {ProviderMnemonicBase} from './provider';

import {getMnemonic} from '../../utils/mnemonic/get-mnemonic';
import {
  BytesLike,
  ProviderInterface,
  TransactionRequest,
  TypedData,
} from '../types';

export class ProviderMnemonicTron
  extends ProviderMnemonicBase
  implements ProviderInterface
{
  async signTransaction(
    hdPath: string,
    transaction: TransactionRequest,
  ): Promise<string> {
    let resp = '';
    try {
      const share = await getMnemonic(
        this._options.account,
        this._options.getPassword,
      );

      if (!share) {
        throw new Error('seed_not_found');
      }

      const seed = await ProviderMnemonicBase.shareToSeed(share);

      const privateKey = await derive(seed, hdPath);

      if (!privateKey) {
        throw new Error('private_key_not_found');
      }

      const tronWeb = new tron.TronWeb({
        fullHost: 'https://api.trongrid.io',
        privateKey: privateKey,
      });

      // Convert Ethereum-style transaction to Tron transaction
      const tronTransaction = {
        to_address: tronWeb.address.toHex(transaction.to),
        owner_address: tronWeb.address.toHex(transaction.from),
        amount: tronWeb.toSun(Number(transaction.value)),
      };

      // Create an unsigned transaction
      const unsignedTxn = await tronWeb.transactionBuilder.sendTrx(
        tronTransaction.to_address,
        Number(transaction.value),
        tronTransaction.owner_address,
      );

      // Sign the transaction
      const signedTxn = await tronWeb.trx.sign(unsignedTxn, privateKey);

      // Get the signature
      resp = signedTxn.signature[0];

      this.emit('signTransaction', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'signTransaction');
      }
    }

    return resp;
  }

  async signPersonalMessage(
    _hdPath: string,
    _message: BytesLike | string,
  ): Promise<string> {
    throw new Error(' signPersonalMessage not implemented');
  }

  async signTypedData(_hdPath: string, _typedData: TypedData): Promise<string> {
    try {
      throw new Error(
        "Tron blockchain doesn't support signTypedData medthods.",
      );
    } catch (e) {
      this.catchError(e, 'signTypedData');
    } finally {
      return '';
    }
  }
}
