import {accountInfo, derive} from '@haqq/provider-web3-utils';
import tron from 'tronweb';

import {ProviderSSSBase} from './provider';
import {ProviderSSSTronOptions} from './types';

import {compressPublicKey, getSeed} from '../../utils';
import {
  BytesLike,
  ProviderInterface,
  TransactionRequest,
  TypedData,
} from '../types';

export class ProviderSSSTron
  extends ProviderSSSBase
  implements ProviderInterface
{
  private _tronWebHostUrl: string;
  constructor(options: ProviderSSSTronOptions) {
    super(options);
    this._tronWebHostUrl = options.tronWebHostUrl;
  }

  async getAccountInfo(hdPath: string) {
    let resp = {publicKey: '', address: ''};
    try {
      const {seed} = await getSeed(
        this._options.account,
        this._options.storage,
        this._options.getPassword,
      );

      if (!seed) {
        throw new Error('seed_not_found');
      }

      const privateKey = await derive(seed, hdPath);

      if (!privateKey) {
        throw new Error('private_key_not_found');
      }

      const account = await accountInfo(privateKey);

      resp = {
        publicKey: compressPublicKey(account.publicKey),
        address: tron.utils.address.fromHex(account.address),
      };
      this.emit('getPublicKeyForHDPath', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'getPublicKeyForHDPath');
      }
    }
    return resp;
  }

  async signTransaction(
    hdPath: string,
    transaction: TransactionRequest,
  ): Promise<string> {
    let resp = '';
    try {
      const {seed} = await getSeed(
        this._options.account,
        this._options.storage,
        this._options.getPassword,
      );

      if (!seed) {
        throw new Error('seed_not_found');
      }

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
