export type ProviderHotBaseOptions = {
  account: string;
  getPassword: () => Promise<string>;
};
