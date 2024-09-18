[@haqq/rn-wallet-providers - v0.0.1](../README.md) / [Exports](../modules.md) / [utils](../modules/utils.md) / Polynomial

# Class: Polynomial

[utils](../modules/utils.md).Polynomial

## Table of contents

### Constructors

- [constructor](utils.Polynomial.md#constructor)

### Properties

- [polymonialId](utils.Polynomial.md#polymonialid)
- [shares](utils.Polynomial.md#shares)

### Methods

- [getPrivateKey](utils.Polynomial.md#getprivatekey)
- [getShare](utils.Polynomial.md#getshare)
- [fromShares](utils.Polynomial.md#fromshares)
- [initialize](utils.Polynomial.md#initialize)

## Constructors

### constructor

• **new Polynomial**(`shares`, `polymonialId?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shares` | `BN`[] | `undefined` |
| `polymonialId` | `string` | `''` |

#### Defined in

src/utils/sss/polynomial.ts:61

## Properties

### polymonialId

• **polymonialId**: `string`

#### Defined in

src/utils/sss/polynomial.ts:16

___

### shares

• **shares**: `BN`[]

#### Defined in

src/utils/sss/polynomial.ts:15

## Methods

### getPrivateKey

▸ **getPrivateKey**(): `BN`

#### Returns

`BN`

#### Defined in

src/utils/sss/polynomial.ts:66

___

### getShare

▸ **getShare**(`x`): [`Share`](../modules/providers.md#share)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` \| `BN` |

#### Returns

[`Share`](../modules/providers.md#share)

#### Defined in

src/utils/sss/polynomial.ts:70

___

### fromShares

▸ `Static` **fromShares**(`shares`): `Promise`\<[`Polynomial`](utils.Polynomial.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shares` | [`Share`](../modules/providers.md#share)[] |

#### Returns

`Promise`\<[`Polynomial`](utils.Polynomial.md)\>

#### Defined in

src/utils/sss/polynomial.ts:38

___

### initialize

▸ `Static` **initialize**(`privateKey`, `threshold`): `Promise`\<[`Polynomial`](utils.Polynomial.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Buffer` \| `BN` |
| `threshold` | `number` |

#### Returns

`Promise`\<[`Polynomial`](utils.Polynomial.md)\>

#### Defined in

src/utils/sss/polynomial.ts:18
