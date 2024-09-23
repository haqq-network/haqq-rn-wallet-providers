import {decrypt} from '@haqq/encryption-react-native';
import {Share, decryptShare, encryptShare} from '@haqq/shared-react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

import {ITEM_KEYS, WalletType} from '../../constants';

export async function getPrivateKey(
  id: string,
  getPassword: () => Promise<string>,
): Promise<Share> {
  const password = await getPassword();
  const data = await EncryptedStorage.getItem(
    `${ITEM_KEYS[WalletType.hot]}_${id}`,
  );

  if (!data) {
    throw new Error('encrypted_data_not_found');
  }

  const parsed = JSON.parse(data);
  let share;
  if (!parsed.publicShare) {
    const resp = await decrypt<{privateKey: string}>(password, data);
    share = {
      share: resp.privateKey,
      shareIndex: '0',
      polynomialID: '0',
    } as Share;

    const encryptedShare = await encryptShare(share, password);
    await EncryptedStorage.setItem(
      `${ITEM_KEYS[WalletType.hot]}_${id}`,
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
