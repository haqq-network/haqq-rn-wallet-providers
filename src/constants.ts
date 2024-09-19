export enum WalletType {
  hot = 'hot',
  mnemonic = 'mnemonic',
  sss = 'sss',
  ledger = 'ledger',
  keystone = 'keystone',
}

export enum BlochchainType {
  evm = 'evm',
  tron = 'tron',
}

export const ITEM_KEYS = {
  [WalletType.hot]: 'hot',
  [WalletType.mnemonic]: 'mnemonic',
  [WalletType.keystone]: 'keystone',
  [WalletType.ledger]: 'ledger',
  [WalletType.sss]: 'sss',
};

export enum SupportedRegistryTypeEnum {
  CryptoHDkey = 'crypto-hdkey',
  CryptoAccount = 'crypto-account',
}

export enum ProviderKeystonErrorEnum {
  UnsupportedRegistryType = 'unsupported_registry_type',
  InvalidCborHex = 'invalid_cbor_hex',
  InvalidPath = 'invalid_path',
  InvalidRequestID = 'invalid_request_id',
}

export enum KeyringAccountEnum {
  standard = 'account.standard',
  ledger_live = 'account.ledger_live',
  ledger_legacy = 'account.ledger_legacy',
}

export const PATH_INDEX_KEY = '{{index}}';

export const PATHS_PATTERN_MAP = {
  [KeyringAccountEnum.standard]: `44'/60'/0'/0/${PATH_INDEX_KEY}`,
  [KeyringAccountEnum.ledger_live]: `44'/60'/${PATH_INDEX_KEY}'/0/0`,
  [KeyringAccountEnum.ledger_legacy]: `44'/60'/0'/${PATH_INDEX_KEY}`,
};

export enum BluetoothState {
  /**
   * The current state of the manager is unknown; an update is imminent.
   */
  Unknown = 'Unknown',
  /**
   * The connection with the system service was momentarily lost; an update is imminent.
   */
  Resetting = 'Resetting',
  /**
   * The platform does not support Bluetooth low energy.
   */
  Unsupported = 'Unsupported',
  /**
   * The app is not authorized to use Bluetooth low energy.
   */
  Unauthorized = 'Unauthorized',
  /**
   * Bluetooth is currently powered off.
   */
  PoweredOff = 'PoweredOff',
  /**
   * Bluetooth is currently powered on and available to use.
   */
  PoweredOn = 'PoweredOn',
}
