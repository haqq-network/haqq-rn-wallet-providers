import {ProviderInterface} from '../types';

export type KeystoneAwaitForSignParams = {
  cborHex: string;
  urType: string;
  requestID: string;
};

export type KeystoneAwaitForSignReturnType = {
  signatureHex: string;
};

export type ProviderKeystoneBaseOptions = {
  qrCBORHex: string;
  awaitForSign(
    params: KeystoneAwaitForSignParams,
  ): Promise<KeystoneAwaitForSignReturnType>;
};

export type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

export type AccountInfo = AsyncReturnType<ProviderInterface['getAccountInfo']>;
