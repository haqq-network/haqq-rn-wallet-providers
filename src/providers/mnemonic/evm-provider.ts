import {hexConcat} from '@ethersproject/bytes';
import {serialize, UnsignedTransaction} from '@ethersproject/transactions';
import {derive, sign} from '@haqq/provider-web3-utils';
import {
  calcTypedDataSignatureV,
  hexStringToByteArray,
  joinSignature,
  prepareHashedEip712Data,
  stringToUtf8Bytes,
} from '../../utils';
import {getMnemonic} from '../../utils/mnemonic/get-mnemonic';
import {
  BytesLike,
  ProviderInterface,
  TransactionRequest,
  TypedData,
} from '../types';
import {ProviderMnemonicBase} from './provider';

export class ProviderMnemonicEvm
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

      const signature = await sign(
        privateKey,
        serialize(transaction as UnsignedTransaction),
      );

      const sig = hexStringToByteArray(signature);

      resp = serialize(transaction as UnsignedTransaction, sig);

      this.emit('signTransaction', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'signTransaction');
      }
    }

    return resp;
  }

  async signPersonalMessage(
    hdPath: string,
    message: BytesLike | string,
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

      const m = Array.from(
        typeof message === 'string' ? stringToUtf8Bytes(message) : message,
      );

      const hash = Buffer.from(
        [
          25, 69, 116, 104, 101, 114, 101, 117, 109, 32, 83, 105, 103, 110, 101,
          100, 32, 77, 101, 115, 115, 97, 103, 101, 58, 10,
        ].concat(stringToUtf8Bytes(String(message.length)), m),
      ).toString('hex');
      const signature = await sign(privateKey, hash);
      resp = '0x' + joinSignature(signature);
      this.emit('signTransaction', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'signTransaction');
      }
    }

    return resp;
  }

  async signTypedData(hdPath: string, typedData: TypedData): Promise<string> {
    let response = '';
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

      const {domainSeparatorHex, hashStructMessageHex} =
        prepareHashedEip712Data(typedData);
      const concatHash = hexConcat([
        '0x1901',
        domainSeparatorHex,
        hashStructMessageHex,
      ]);
      response = await sign(privateKey, concatHash);
      this.emit('signTypedData', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'signTypedData');
      }
    }

    return calcTypedDataSignatureV(response);
  }
}
