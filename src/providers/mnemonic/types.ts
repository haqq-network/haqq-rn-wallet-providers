export type ProviderMnemonicBaseOptions = {
  account: string;
  getPassword: () => Promise<string>;
};
