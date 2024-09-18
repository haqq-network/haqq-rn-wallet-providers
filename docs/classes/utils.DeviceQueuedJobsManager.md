[@haqq/rn-wallet-providers - v0.0.1](../README.md) / [Exports](../modules.md) / [utils](../modules/utils.md) / DeviceQueuedJobsManager

# Class: DeviceQueuedJobsManager

[utils](../modules/utils.md).DeviceQueuedJobsManager

Manages queued jobs for each device (id)

Careful: a USB-connected device has no unique id, and its `deviceId` will be an empty string.

The queue object `queuedJobsByDevice` only stores, for each device, the latest void promise that will resolve
when the device is ready to be opened again.
They are scheduled to resolve whenever the job associated to the device is finished.
When calling withDevice several times, the new promise will be chained to the "then" of the previous promise:
open(device) -> execute job -> clean connection -> resolve promise -> next promise can start: open(device) -> etc.
So a queue is indeed created for each device, by creating a chain of promises, but only the end of the queue is stored for each device.

## Table of contents

### Constructors

- [constructor](utils.DeviceQueuedJobsManager.md#constructor)

### Properties

- [queuedJobsByDevice](utils.DeviceQueuedJobsManager.md#queuedjobsbydevice)
- [instance](utils.DeviceQueuedJobsManager.md#instance)
- [jobIdCounter](utils.DeviceQueuedJobsManager.md#jobidcounter)

### Methods

- [getLastQueuedJob](utils.DeviceQueuedJobsManager.md#getlastqueuedjob)
- [setLastQueuedJob](utils.DeviceQueuedJobsManager.md#setlastqueuedjob)
- [getInstance](utils.DeviceQueuedJobsManager.md#getinstance)

## Constructors

### constructor

• `Private` **new DeviceQueuedJobsManager**()

#### Defined in

[src/utils/ledger/device-access.ts:130](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L130)

## Properties

### queuedJobsByDevice

• `Private` **queuedJobsByDevice**: `Object`

#### Index signature

▪ [deviceId: `string`]: [`QueuedJob`](../modules/utils.md#queuedjob)

#### Defined in

[src/utils/ledger/device-access.ts:123](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L123)

___

### instance

▪ `Static` `Private` **instance**: [`DeviceQueuedJobsManager`](utils.DeviceQueuedJobsManager.md) = `null`

#### Defined in

[src/utils/ledger/device-access.ts:125](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L125)

___

### jobIdCounter

▪ `Static` `Private` **jobIdCounter**: `number` = `-1`

#### Defined in

[src/utils/ledger/device-access.ts:128](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L128)

## Methods

### getLastQueuedJob

▸ **getLastQueuedJob**(`deviceId`): [`QueuedJob`](../modules/utils.md#queuedjob)

Returns the latest queued job for a given device id

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceId` | `string` |

#### Returns

[`QueuedJob`](../modules/utils.md#queuedjob)

the latest QueuedJob. If none, return a queued job that can be resolved directly.

#### Defined in

[src/utils/ledger/device-access.ts:151](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L151)

___

### setLastQueuedJob

▸ **setLastQueuedJob**(`deviceId`, `jobToQueue`): `number`

Sets the latest queue job for a given device id

Also increments the job id counter and set the newly queued job id to this new incremented value.

Note: we should be fine on race conditions when updating the jobId in our use cases.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceId` | `string` |  |
| `jobToQueue` | `Promise`\<`void`\> | a Promise that resolve to void, representing an async job |

#### Returns

`number`

the id of the queued job

#### Defined in

[src/utils/ledger/device-access.ts:168](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L168)

___

### getInstance

▸ `Static` **getInstance**(): [`DeviceQueuedJobsManager`](utils.DeviceQueuedJobsManager.md)

Get the singleton instance

#### Returns

[`DeviceQueuedJobsManager`](utils.DeviceQueuedJobsManager.md)

#### Defined in

[src/utils/ledger/device-access.ts:137](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/7850de5/src/utils/ledger/device-access.ts#L137)
