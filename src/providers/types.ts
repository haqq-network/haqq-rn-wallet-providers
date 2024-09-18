import {TypedDataField} from 'ethers';
import EventEmitter from 'events';

export type ProviderBaseOptions = {
  getPassword: () => Promise<string>;
};

/**
 * Base provider for other providers
 * extends EventEmitter
 */
export interface ProviderInterface extends EventEmitter {
  getIdentifier: () => string;
  /**
   * Get public key and address for hd path
   * @param {string} hdPath HD path
   */
  getAccountInfo: (
    hdPath: string,
  ) => Promise<{publicKey: string; address: string}>;
  getPrivateKey: (hdPath: string) => Promise<string>;
  /**
   * Sign transaction
   * @param {string} hdPath HD path for subscribe
   * @param {TransactionRequest} transaction transaction for sign
   * @returns signature of transaction
   */
  signTransaction: (
    hdPath: string,
    transaction: TransactionRequest,
  ) => Promise<string>;

  /**
   * Sign personal message
   * @param {string} hdPath HD path for subscribe
   * @param {string | BytesLike} message message
   * @returns signature of personal message
   */
  signPersonalMessage: (
    hdPath: string,
    message: string | BytesLike,
  ) => Promise<string>;
  /**
   * Sign typed data
   * @param {string} hdPath HD path for subscribe
   * @param {TypedData} typedData
   * @returns signature of typed data
   */
  signTypedData: (hdPath: string, typedData: TypedData) => Promise<string>;
  /**
   * Stop action
   */
  abort: () => void;
  /**
   * Update pin for encrypted providers
   * @param {string} pin
   */
  updatePin: (pin: string) => Promise<void>;
  /**
   * Clean provider storage
   */
  clean: () => Promise<void>;
}

export type Bytes = ArrayLike<number>;

export type BigNumberish = Bytes | bigint | string | number;

export type BytesLike = Bytes | string;

export type AccessList = {address: string; storageKeys: string[]}[];

// Input allows flexibility in describing an access list
export type AccessListish =
  | AccessList
  | [string, string[]][]
  | Record<string, string[]>;

export type TransactionRequest = {
  to?: string;
  from?: string;
  nonce?: BigNumberish;

  gasLimit?: BigNumberish;
  gasPrice?: BigNumberish;

  data?: BytesLike;
  value?: BigNumberish;
  chainId?: number;

  type?: number;
  accessList?: AccessListish;

  maxPriorityFeePerGas?: BigNumberish;
  maxFeePerGas?: BigNumberish;

  customData?: Record<string, any>;
  ccipReadEnabled?: boolean;
};

export type TypedDataTypesNames = string | 'EIP712Domain';

export type TypedData = {
  domain: Record<string, any>;
  types: Record<TypedDataTypesNames, TypedDataField[]>;
  message: Record<string, any>;
};

export type ProviderBaseError = {
  error: Error;
  source: string;
};
