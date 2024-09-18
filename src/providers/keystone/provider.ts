import {
  CryptoAccount,
  CryptoHDKey,
  RegistryItem,
} from '@keystonehq/bc-ur-registry-eth';
import {ethers} from 'ethers';
import {HDNode} from 'ethers/lib/utils';

import {
  KeyringAccountEnum,
  ProviderKeystonErrorEnum,
  PATH_INDEX_KEY,
  PATHS_PATTERN_MAP,
  SupportedRegistryTypeEnum,
} from '../../constants';
import {
  getRegistryItemFromHex,
  isCryptoAccount,
  isCryptoHDKey,
  ProviderKeystoneError,
} from '../../utils/keystone';
import {Provider} from '../base-provider';
import {ProviderInterface} from '../types';
import {AccountInfo, ProviderKeystoneBaseOptions} from './types';

type HDPath = string;

const SUPPORTED_REGISTRY_TYPES: string[] = [
  SupportedRegistryTypeEnum.CryptoAccount,
  SupportedRegistryTypeEnum.CryptoHDkey,
];

export class ProviderKeystoneBase
  extends Provider<ProviderKeystoneBaseOptions>
  implements ProviderInterface
{
  protected _xfp: string = '';
  protected _registryItem: RegistryItem;
  protected _cryptoAccontDataMap: Record<HDPath, AccountInfo> = {};

  constructor(options: ProviderKeystoneBaseOptions) {
    super({...options, getPassword: () => Promise.resolve('')});

    this._registryItem = getRegistryItemFromHex(this._options.qrCBORHex);

    if (!this._registryItem) {
      this._throwError(ProviderKeystonErrorEnum.InvalidCborHex, 'constructor');
    }

    if (
      !SUPPORTED_REGISTRY_TYPES.includes(
        this._registryItem.getRegistryType().getType(),
      )
    ) {
      this._throwError(
        ProviderKeystonErrorEnum.UnsupportedRegistryType,
        'constructor',
      );
    }

    if (isCryptoHDKey(this._registryItem)) {
      this._initWithCryptoHDKey(this._registryItem);
    }

    if (isCryptoAccount(this._registryItem)) {
      this._initWithCryptoAccount(this._registryItem);
    }
  }

  getIdentifier(): string {
    return this._options.qrCBORHex;
  }

  getKeyringAccount(): KeyringAccountEnum {
    if (isCryptoAccount(this._registryItem)) {
      const descriptor = this._registryItem.getOutputDescriptors().find(d => {
        try {
          return !!d.getHDKey()?.getNote();
        } catch (e) {
          return false;
        }
      });
      return descriptor?.getHDKey()?.getNote() as KeyringAccountEnum;
    }

    return KeyringAccountEnum.standard;
  }

  getPathPattern() {
    return PATHS_PATTERN_MAP[this.getKeyringAccount()];
  }

  async getAccountInfo(hdPath: string) {
    let resp = {publicKey: '', address: ''};
    try {
      if (isCryptoHDKey(this._registryItem)) {
        resp = await this._getAccountInfoForCryptoHdKey(
          hdPath,
          this._registryItem,
        );
      }

      if (isCryptoAccount(this._registryItem)) {
        resp = await this._getAccountInfoForCryptoAccount(hdPath);
      }

      this.emit('getPublicKeyForHDPath', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'getPublicKeyForHDPath');
      }
    }
    return resp;
  }

  buildPath(index: number) {
    return this.getPathPattern().replace(PATH_INDEX_KEY, `${index}`);
  }

  abort() {
    this.emit('abortCall');
  }

  private _initWithCryptoHDKey(hdKey: CryptoHDKey) {
    this._xfp =
      hdKey.getOrigin()?.getSourceFingerprint()?.toString('hex') || '';
  }

  private _initWithCryptoAccount(account: CryptoAccount) {
    this._xfp = account.getMasterFingerprint().toString('hex');
    for (const descriptor of account.getOutputDescriptors()) {
      try {
        const cryptoHDKey = descriptor.getHDKey();
        if (cryptoHDKey) {
          const key = cryptoHDKey.getKey();
          const path = cryptoHDKey.getOrigin().getPath() as HDPath;
          const address = ethers.utils.computeAddress(key);
          const publicKey = `0x${key.toString('hex')}`;
          this._cryptoAccontDataMap[path] = {
            address,
            publicKey,
          };
        }
      } catch (e) {
        throw new Error(`KeystoneError#invalid_data: ${e}`);
      }
    }
  }

  private async _getAccountInfoForCryptoHdKey(
    hdPath: string,
    hdKey: CryptoHDKey,
  ) {
    const rootPath = `${hdKey.getOrigin().getPath()}/`;
    const subPath = hdPath.replace(rootPath, '');

    const hdNode = HDNode.fromExtendedKey(hdKey.getBip32Key()).derivePath(
      subPath,
    );

    return {
      publicKey: hdNode.publicKey,
      address: ethers.utils.computeAddress(hdNode.publicKey),
    };
  }

  private async _getAccountInfoForCryptoAccount(hdPath: string) {
    const accointInfo = this._cryptoAccontDataMap[hdPath];

    if (!accointInfo) {
      this._throwError(ProviderKeystonErrorEnum.InvalidPath, 'getAccountInfo');
    }

    return accointInfo;
  }

  protected _throwError(errCode: ProviderKeystonErrorEnum, source: string) {
    const errMsg = `[EvmKeystoneProvider:${source}]: ${errCode}`;
    this.emit(source, false, errMsg, errCode);
    throw new ProviderKeystoneError(errMsg, errCode, source);
  }
}
