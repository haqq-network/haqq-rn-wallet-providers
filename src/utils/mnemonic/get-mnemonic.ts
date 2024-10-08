import {decrypt} from '@haqq/encryption-react-native';
import {Share, decryptShare, encryptShare} from '@haqq/shared-react-native';
import {mnemonicToEntropy} from 'bip39';
import EncryptedStorage from 'react-native-encrypted-storage';

import {ITEM_KEYS, WalletType} from '../../constants';

export async function getMnemonic(
  id: string,
  getPassword: () => Promise<string>,
) {
  const password = await getPassword();
  const data = await EncryptedStorage.getItem(
    `${ITEM_KEYS[WalletType.mnemonic]}_${id}`,
  );

  if (!data) {
    throw new Error('encrypted_data_not_found');
  }

  const parsed = JSON.parse(data);
  let share;
  if (!parsed.publicShare) {
    const resp = await decrypt<{
      mnemonic: string;
      seed: string;
    }>(password, data);

    const entropy = mnemonicToEntropy(resp.mnemonic);

    share = {
      share: entropy.padStart(64, '0'),
      shareIndex: entropy.length.toString(),
      polynomialID: '0',
    } as Share;

    const encryptedShare = await encryptShare(share, password);
    await EncryptedStorage.setItem(
      `${ITEM_KEYS[WalletType.mnemonic]}_${id}`,
      JSON.stringify(encryptedShare),
    );
  } else {
    share = await decryptShare(parsed, password);
  }

  if (!share.share) {
    throw new Error('private_key_not_found');
  }

  return share;
}
