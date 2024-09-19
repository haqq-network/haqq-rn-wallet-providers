import {accountInfo} from '@haqq/provider-web3-utils';
import {encryptShare} from '@haqq/shared-react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ITEM_KEYS, WalletType} from '../../constants';
import {compressPublicKey} from '../../utils';
import {getPrivateKey} from '../../utils/hot/get-private-key';
import {ProviderBase} from '../base-provider';
import {ProviderBaseOptions, ProviderInterface} from '../types';
import {ProviderHotBaseOptions} from './types';

export class ProviderHotBase
  extends ProviderBase<ProviderHotBaseOptions>
  implements ProviderInterface
{
  static async initialize(
    privateKey: string,
    getPassword: () => Promise<string>,
    options: Omit<ProviderBaseOptions, 'getPassword'>,
  ): Promise<ProviderHotBase> {
    const password = await getPassword();

    const privateData = await encryptShare(
      {
        share: privateKey,
        shareIndex: '0',
        polynomialID: '0',
      },
      password,
    );

    const {address} = await accountInfo(privateKey);

    await EncryptedStorage.setItem(
      `${ITEM_KEYS[WalletType.hot]}_${address.toLowerCase()}`,
      JSON.stringify(privateData),
    );

    return new ProviderHotBase({
      ...options,
      getPassword,
      account: address.toLowerCase(),
    });
  }

  async updatePin(pin: string) {
    try {
      const decryptedData = await getPrivateKey(
        this._options.account,
        this._options.getPassword,
      );

      const privateData = await encryptShare(
        {
          share: decryptedData.share,
          shareIndex: '0',
          polynomialID: '0',
        },
        pin,
      );

      await EncryptedStorage.setItem(
        `${ITEM_KEYS[WalletType.hot]}_${this.getIdentifier().toLowerCase()}`,
        JSON.stringify(privateData),
      );
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'updatePin');
      }
    }
  }

  async clean() {
    try {
      await EncryptedStorage.removeItem(
        `${ITEM_KEYS[WalletType.hot]}_${this.getIdentifier().toLowerCase()}`,
      );
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'clean');
      }
    }
  }

  getIdentifier() {
    return this._options.account;
  }

  async getAccountInfo(_hdPath: string) {
    let resp = {publicKey: '', address: ''};
    try {
      const {share} = await getPrivateKey(
        this._options.account,
        this._options.getPassword,
      );
      const account = await accountInfo(share);

      resp = {
        publicKey: compressPublicKey(account.publicKey),
        address: account.address,
      };
      this.emit('getPublicKeyForHDPath', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'getPublicKeyForHDPath');
      }
    }
    return resp;
  }
}
