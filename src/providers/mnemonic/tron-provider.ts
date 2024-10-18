/* eslint-disable no-console */
import {accountInfo, derive} from '@haqq/provider-web3-utils';
import tron from 'tronweb';

import {ProviderMnemonicBase} from './provider';
import {ProviderMnemonicTronOptions} from './types';

import {getMnemonic} from '../../utils/mnemonic/get-mnemonic';
import {
  BytesLike,
  ProviderInterface,
  TransactionRequest,
  TypedData,
} from '../types';
import { compressPublicKey } from '../../utils';

export class ProviderMnemonicTron
  extends ProviderMnemonicBase
  implements ProviderInterface
{
  private _tronWebHostUrl: string;
  constructor(options: ProviderMnemonicTronOptions) {
    super(options);
    this._tronWebHostUrl = options.tronWebHostUrl;
  }

  static async initialize(
    mnemonic: string | null,
    getPassword: () => Promise<string>,
    options: Omit<ProviderMnemonicTronOptions, 'getPassword'>,
  ): Promise<ProviderMnemonicTron> {
    const base = await ProviderMnemonicBase.initialize(
      mnemonic,
      getPassword,
      options,
    );

    return new ProviderMnemonicTron({
      ...options,
      getPassword,
      account: base._options.account,
    });
  }

  async getAccountInfo(hdPath: string) {
    const share = await getMnemonic(
      this._options.account,
      this._options.getPassword,
    );

    if (!share) {
      throw new Error('seed_not_found');
    }

    const seed = await ProviderMnemonicBase.shareToSeed(share);
    const ethPrivateKey = await derive(seed, hdPath);

    if (!ethPrivateKey) {
      throw new Error('private_key_not_found');
    }

    const account = await accountInfo(ethPrivateKey);
    console.log('ethPrivateKey', ethPrivateKey);
    console.log('account', account);
    
  
    return {
      publicKey: compressPublicKey(account.publicKey),
      address: tron.utils.address.fromHex(account.address),
    };
  }

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

      const privateKey = (await derive(seed, hdPath)).replace(/^0x/, '');

      if (!privateKey) {
        throw new Error('private_key_not_found');
      }

      const tronWeb = new tron.TronWeb({
        fullHost: this._tronWebHostUrl,
        privateKey,
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
      resp = signedTx.signature[0];

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
