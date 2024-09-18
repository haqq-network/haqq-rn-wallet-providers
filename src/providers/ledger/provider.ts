import TransportBLE from '@ledgerhq/react-native-hw-transport-ble';
import {firstValueFrom, Observable} from 'rxjs';
import {suggestApp, withDevicePolling} from '../../utils';
import {Provider} from '../base-provider';
import {ProviderInterface} from '../types';
import {ProviderLedgerBaseOptions} from './types';

export abstract class ProviderLedgerBase
  extends Provider<ProviderLedgerBaseOptions>
  implements ProviderInterface
{
  getIdentifier(): string {
    return this._options.deviceId;
  }

  withDevice = () => {
    return <T>(job: (arg0: TransportBLE) => Observable<T>): Observable<T> => {
      return withDevicePolling(this._options.deviceId)(
        transport =>
          new Observable(o => {
            this.on('abortCall', () => {
              o.error(new Error('aborted'));
              o.complete();
            });
            return job(transport).subscribe(o);
          }),
      );
    };
  };

  abstract confirmAddress(hdPath: string): Promise<string>;

  suggestApp = async () => {
    return firstValueFrom<boolean>(
      this.withDevice()(
        transport =>
          new Observable(o => {
            const run = async () => {
              if (this._options.appName) {
                await suggestApp(transport, this._options.appName);
              }
            };

            run()
              .then(() => {
                o.next(true);
                o.complete();
                this.emit('suggestApp', true);
              })
              .catch(e => {
                try {
                  o.error(e); // resolve in genericCanRetryOnError
                } catch (_) {
                  o.next(false);
                  o.complete();
                  this.emit('suggestApp', false);
                }
              });
          }),
      ),
    );
  };

  async abort() {
    this.emit('abortCall');
    return firstValueFrom<void>(
      this.withDevice()(
        transport =>
          new Observable(o => {
            const run = async () => {
              if (transport.isConnected) {
                if (await transport.device.isConnected()) {
                  transport.device.cancelConnection();
                }
                transport.close();
              }
            };

            run().finally(() => {
              o.next();
              o.complete();
            });
          }),
      ),
    );
  }

  catchError(e: Error, source: string) {
    let handled = false;
    switch (e.name) {
      case 'TransportStatusError':
        // @ts-ignore
        switch (String(e.statusCode)) {
          case '27010':
            handled = true;
            this.emit(source, false, e.message, e.name, '27010');
            throw new Error('ledger_locked');
          case '27013':
            handled = true;
            this.emit(source, false, e.message, e.name, '27013');
            throw new Error('ledger_rejected');
        }
        break;
    }
    super.catchError(e, source, handled);
  }
}
