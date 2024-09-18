import {
  CryptoAccount,
  CryptoHDKey,
  RegistryItem,
} from '@keystonehq/bc-ur-registry-eth';

export function isCryptoHDKey(item: RegistryItem): item is CryptoHDKey {
  return item instanceof CryptoHDKey;
}

export function isCryptoAccount(item: RegistryItem): item is CryptoAccount {
  return item instanceof CryptoAccount;
}
