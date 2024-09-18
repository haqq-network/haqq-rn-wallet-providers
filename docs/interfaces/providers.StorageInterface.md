[@haqq/rn-wallet-providers - v0.0.1](../README.md) / [Exports](../modules.md) / [providers](../modules/providers.md) / StorageInterface

# Interface: StorageInterface

[providers](../modules/providers.md).StorageInterface

## Table of contents

### Methods

- [getItem](providers.StorageInterface.md#getitem)
- [getName](providers.StorageInterface.md#getname)
- [hasItem](providers.StorageInterface.md#hasitem)
- [removeItem](providers.StorageInterface.md#removeitem)
- [setItem](providers.StorageInterface.md#setitem)

## Methods

### getItem

▸ **getItem**(`key`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/providers/sss/types.ts:4](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/sss/types.ts#L4)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[src/providers/sss/types.ts:2](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/sss/types.ts#L2)

___

### hasItem

▸ **hasItem**(`key`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/providers/sss/types.ts:6](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/sss/types.ts#L6)

___

### removeItem

▸ **removeItem**(`key`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/providers/sss/types.ts:10](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/sss/types.ts#L10)

___

### setItem

▸ **setItem**(`key`, `value`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/providers/sss/types.ts:8](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/providers/sss/types.ts#L8)
