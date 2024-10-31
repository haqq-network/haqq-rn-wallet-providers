[@haqq/rn-wallet-providers - v0.0.11](../README.md) / [Exports](../modules.md) / providers

# Namespace: providers

## Table of contents

### Enumerations

- [NETWORK\_TYPE](../enums/providers.NETWORK_TYPE.md)

### Classes

- [ProviderBase](../classes/providers.ProviderBase.md)
- [ProviderHotBase](../classes/providers.ProviderHotBase.md)
- [ProviderHotEvm](../classes/providers.ProviderHotEvm.md)
- [ProviderHotTron](../classes/providers.ProviderHotTron.md)
- [ProviderKeystoneBase](../classes/providers.ProviderKeystoneBase.md)
- [ProviderKeystoneEvm](../classes/providers.ProviderKeystoneEvm.md)
- [ProviderLedgerBase](../classes/providers.ProviderLedgerBase.md)
- [ProviderLedgerEvm](../classes/providers.ProviderLedgerEvm.md)
- [ProviderMnemonicBase](../classes/providers.ProviderMnemonicBase.md)
- [ProviderMnemonicEvm](../classes/providers.ProviderMnemonicEvm.md)
- [ProviderMnemonicTron](../classes/providers.ProviderMnemonicTron.md)
- [ProviderSSSBase](../classes/providers.ProviderSSSBase.md)
- [ProviderSSSEvm](../classes/providers.ProviderSSSEvm.md)
- [ProviderSSSTron](../classes/providers.ProviderSSSTron.md)

### Interfaces

- [ProviderInterface](../interfaces/providers.ProviderInterface.md)
- [StorageInterface](../interfaces/providers.StorageInterface.md)

### Type Aliases

