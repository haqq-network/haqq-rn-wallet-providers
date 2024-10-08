import {
  generateMnemonicFromEntropy,
  seedFromMnemonic,
} from '@haqq/provider-web3-utils';
import {decryptShare} from '@haqq/shared-react-native';
import BN from 'bn.js';
import EncryptedStorage from 'react-native-encrypted-storage';

import {lagrangeInterpolation} from './lagrange-interpolation';

import {ITEM_KEYS, WalletType} from '../../constants';
import {StorageInterface} from '../../providers/sss/types';

export async function getSeed(
  account: string,
  storage: StorageInterface,
  getPassword: () => Promise<string>,
) {
  let shares = [];

  const share1 = await EncryptedStorage.getItem(
    `${ITEM_KEYS[WalletType.sss]}_${account}`,
  );

  if (share1) {
    const password = await getPassword();
    const shareStore = await decryptShare(JSON.parse(share1), password);

    shares.push(shareStore);
  }

  const content = await storage.getItem(`haqq_${account}`);

  if (content) {
    shares.push(JSON.parse(content));
  }

  shares = shares.filter(Boolean);

  if (shares.length < 2) {
    throw new Error('not enough shares');
  }

  const polynomialIDs = new Set(shares.map(s => s.polynomialID));

  if (polynomialIDs.size > 1) {
    throw new Error('polynomialID not equals');
  }

  const privKey = lagrangeInterpolation(
    shares.map(s => new BN(s.share, 'hex')),
    shares.map(s => new BN(s.shareIndex, 'hex')),
  );

  const mnemonic = await generateMnemonicFromEntropy(privKey.toBuffer());
  const seed = await seedFromMnemonic(mnemonic);
  return {seed, mnemonic};
}
