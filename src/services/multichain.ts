import * as bip32 from 'bip32';
import {mnemonicToSeed} from 'bip39';
import * as CryptoJS from 'crypto-js';
import {ec} from 'elliptic';

import {NETWORK_TYPE} from '../providers/types';
import {encodeBase58} from '../utils';

export class Multichain {
  static async generatePrivateKey(
    type: NETWORK_TYPE,
    hdPath: string,
    mnemonic: string,
  ): Promise<string> {
    switch (type) {
      case NETWORK_TYPE.TRON:
        return Multichain.generateTronPrivateKey(hdPath, mnemonic);
      default:
        return '';
    }
  }

  private static async generateTronPrivateKey(
    hdPath: string,
    mnemonic: string,
  ): Promise<string> {
    const tronSeed = await mnemonicToSeed(mnemonic);
    const root = bip32.fromSeed(tronSeed);
    const child = root.derivePath(hdPath);
    return child.privateKey.toString('hex');
  }

  static async generateAddress(
    type: NETWORK_TYPE,
    hdPath: string,
    mnemonic: string,
  ): Promise<string> {
    switch (type) {
      case NETWORK_TYPE.TRON:
        return Multichain.generateTronAddress(
          await this.generateTronPrivateKey(hdPath, mnemonic),
        );
      default:
        return '';
    }
  }

  private static async generateTronAddress(
    privateKey: string,
  ): Promise<string> {
    const EC = new ec('secp256k1');

    // Create key pair from private key
    const keyPair = EC.keyFromPrivate(privateKey);

    // Get public key and remove prefix 0x
    const publicKey = keyPair.getPublic('hex').slice(2);

    // Hashing public key with Keccak256
    const publicKeyHash = CryptoJS.SHA3(publicKey, {
      outputLength: 256,
    }).toString();

    // Get last 20 bites (40 hex symbols) from public key's hash
    // Also add TRON prefix 41
    const tronAddressHex = '41' + publicKeyHash.slice(-40);

    // Convert hex-address to base58 which is TRON address format
    const addressBuffer = Buffer.from(tronAddressHex, 'hex');
    const addressHash = CryptoJS.SHA256(
      CryptoJS.SHA256(addressBuffer).toString(CryptoJS.enc.Hex),
    ).toString(CryptoJS.enc.Hex);
    const checksum = addressHash.slice(0, 8);

    return encodeBase58(
      Buffer.concat([addressBuffer, Buffer.from(checksum, 'hex')]),
    );
  }
}
