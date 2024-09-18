[@haqq/rn-wallet-providers - v0.0.1](../README.md) / [Exports](../modules.md) / providers

# Namespace: providers

## Table of contents

### Classes

- [Provider](../classes/providers.Provider.md)
- [ProviderHotReactNative](../classes/providers.ProviderHotReactNative.md)
- [ProviderKeystoneReactNative](../classes/providers.ProviderKeystoneReactNative.md)
- [ProviderLedgerReactNative](../classes/providers.ProviderLedgerReactNative.md)
- [ProviderMnemonicReactNative](../classes/providers.ProviderMnemonicReactNative.md)
- [ProviderSSSReactNative](../classes/providers.ProviderSSSReactNative.md)

### Interfaces

- [StorageInterface](../interfaces/providers.StorageInterface.md)

### Type Aliases

- [AccountInfo](providers.md#accountinfo)
- [AsyncReturnType](providers.md#asyncreturntype)
- [Device](providers.md#device)
- [KeystoneAwaitForSignParams](providers.md#keystoneawaitforsignparams)
- [KeystoneAwaitForSignReturnType](providers.md#keystoneawaitforsignreturntype)
- [ProviderHotOptions](providers.md#providerhotoptions)
- [ProviderKeystoneReactNativeOptions](providers.md#providerkeystonereactnativeoptions)
- [ProviderLedgerReactNativeOptions](providers.md#providerledgerreactnativeoptions)
- [ProviderMnemonicOptions](providers.md#providermnemonicoptions)
- [ProviderSSSOptions](providers.md#providersssoptions)
- [Share](providers.md#share)
- [ShareEncrypted](providers.md#shareencrypted)

## Type Aliases

### AccountInfo

Ƭ **AccountInfo**: [`AsyncReturnType`](providers.md#asyncreturntype)\<`ProviderInterface`[``"getAccountInfo"``]\>

#### Defined in

src/providers/keystone/types.ts:28

___

### AsyncReturnType

Ƭ **AsyncReturnType**\<`T`\>: `T` extends (...`args`: `any`) => `Promise`\<infer U\> ? `U` : `T` extends (...`args`: `any`) => infer U ? `U` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

src/providers/keystone/types.ts:20

___

### Device

Ƭ **Device**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `name` | `string` \| ``null`` | Device name if present |

#### Defined in

src/providers/ledger/types.ts:1

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

src/providers/keystone/types.ts:3

___

### KeystoneAwaitForSignReturnType

Ƭ **KeystoneAwaitForSignReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `signatureHex` | `string` |

#### Defined in

src/providers/keystone/types.ts:9

___

### ProviderHotOptions

Ƭ **ProviderHotOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |

#### Defined in

src/providers/hot/types.ts:1

___

### ProviderKeystoneReactNativeOptions

Ƭ **ProviderKeystoneReactNativeOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `qrCBORHex` | `string` |
| `awaitForSign` | (`params`: [`KeystoneAwaitForSignParams`](providers.md#keystoneawaitforsignparams)) => `Promise`\<[`KeystoneAwaitForSignReturnType`](providers.md#keystoneawaitforsignreturntype)\> |

#### Defined in

src/providers/keystone/types.ts:13

___

### ProviderLedgerReactNativeOptions

Ƭ **ProviderLedgerReactNativeOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appName?` | `string` |
| `deviceId` | `string` |

#### Defined in

src/providers/ledger/types.ts:10

___

### ProviderMnemonicOptions

Ƭ **ProviderMnemonicOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |

#### Defined in

src/providers/mnemonic/types.ts:1

___

### ProviderSSSOptions

Ƭ **ProviderSSSOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |
| `storage` | [`StorageInterface`](../interfaces/providers.StorageInterface.md) |

#### Defined in

src/providers/sss/types.ts:13

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

src/providers/sss/types.ts:19

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

src/providers/sss/types.ts:25
