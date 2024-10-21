export type ProviderHotBaseOptions = {
  account: string;
  getPassword: () => Promise<string>;
};

export type ProviderHotTronOptions = ProviderHotBaseOptions & {
  tronWebHostUrl: string;
};
