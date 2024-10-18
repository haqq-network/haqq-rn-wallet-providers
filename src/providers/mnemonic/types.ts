export type ProviderMnemonicBaseOptions = {
  account: string;
  getPassword: () => Promise<string>;
};

export type ProviderMnemonicTronOptions = ProviderMnemonicBaseOptions & {
  tronWebHostUrl: string;
};
