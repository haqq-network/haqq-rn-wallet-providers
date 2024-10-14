import {accountInfo, derive, seedFromEntropy} from '@haqq/provider-web3-utils';
import {generateEntropy} from '@haqq/provider-web3-utils/src/native-modules';
import {Share, encryptShare} from '@haqq/shared-react-native';
import {entropyToMnemonic, mnemonicToEntropy, mnemonicToSeed} from 'bip39';
import EncryptedStorage from 'react-native-encrypted-storage';

import {ProviderMnemonicBaseOptions} from './types';

import {ITEM_KEYS, WalletType} from '../../constants';
import {Multichain} from '../../services/multichain';
import {compressPublicKey, convertHdPath} from '../../utils';
import {getMnemonic} from '../../utils/mnemonic/get-mnemonic';
import {ProviderBase} from '../base-provider';
import {NETWORK_TYPE, ProviderBaseOptions, ProviderInterface} from '../types';

export class ProviderMnemonicBase
  extends ProviderBase<ProviderMnemonicBaseOptions>
  implements ProviderInterface
{
  static async initialize(
    mnemonic: string | null,
    getPassword: () => Promise<string>,
    options: Omit<ProviderBaseOptions, 'getPassword'>,
  ): Promise<ProviderMnemonicBase> {
    const password = await getPassword();

    const entropy =
      mnemonic === null
        ? (await generateEntropy(16)).toString('hex')
        : mnemonicToEntropy(mnemonic);

    const seed = await mnemonicToSeed(entropyToMnemonic(entropy));

    const privateData = await encryptShare(
      {
        share: entropy.padStart(64, '0'),
        shareIndex: entropy.length.toString(),
        polynomialID: '0',
      },
      password,
    );

    const rootPrivateKey = await derive(seed.toString('hex'), 'm');
    const {address} = await accountInfo(rootPrivateKey);

    await EncryptedStorage.setItem(
      `${ITEM_KEYS[WalletType.mnemonic]}_${address.toLowerCase()}`,
      JSON.stringify(privateData),
    );

    const accounts = await ProviderMnemonicBase.getAccounts();

    await EncryptedStorage.setItem(
      `${ITEM_KEYS[WalletType.mnemonic]}_accounts`,
      JSON.stringify(accounts.concat(address.toLowerCase())),
    );

    return new ProviderMnemonicBase({
      ...options,
      getPassword,
      account: address.toLowerCase(),
    });
  }

  static async getAccounts() {
    const storedKeys = await EncryptedStorage.getItem(
      `${ITEM_KEYS[WalletType.mnemonic]}_accounts`,
    );

    return JSON.parse(storedKeys ?? '[]') as string[];
  }

  static async shareToSeed(share: Share) {
    const entropyLength = parseInt(share.shareIndex, 10);
    const entropy = share.share
      .slice(-1 * entropyLength)
      .padStart(entropyLength, '0');

    return seedFromEntropy(Buffer.from(entropy, 'hex'));
  }

  async updatePin(pin: string) {
    try {
      const decryptedData = await getMnemonic(
        this._options.account,
        this._options.getPassword,
      );
      const privateData = await encryptShare(decryptedData, pin);

      await EncryptedStorage.setItem(
        `${
          ITEM_KEYS[WalletType.mnemonic]
        }_${this.getIdentifier().toLowerCase()}`,
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
        `${
          ITEM_KEYS[WalletType.mnemonic]
        }_${this.getIdentifier().toLowerCase()}`,
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

  async getAccountInfo(hdPath: string) {
    let resp = {publicKey: '', address: '', tronAddress: ''};
    try {
      const share = await getMnemonic(
        this._options.account,
        this._options.getPassword,
      );

      if (!share) {
        throw new Error('seed_not_found');
      }

      const seed = await ProviderMnemonicBase.shareToSeed(share);

      const ethPrivateKey = await derive(seed, hdPath);
      const tronAddress = await Multichain.generateAddress(
        NETWORK_TYPE.TRON,
        convertHdPath(hdPath, NETWORK_TYPE.TRON),
        await this.getMnemonicPhrase(),
      );

      if (!ethPrivateKey) {
        throw new Error('private_key_not_found');
      }

      const account = await accountInfo(ethPrivateKey);

      resp = {
        publicKey: compressPublicKey(account.publicKey),
        address: account.address,
        tronAddress,
      };
      this.emit('getPublicKeyForHDPath', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'getPublicKeyForHDPath');
      }
    }
    return resp;
  }

  /**
   * Check is mnemonic saved
   */
  async isMnemonicSaved(): Promise<boolean> {
    const storedKeys = await EncryptedStorage.getItem(
      `${ITEM_KEYS[WalletType.mnemonic]}_saved`,
    );
    const accounts = JSON.parse(storedKeys ?? '[]') as string[];
    return accounts.includes(this.getIdentifier().toLowerCase());
  }

  /**
   * Set mnemonic saved
   */
  async setMnemonicSaved() {
    const storedKeys = await EncryptedStorage.getItem(
      `${ITEM_KEYS[WalletType.mnemonic]}_saved`,
    );
    const accounts = JSON.parse(storedKeys ?? '[]') as string[];
    await EncryptedStorage.setItem(
      `${ITEM_KEYS[WalletType.mnemonic]}_saved`,
      JSON.stringify(accounts.concat(this.getIdentifier().toLowerCase())),
    );
  }

  /**
   * Get mnemonic phrase
   * @returns mnemonic
   */
  async getMnemonicPhrase(): Promise<string> {
    const share = await getMnemonic(
      this._options.account,
      this._options.getPassword,
    );

    const entropyLength = parseInt(share.shareIndex, 10);
    const entropy = share.share
      .slice(-1 * entropyLength)
      .padStart(entropyLength, '0');

    return entropyToMnemonic(entropy);
  }
}
