import {TransactionRequest} from '@ethersproject/abstract-provider';
import AppEth, {ledgerService} from '@ledgerhq/hw-app-eth';
import {UnsignedTransaction, utils} from 'ethers';
import {Observable, firstValueFrom} from 'rxjs';

import {ProviderLedgerBase} from './provider';

import {
  calcTypedDataSignatureV,
  compressPublicKey,
  prepareHashedEip712Data,
  stringToUtf8Bytes,
} from '../../utils';
import {BytesLike, ProviderInterface, TypedData} from '../types';

export class ProviderLedgerEvm
  extends ProviderLedgerBase
  implements ProviderInterface
{
  async confirmAddress(hdPath: string) {
    return (await this.getAccountInfo(hdPath, true)).address;
  }

  async getAccountInfo(hdPath: string, showDisplay = false) {
    await this.suggestApp();
    return firstValueFrom<{publicKey: string; address: string}>(
      this.withDevice()(
        transport =>
          new Observable(o => {
            const run = async () => {
              const eth = new AppEth(transport);
              const response = await eth.getAddress(hdPath, showDisplay);

              return {
                publicKey: compressPublicKey(response.publicKey),
                address: response.address,
              };
            };

            run()
              .then(result => {
                o.next(result);
                o.complete();
                this.emit('getPublicKeyForHDPath', true);
              })
              .catch(e => {
                try {
                  o.error(e); // resolve in genericCanRetryOnError
                } catch (_) {
                  o.next({publicKey: '', address: ''});
                  o.complete();
                  this.catchError(e, 'getPublicKeyForHDPath');
                }
              });
          }),
      ),
    );
  }

  async signTransaction(hdPath: string, transaction: TransactionRequest) {
    await this.suggestApp();
    return firstValueFrom<string>(
      this.withDevice()(
        transport =>
          new Observable(o => {
            const run = async () => {
              const eth = new AppEth(transport);
              const unsignedTx = utils
                .serializeTransaction(transaction as UnsignedTransaction)
                .substring(2);
              const resolution = await ledgerService.resolveTransaction(
                unsignedTx,
                {},
                {},
              );
              const signature = await eth.signTransaction(
                hdPath,
                unsignedTx,
                resolution,
              );

              return utils.serializeTransaction(
                transaction as UnsignedTransaction,
                {
                  ...signature,
                  r: '0x' + signature.r,
                  s: '0x' + signature.s,
                  v: parseInt(signature.v, 10),
                },
              );
            };

            run()
              .then(result => {
                o.next(result);
                o.complete();
                this.emit('signTransaction', true);
              })
              .catch(e => {
                try {
                  o.error(e); // resolve in genericCanRetryOnError
                } catch (_) {
                  o.next('');
                  o.complete();
                  this.catchError(e, 'signTransaction');
                }
              });
          }),
      ),
    );
  }

  async signPersonalMessage(
    hdPath: string,
    message: string | BytesLike,
  ): Promise<string> {
    await this.suggestApp();
    return firstValueFrom(
      this.withDevice()(
        transport =>
          new Observable(o => {
            const run = async () => {
              const eth = new AppEth(transport);
              const m = Array.from(
                typeof message === 'string'
                  ? stringToUtf8Bytes(message)
                  : message,
              );
              const signature = await eth.signPersonalMessage(
                hdPath,
                Buffer.from(m).toString('hex'),
              );

              const v = (signature.v - 27).toString(16).padStart(2, '0');
              return '0x' + signature.r + signature.s + v;
            };

            run()
              .then(result => {
                o.next(result);
                o.complete();
                this.emit('signPersonalMessage', true);
              })
              .catch(e => {
                try {
                  o.error(e); // resolve in genericCanRetryOnError
                } catch (_) {
                  o.next('');
                  o.complete();
                  this.catchError(e, 'signPersonalMessage');
                }
              });
          }),
      ),
    );
  }

  async signTypedData(hdPath: string, typedData: TypedData) {
    await this.suggestApp();
    return firstValueFrom<string>(
      this.withDevice()(
        transport =>
          new Observable(o => {
            const run = async () => {
              const {domainSeparatorHex, hashStructMessageHex} =
                prepareHashedEip712Data(typedData);

              const eth = new AppEth(transport);

              const signature = await eth.signEIP712HashedMessage(
                hdPath,
                domainSeparatorHex,
                hashStructMessageHex,
              );

              const v = (signature.v - 27).toString(16).padStart(2, '0');
              return '0x' + signature.r + signature.s + v;
            };

            run()
              .then(result => {
                o.next(calcTypedDataSignatureV(result));
                o.complete();
                this.emit('signTypedData', true);
              })
              .catch(e => {
                try {
                  o.error(e); // resolve in genericCanRetryOnError
                } catch (_) {
                  o.next('');
                  o.complete();
                  this.catchError(e, 'signTypedData');
                }
              });
          }),
      ),
    );
  }
}
