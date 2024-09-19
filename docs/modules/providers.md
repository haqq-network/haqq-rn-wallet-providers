[@haqq/rn-wallet-providers - v0.0.1](../README.md) / [Exports](../modules.md) / providers

# Namespace: providers

## Table of contents

### Classes

- [Provider](../classes/providers.Provider.md)
- [ProviderHotEvm](../classes/providers.ProviderHotEvm.md)
- [ProviderKeystoneEvm](../classes/providers.ProviderKeystoneEvm.md)
- [ProviderLedgerEvm](../classes/providers.ProviderLedgerEvm.md)
- [ProviderMnemonicEvm](../classes/providers.ProviderMnemonicEvm.md)
- [ProviderSSSEvm](../classes/providers.ProviderSSSEvm.md)

### Interfaces

- [StorageInterface](../interfaces/providers.StorageInterface.md)

### Type Aliases

- [AccountInfo](providers.md#accountinfo)
- [AsyncReturnType](providers.md#asyncreturntype)
- [Device](providers.md#device)
- [KeystoneAwaitForSignParams](providers.md#keystoneawaitforsignparams)
- [KeystoneAwaitForSignReturnType](providers.md#keystoneawaitforsignreturntype)
- [ProviderHotBaseOptions](providers.md#providerhotbaseoptions)
- [ProviderKeystoneBaseOptions](providers.md#providerkeystonebaseoptions)
- [ProviderLedgerBaseOptions](providers.md#providerledgerbaseoptions)
- [ProviderMnemonicBaseOptions](providers.md#providermnemonicbaseoptions)
- [ProviderSSSBaseOptions](providers.md#providersssbaseoptions)
- [Share](providers.md#share)
- [ShareEncrypted](providers.md#shareencrypted)

## Type Aliases

### AccountInfo

Ƭ **AccountInfo**: [`AsyncReturnType`](providers.md#asyncreturntype)\<`ProviderInterface`[``"getAccountInfo"``]\>

#### Defined in

[src/providers/keystone/types.ts:28](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/keystone/types.ts#L28)

___

### AsyncReturnType

Ƭ **AsyncReturnType**\<`T`\>: `T` extends (...`args`: `any`) => `Promise`\<infer U\> ? `U` : `T` extends (...`args`: `any`) => infer U ? `U` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

[src/providers/keystone/types.ts:20](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/keystone/types.ts#L20)

___

### Device

Ƭ **Device**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `name` | `string` \| ``null`` | Device name if present |

#### Defined in

[src/providers/ledger/types.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/ledger/types.ts#L1)

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

[src/providers/keystone/types.ts:3](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/keystone/types.ts#L3)

___

### KeystoneAwaitForSignReturnType

Ƭ **KeystoneAwaitForSignReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `signatureHex` | `string` |

#### Defined in

[src/providers/keystone/types.ts:9](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/keystone/types.ts#L9)

___

### ProviderHotBaseOptions

Ƭ **ProviderHotBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |

#### Defined in

[src/providers/hot/types.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/hot/types.ts#L1)

___

### ProviderKeystoneBaseOptions

Ƭ **ProviderKeystoneBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `qrCBORHex` | `string` |
| `awaitForSign` | (`params`: [`KeystoneAwaitForSignParams`](providers.md#keystoneawaitforsignparams)) => `Promise`\<[`KeystoneAwaitForSignReturnType`](providers.md#keystoneawaitforsignreturntype)\> |

#### Defined in

[src/providers/keystone/types.ts:13](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/keystone/types.ts#L13)

___

### ProviderLedgerBaseOptions

Ƭ **ProviderLedgerBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appName?` | `string` |
| `deviceId` | `string` |

#### Defined in

[src/providers/ledger/types.ts:10](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/ledger/types.ts#L10)

___

### ProviderMnemonicBaseOptions

Ƭ **ProviderMnemonicBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |

#### Defined in

[src/providers/mnemonic/types.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/mnemonic/types.ts#L1)

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

[src/providers/sss/types.ts:13](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/sss/types.ts#L13)

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

[src/providers/sss/types.ts:19](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/sss/types.ts#L19)

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

[src/providers/sss/types.ts:25](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/sss/types.ts#L25)
