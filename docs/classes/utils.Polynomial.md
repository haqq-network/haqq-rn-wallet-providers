[@haqq/rn-wallet-providers - v0.0.11](../README.md) / [Exports](../modules.md) / [utils](../modules/utils.md) / Polynomial

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

[src/utils/sss/polynomial.ts:62](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/utils/sss/polynomial.ts#L62)

## Properties

### polymonialId

• **polymonialId**: `string`

#### Defined in

[src/utils/sss/polynomial.ts:17](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/utils/sss/polynomial.ts#L17)

___

### shares

• **shares**: `BN`[]

#### Defined in

[src/utils/sss/polynomial.ts:16](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/utils/sss/polynomial.ts#L16)

## Methods

### getPrivateKey

▸ **getPrivateKey**(): `BN`

#### Returns

`BN`

#### Defined in

[src/utils/sss/polynomial.ts:67](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/utils/sss/polynomial.ts#L67)

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

[src/utils/sss/polynomial.ts:71](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/utils/sss/polynomial.ts#L71)

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

[src/utils/sss/polynomial.ts:39](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/utils/sss/polynomial.ts#L39)

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

[src/utils/sss/polynomial.ts:19](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/utils/sss/polynomial.ts#L19)
