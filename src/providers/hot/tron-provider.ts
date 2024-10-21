import {accountInfo} from '@haqq/provider-web3-utils';
import tron from 'tronweb';

import {ProviderHotBase} from './provider';
import {ProviderHotTronOptions} from './types';

import {compressPublicKey} from '../../utils';
import {getPrivateKey} from '../../utils/hot/get-private-key';
import {
  BytesLike,
  ProviderInterface,
  TransactionRequest,
  TypedData,
} from '../types';

export class ProviderHotTron
  extends ProviderHotBase
  implements ProviderInterface
{
  private _tronWebHostUrl: string;
  constructor(options: ProviderHotTronOptions) {
    super(options);
    this._tronWebHostUrl = options.tronWebHostUrl;
  }

  /* hd path ignore for hot wallet */
  async getAccountInfo(_hdPath: string) {
    const {share: privateKey} = await getPrivateKey(
      this._options.account,
      this._options.getPassword,
    );

    if (!privateKey) {
      throw new Error('private_key_not_found');
    }

    const account = await accountInfo(privateKey);

    return {
      publicKey: compressPublicKey(account.publicKey),
      address: tron.utils.address.fromHex(account.address),
    };
  }

  async signTransaction(
    _hdPath: string,
    transaction: TransactionRequest,
  ): Promise<string> {
    let resp = '';
    try {
      const {share: privateKey} = await getPrivateKey(
        this._options.account,
        this._options.getPassword,
      );

      if (!privateKey) {
        throw new Error('private_key_not_found');
      }

      const tronWeb = new tron.TronWeb({
        fullHost: this._tronWebHostUrl,
        privateKey: privateKey.replace(/^0x/, ''),
      });

      // Convert Ethereum-style transaction to Tron transaction
      const tronTransaction = {
        to_address: tron.utils.address.isAddress(transaction.to)
          ? transaction.to
          : tron.utils.address.fromHex(transaction.to),
        owner_address: tron.utils.crypto.pkToAddress(privateKey),
        amount: tron.TronWeb.toSun(
          Number(transaction.value),
        ) as unknown as number,
      };

      // Get the signature
      const tx = await tronWeb.transactionBuilder.sendTrx(
        tronTransaction.to_address,
        tronTransaction.amount,
        tronTransaction.owner_address,
      );

      const signedTx = await tronWeb.trx.signTransaction(tx);
      resp = JSON.stringify(signedTx);

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
