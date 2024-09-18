import {
  BytesLike,
  ProviderBaseOptions,
  ProviderInterface,
  TransactionRequest,
  TypedData,
} from './types';
import EventEmitter from 'events';

export class Provider<T extends object>
  extends EventEmitter
  implements ProviderInterface
{
  protected _options: T & ProviderBaseOptions;

  constructor(options: T & ProviderBaseOptions) {
    super();
    this._options = options;
  }

  signTransaction(
    _hdPath: string,
    _transaction: TransactionRequest,
  ): Promise<string> {
    throw new Error('not implemented');
  }

  signPersonalMessage(_hdPath: string, _message: BytesLike): Promise<string> {
    throw new Error('not implemented');
  }

  signTypedData(_hdPath: string, typedData: TypedData): Promise<string> {
    throw new Error('not implemented');
  }

  getIdentifier() {
    return '';
  }

  getAccountInfo(_hdPath: string) {
    return Promise.resolve({publicKey: '', address: ''});
  }

  getPrivateKey(_hdPath: string): Promise<string> {
    throw new Error('not implemented');
  }

  catchError(e: Error, source: string, handled: boolean = false) {
    if (!handled) {
      this.emit(source, false, e.message, e.name);
    }
    this.emit('catch-error', {
      error: e,
      source,
    });
    throw new Error(e.message);
  }

  abort() {
    return;
  }

  clean() {
    return Promise.resolve();
  }

  updatePin(_pin: string) {
    return Promise.resolve();
  }
}