- [AccessList](providers.md#accesslist)
- [AccessListish](providers.md#accesslistish)
- [AccountInfo](providers.md#accountinfo)
- [AsyncReturnType](providers.md#asyncreturntype)
- [BigNumberish](providers.md#bignumberish)
- [Bytes](providers.md#bytes)
- [BytesLike](providers.md#byteslike)
- [Device](providers.md#device)
- [KeystoneAwaitForSignParams](providers.md#keystoneawaitforsignparams)
- [KeystoneAwaitForSignReturnType](providers.md#keystoneawaitforsignreturntype)
- [ProviderBaseError](providers.md#providerbaseerror)
- [ProviderBaseOptions](providers.md#providerbaseoptions)
- [ProviderHotBaseOptions](providers.md#providerhotbaseoptions)
- [ProviderHotTronOptions](providers.md#providerhottronoptions)
- [ProviderKeystoneBaseOptions](providers.md#providerkeystonebaseoptions)
- [ProviderLedgerBaseOptions](providers.md#providerledgerbaseoptions)
- [ProviderMnemonicBaseOptions](providers.md#providermnemonicbaseoptions)
- [ProviderMnemonicTronOptions](providers.md#providermnemonictronoptions)
- [ProviderSSSBaseOptions](providers.md#providersssbaseoptions)
- [ProviderSSSTronOptions](providers.md#providerssstronoptions)
- [Share](providers.md#share)
- [ShareEncrypted](providers.md#shareencrypted)
- [TransactionRequest](providers.md#transactionrequest)
- [TypedData](providers.md#typeddata)
- [TypedDataTypesNames](providers.md#typeddatatypesnames)

## Type Aliases

### AccessList

Ƭ **AccessList**: \{ `address`: `string` ; `storageKeys`: `string`[]  }[]

#### Defined in

[src/providers/types.ts:72](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L72)

___

### AccessListish

Ƭ **AccessListish**: [`AccessList`](providers.md#accesslist) \| [`string`, `string`[]][] \| `Record`\<`string`, `string`[]\>

#### Defined in

[src/providers/types.ts:75](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L75)

___

### AccountInfo

Ƭ **AccountInfo**: [`AsyncReturnType`](providers.md#asyncreturntype)\<[`ProviderInterface`](../interfaces/providers.ProviderInterface.md)[``"getAccountInfo"``]\>

#### Defined in

[src/providers/keystone/types.ts:28](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/keystone/types.ts#L28)

___

### AsyncReturnType

Ƭ **AsyncReturnType**\<`T`\>: `T` extends (...`args`: `any`) => `Promise`\<infer U\> ? `U` : `T` extends (...`args`: `any`) => infer U ? `U` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

[src/providers/keystone/types.ts:20](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/keystone/types.ts#L20)

___

### BigNumberish

Ƭ **BigNumberish**: [`Bytes`](providers.md#bytes) \| `bigint` \| `string` \| `number`

#### Defined in

[src/providers/types.ts:68](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L68)

___

### Bytes

Ƭ **Bytes**: `ArrayLike`\<`number`\>

#### Defined in

[src/providers/types.ts:66](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L66)

___

### BytesLike

Ƭ **BytesLike**: [`Bytes`](providers.md#bytes) \| `string`

#### Defined in

[src/providers/types.ts:70](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L70)

___

### Device

Ƭ **Device**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `name` | `string` \| ``null`` | Device name if present |

#### Defined in

[src/providers/ledger/types.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/ledger/types.ts#L1)

___

### KeystoneAwaitForSignParams

Ƭ **KeystoneAwaitForSignParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cborHex` | `string` |
| `requestID` | `string` |
| `urType` | `string` |

#### Defined in

[src/providers/keystone/types.ts:3](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/keystone/types.ts#L3)

___

### KeystoneAwaitForSignReturnType

Ƭ **KeystoneAwaitForSignReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `signatureHex` | `string` |

#### Defined in

[src/providers/keystone/types.ts:9](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/keystone/types.ts#L9)

___

### ProviderBaseError

Ƭ **ProviderBaseError**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `source` | `string` |

#### Defined in

[src/providers/types.ts:110](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L110)

___

### ProviderBaseOptions

Ƭ **ProviderBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPassword` | () => `Promise`\<`string`\> |

#### Defined in

[src/providers/types.ts:5](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L5)

___

### ProviderHotBaseOptions

Ƭ **ProviderHotBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |

#### Defined in

[src/providers/hot/types.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/types.ts#L1)

___

### ProviderHotTronOptions

Ƭ **ProviderHotTronOptions**: [`ProviderHotBaseOptions`](providers.md#providerhotbaseoptions) & \{ `tronWebHostUrl`: `string`  }

#### Defined in

[src/providers/hot/types.ts:6](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/types.ts#L6)

___

### ProviderKeystoneBaseOptions

Ƭ **ProviderKeystoneBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `qrCBORHex` | `string` |
| `awaitForSign` | (`params`: [`KeystoneAwaitForSignParams`](providers.md#keystoneawaitforsignparams)) => `Promise`\<[`KeystoneAwaitForSignReturnType`](providers.md#keystoneawaitforsignreturntype)\> |

#### Defined in

[src/providers/keystone/types.ts:13](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/keystone/types.ts#L13)

___

### ProviderLedgerBaseOptions

Ƭ **ProviderLedgerBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appName?` | `string` |
| `deviceId` | `string` |

#### Defined in

[src/providers/ledger/types.ts:10](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/ledger/types.ts#L10)

___

### ProviderMnemonicBaseOptions

Ƭ **ProviderMnemonicBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |

#### Defined in

[src/providers/mnemonic/types.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/mnemonic/types.ts#L1)

___

### ProviderMnemonicTronOptions

Ƭ **ProviderMnemonicTronOptions**: [`ProviderMnemonicBaseOptions`](providers.md#providermnemonicbaseoptions) & \{ `tronWebHostUrl`: `string`  }

#### Defined in

[src/providers/mnemonic/types.ts:6](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/mnemonic/types.ts#L6)

___

### ProviderSSSBaseOptions

Ƭ **ProviderSSSBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |
| `storage` | [`StorageInterface`](../interfaces/providers.StorageInterface.md) |

#### Defined in

[src/providers/sss/types.ts:13](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/sss/types.ts#L13)

___

### ProviderSSSTronOptions

Ƭ **ProviderSSSTronOptions**: [`ProviderSSSBaseOptions`](providers.md#providersssbaseoptions) & \{ `tronWebHostUrl`: `string`  }

#### Defined in

[src/providers/sss/types.ts:32](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/sss/types.ts#L32)

___

### Share

Ƭ **Share**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `polynomialID` | `string` |
| `share` | `string` |
| `shareIndex` | `string` |

#### Defined in

[src/providers/sss/types.ts:19](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/sss/types.ts#L19)

___

### ShareEncrypted

Ƭ **ShareEncrypted**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `nonce` | `string` |
| `polynomialID` | `string` |
| `publicShare` | `string` |
| `shareIndex` | `string` |

#### Defined in

[src/providers/sss/types.ts:25](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/sss/types.ts#L25)

___

### TransactionRequest

Ƭ **TransactionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessList?` | [`AccessListish`](providers.md#accesslistish) |
| `ccipReadEnabled?` | `boolean` |
| `chainId?` | `number` |
| `customData?` | `Record`\<`string`, `any`\> |
| `data?` | [`BytesLike`](providers.md#byteslike) |
| `from?` | `string` |
| `gasLimit?` | [`BigNumberish`](providers.md#bignumberish) |
| `gasPrice?` | [`BigNumberish`](providers.md#bignumberish) |
| `maxFeePerGas?` | [`BigNumberish`](providers.md#bignumberish) |
| `maxPriorityFeePerGas?` | [`BigNumberish`](providers.md#bignumberish) |
| `nonce?` | [`BigNumberish`](providers.md#bignumberish) |
| `to?` | `string` |
| `type?` | `number` |
| `value?` | [`BigNumberish`](providers.md#bignumberish) |

#### Defined in

[src/providers/types.ts:80](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L80)

___

### TypedData

Ƭ **TypedData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domain` | `Record`\<`string`, `any`\> |
| `message` | `Record`\<`string`, `any`\> |
| `types` | `Record`\<[`TypedDataTypesNames`](providers.md#typeddatatypesnames), `TypedDataField`[]\> |

#### Defined in

[src/providers/types.ts:104](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L104)

___

### TypedDataTypesNames

Ƭ **TypedDataTypesNames**: `string` \| ``"EIP712Domain"``

#### Defined in

[src/providers/types.ts:102](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L102)
