[@haqq/rn-wallet-providers - v0.0.1](../README.md) / [Exports](../modules.md) / utils

# Namespace: utils

## Table of contents

### Classes

- [DeviceQueuedJobsManager](../classes/utils.DeviceQueuedJobsManager.md)
- [Polynomial](../classes/utils.Polynomial.md)
- [ProviderKeystoneError](../classes/utils.ProviderKeystoneError.md)

### Type Aliases

- [App](utils.md#app)
- [QueuedJob](utils.md#queuedjob)

### Functions

- [base64PublicKey](utils.md#base64publickey)
- [calcTypedDataSignatureV](utils.md#calctypeddatasignaturev)
- [cancelDeviceAction](utils.md#canceldeviceaction)
- [compressPublicKey](utils.md#compresspublickey)
- [cosmosAddress](utils.md#cosmosaddress)
- [genericCanRetryOnError](utils.md#genericcanretryonerror)
- [getAppAndVersion](utils.md#getappandversion)
- [getBleManager](utils.md#getblemanager)
- [getDeviceConnection](utils.md#getdeviceconnection)
- [getMnemonic](utils.md#getmnemonic)
- [getPrivateKey](utils.md#getprivatekey)
- [getRegistryItemFromHex](utils.md#getregistryitemfromhex)
- [getSeed](utils.md#getseed)
- [getVersion](utils.md#getversion)
- [hexStringToByteArray](utils.md#hexstringtobytearray)
- [isCryptoAccount](utils.md#iscryptoaccount)
- [isCryptoHDKey](utils.md#iscryptohdkey)
- [isDashboardName](utils.md#isdashboardname)
- [isProviderKeystoneError](utils.md#isproviderkeystoneerror)
- [joinSignature](utils.md#joinsignature)
- [lagrangeInterpolation](utils.md#lagrangeinterpolation)
- [listApps](utils.md#listapps)
- [openApp](utils.md#openapp)
- [prepareHashedEip712Data](utils.md#preparehashedeip712data)
- [quitApp](utils.md#quitapp)
- [retryWhileErrors](utils.md#retrywhileerrors)
- [scanDevices](utils.md#scandevices)
- [setErrorRemapping](utils.md#seterrorremapping)
- [sleep](utils.md#sleep)
- [stringToUtf8Bytes](utils.md#stringtoutf8bytes)
- [suggestApp](utils.md#suggestapp)
- [tryToInitBt](utils.md#trytoinitbt)
- [withDevice](utils.md#withdevice)
- [withDevicePolling](utils.md#withdevicepolling)

## Type Aliases

### App

Ƭ **App**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |
| `flags` | `number` |
| `hash` | `string` |
| `hashCodeData` | `string` |
| `name` | `string` |

#### Defined in

[src/utils/ledger/commands/list-apps.ts:3](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/commands/list-apps.ts#L3)

___

### QueuedJob

Ƭ **QueuedJob**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `job` | `Promise`\<`void`\> |

#### Defined in

[src/utils/ledger/device-access.ts:107](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L107)

## Functions

### base64PublicKey

▸ **base64PublicKey**(`publicKey`): `string`

Base64 encode public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | public key |

#### Returns

`string`

base64 encoded public key

#### Defined in

[src/utils/base/base64-public-key.ts:8](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/base/base64-public-key.ts#L8)

___

### calcTypedDataSignatureV

▸ **calcTypedDataSignatureV**(`signature`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/base/calc-typed-data-signature-v.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/base/calc-typed-data-signature-v.ts#L1)

___

### cancelDeviceAction

▸ **cancelDeviceAction**(`transport`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `default` |

#### Returns

`void`

#### Defined in

[src/utils/ledger/device-access.ts:96](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L96)

___

### compressPublicKey

▸ **compressPublicKey**(`publicKey`): `string`

Compress public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | public key |

#### Returns

`string`

compressed public key

#### Defined in

[src/utils/base/compress-public-key.ts:6](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/base/compress-public-key.ts#L6)

___

### cosmosAddress

▸ **cosmosAddress**(`address`, `prefix`): `string`

get cosmos address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | eth address |
| `prefix` | `string` | prefix for address |

#### Returns

`string`

#### Defined in

[src/utils/base/cosmos-address.ts:8](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/base/cosmos-address.ts#L8)

___

### genericCanRetryOnError

▸ **genericCanRetryOnError**(`err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/utils/ledger/device-access.ts:338](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L338)

___

### getAppAndVersion

▸ **getAppAndVersion**(`transport`): `Promise`\<\{ `flags`: `number` \| `Buffer` ; `name`: `string` ; `version`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `default` |

#### Returns

`Promise`\<\{ `flags`: `number` \| `Buffer` ; `name`: `string` ; `version`: `string`  }\>

#### Defined in

[src/utils/ledger/commands/get-app-and-version.ts:3](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/commands/get-app-and-version.ts#L3)

___

### getBleManager

▸ **getBleManager**(): `BleManager`

#### Returns

`BleManager`

#### Defined in

[src/utils/ledger/get-ble-manager.ts:5](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/get-ble-manager.ts#L5)

___

### getDeviceConnection

▸ **getDeviceConnection**(`deviceId`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/utils/ledger/get-device-connection.ts:11](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/get-device-connection.ts#L11)

___

### getMnemonic

▸ **getMnemonic**(`id`, `getPassword`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/utils/mnemonic/get-mnemonic.ts:7](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/mnemonic/get-mnemonic.ts#L7)

___

### getPrivateKey

▸ **getPrivateKey**(`id`, `getPassword`): `Promise`\<`Share`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |

#### Returns

`Promise`\<`Share`\>

#### Defined in

[src/utils/hot/get-private-key.ts:6](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/hot/get-private-key.ts#L6)

___

### getRegistryItemFromHex

▸ **getRegistryItemFromHex**(`hex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`any`

#### Defined in

[src/utils/keystone/get-registry-item.ts:5](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/keystone/get-registry-item.ts#L5)

___

### getSeed

▸ **getSeed**(`account`, `storage`, `getPassword`): `Promise`\<\{ `mnemonic`: `string` ; `seed`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `storage` | [`StorageInterface`](../interfaces/providers.StorageInterface.md) |
| `getPassword` | () => `Promise`\<`string`\> |

#### Returns

`Promise`\<\{ `mnemonic`: `string` ; `seed`: `string`  }\>

#### Defined in

[src/utils/sss/get-seed.ts:12](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/sss/get-seed.ts#L12)

___

### getVersion

▸ **getVersion**(`transport`): `Promise`\<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `default` |

#### Returns

`Promise`\<`Buffer`\>

#### Defined in

[src/utils/ledger/commands/get-version.ts:3](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/commands/get-version.ts#L3)

___

### hexStringToByteArray

▸ **hexStringToByteArray**(`hexString`): `number`[]

convert hex string to byte array

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexString` | `string` \| `number`[] |

#### Returns

`number`[]

Byte array like

#### Defined in

[src/utils/base/hex-string-to-byte-array.ts:6](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/base/hex-string-to-byte-array.ts#L6)

___

### isCryptoAccount

▸ **isCryptoAccount**(`item`): item is CryptoAccount

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `RegistryItem` |

#### Returns

item is CryptoAccount

#### Defined in

[src/utils/keystone/keystone-crypto-account-type.ts:11](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/keystone/keystone-crypto-account-type.ts#L11)

___

### isCryptoHDKey

▸ **isCryptoHDKey**(`item`): item is CryptoHDKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `RegistryItem` |

#### Returns

item is CryptoHDKey

#### Defined in

[src/utils/keystone/keystone-crypto-account-type.ts:7](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/keystone/keystone-crypto-account-type.ts#L7)

___

### isDashboardName

▸ **isDashboardName**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/ledger/commands/suggest-app.ts:7](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/commands/suggest-app.ts#L7)

___

### isProviderKeystoneError

▸ **isProviderKeystoneError**(`err`): err is ProviderKeystoneError

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

err is ProviderKeystoneError

#### Defined in

[src/utils/keystone/error.ts:16](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/keystone/error.ts#L16)

___

### joinSignature

▸ **joinSignature**(`signature`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/base/join-signature.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/base/join-signature.ts#L1)

___

### lagrangeInterpolation

▸ **lagrangeInterpolation**(`shares`, `nodeIndex`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shares` | `BN`[] |
| `nodeIndex` | `BN`[] |

#### Returns

`BN`

#### Defined in

[src/utils/sss/lagrange-interpolation.ts:4](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/sss/lagrange-interpolation.ts#L4)

___

### listApps

▸ **listApps**(`transport`): `Promise`\<[`App`](utils.md#app)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `default` |

#### Returns

`Promise`\<[`App`](utils.md#app)[]\>

#### Defined in

[src/utils/ledger/commands/list-apps.ts:11](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/commands/list-apps.ts#L11)

___

### openApp

▸ **openApp**(`transport`, `name`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `default` |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utils/ledger/commands/open-app.ts:3](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/commands/open-app.ts#L3)

___

### prepareHashedEip712Data

▸ **prepareHashedEip712Data**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `TypedData` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `domainSeparatorHex` | `string` |
| `hashStructMessageHex` | `string` |

#### Defined in

[src/utils/base/prepare-hashed-eip712-data.ts:4](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/base/prepare-hashed-eip712-data.ts#L4)

___

### quitApp

▸ **quitApp**(`transport`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `default` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utils/ledger/commands/quit-app.ts:3](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/commands/quit-app.ts#L3)

___

### retryWhileErrors

▸ **retryWhileErrors**(`acceptError`): (`attempts`: `Observable`\<`any`\>) => `Observable`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acceptError` | (`arg0`: `Error`) => `boolean` |

#### Returns

`fn`

▸ (`attempts`): `Observable`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `attempts` | `Observable`\<`any`\> |

##### Returns

`Observable`\<`any`\>

#### Defined in

[src/utils/ledger/device-access.ts:354](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L354)

___

### scanDevices

▸ **scanDevices**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `off` | `any` |
| `on` | `any` |
| `start` | () => `void` |
| `stop` | () => `void` |

#### Defined in

[src/utils/ledger/scan-devices.ts:5](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/scan-devices.ts#L5)

___

### setErrorRemapping

▸ **setErrorRemapping**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`arg0`: `Error`) => `Observable`\<`never`\> |

#### Returns

`void`

#### Defined in

[src/utils/ledger/device-access.ts:48](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L48)

___

### sleep

▸ **sleep**(`duration`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/utils/ledger/sleep.ts:1](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/sleep.ts#L1)

___

### stringToUtf8Bytes

▸ **stringToUtf8Bytes**(`input`): `any`[]

convert string to byte array

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`any`[]

Byte array like for input string

#### Defined in

[src/utils/base/string-to-utf8-bytes.ts:8](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/base/string-to-utf8-bytes.ts#L8)

___

### suggestApp

▸ **suggestApp**(`transport`, `name`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | `default` |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utils/ledger/commands/suggest-app.ts:9](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/commands/suggest-app.ts#L9)

___

### tryToInitBt

▸ **tryToInitBt**(): `Promise`\<`Observable`\<`State`\>\>

#### Returns

`Promise`\<`Observable`\<`State`\>\>

#### Defined in

[src/utils/ledger/try-to-init-bt.ts:6](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/try-to-init-bt.ts#L6)

___

### withDevice

▸ **withDevice**(`deviceId`, `options?`): \<T\>(`job`: (`t`: `default`) => `Observable`\<`T`\>) => `Observable`\<`T`\>

Provides a Transport instance to a given job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceId` | `string` |  |
| `options?` | `Object` | contains optional configuration - openTimeoutMs: optional timeout that limits in time the open attempt of the matching registered transport. |
| `options.openTimeoutMs?` | `number` | - |

#### Returns

`fn`

▸ \<`T`\>(`job`): `Observable`\<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `job` | (`t`: `default`) => `Observable`\<`T`\> |

##### Returns

`Observable`\<`T`\>

#### Defined in

[src/utils/ledger/device-access.ts:183](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L183)

___

### withDevicePolling

▸ **withDevicePolling**(`deviceId`): \<T\>(`job`: (`arg0`: `default`) => `Observable`\<`T`\>, `acceptError`: (`arg0`: `Error`) => `boolean`) => `Observable`\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |

#### Returns

`fn`

▸ \<`T`\>(`job`, `acceptError?`): `Observable`\<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `job` | (`arg0`: `default`) => `Observable`\<`T`\> | `undefined` |
| `acceptError` | (`arg0`: `Error`) => `boolean` | `genericCanRetryOnError` |

##### Returns

`Observable`\<`T`\>

#### Defined in

[src/utils/ledger/device-access.ts:369](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L369)
