export type Device = {
  id: string;

  /**
   * Device name if present
   */
  name: string | null;
};

export type ProviderLedgerBaseOptions = {
  deviceId: string;
  appName?: string;
};
