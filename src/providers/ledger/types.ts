export type Device = {
  id: string;

  /**
   * Device name if present
   */
  name: string | null;
};

export type ProviderLedgerReactNativeOptions = {
  deviceId: string;
  appName?: string;
};
