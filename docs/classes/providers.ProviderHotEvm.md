[@haqq/rn-wallet-providers - v0.0.11](../README.md) / [Exports](../modules.md) / [providers](../modules/providers.md) / ProviderHotEvm

# Class: ProviderHotEvm

[providers](../modules/providers.md).ProviderHotEvm

Base provider for other providers
extends EventEmitter

## Hierarchy

- [`ProviderHotBase`](providers.ProviderHotBase.md)

  ↳ **`ProviderHotEvm`**

## Implements

- [`ProviderInterface`](../interfaces/providers.ProviderInterface.md)

## Table of contents

### Constructors

- [constructor](providers.ProviderHotEvm.md#constructor)

### Properties

- [\_options](providers.ProviderHotEvm.md#_options)
- [captureRejectionSymbol](providers.ProviderHotEvm.md#capturerejectionsymbol)
- [captureRejections](providers.ProviderHotEvm.md#capturerejections)
- [defaultMaxListeners](providers.ProviderHotEvm.md#defaultmaxlisteners)
- [errorMonitor](providers.ProviderHotEvm.md#errormonitor)

### Methods

- [[captureRejectionSymbol]](providers.ProviderHotEvm.md#[capturerejectionsymbol])
- [abort](providers.ProviderHotEvm.md#abort)
- [addListener](providers.ProviderHotEvm.md#addlistener)
- [catchError](providers.ProviderHotEvm.md#catcherror)
- [clean](providers.ProviderHotEvm.md#clean)
- [emit](providers.ProviderHotEvm.md#emit)
- [eventNames](providers.ProviderHotEvm.md#eventnames)
- [getAccountInfo](providers.ProviderHotEvm.md#getaccountinfo)
- [getIdentifier](providers.ProviderHotEvm.md#getidentifier)
- [getMaxListeners](providers.ProviderHotEvm.md#getmaxlisteners)
- [getPrivateKey](providers.ProviderHotEvm.md#getprivatekey)
- [listenerCount](providers.ProviderHotEvm.md#listenercount)
- [listeners](providers.ProviderHotEvm.md#listeners)
- [off](providers.ProviderHotEvm.md#off)
- [on](providers.ProviderHotEvm.md#on)
- [once](providers.ProviderHotEvm.md#once)
- [prependListener](providers.ProviderHotEvm.md#prependlistener)
- [prependOnceListener](providers.ProviderHotEvm.md#prependoncelistener)
- [rawListeners](providers.ProviderHotEvm.md#rawlisteners)
- [removeAllListeners](providers.ProviderHotEvm.md#removealllisteners)
- [removeListener](providers.ProviderHotEvm.md#removelistener)
- [setMaxListeners](providers.ProviderHotEvm.md#setmaxlisteners)
- [signPersonalMessage](providers.ProviderHotEvm.md#signpersonalmessage)
- [signTransaction](providers.ProviderHotEvm.md#signtransaction)
- [signTypedData](providers.ProviderHotEvm.md#signtypeddata)
- [updatePin](providers.ProviderHotEvm.md#updatepin)
- [addAbortListener](providers.ProviderHotEvm.md#addabortlistener)
- [getEventListeners](providers.ProviderHotEvm.md#geteventlisteners)
- [getMaxListeners](providers.ProviderHotEvm.md#getmaxlisteners-1)
- [initialize](providers.ProviderHotEvm.md#initialize)
- [listenerCount](providers.ProviderHotEvm.md#listenercount-1)
- [on](providers.ProviderHotEvm.md#on-1)
- [once](providers.ProviderHotEvm.md#once-1)
- [setMaxListeners](providers.ProviderHotEvm.md#setmaxlisteners-1)

## Constructors

### constructor

• **new ProviderHotEvm**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ProviderHotBaseOptions`](../modules/providers.md#providerhotbaseoptions) & [`ProviderBaseOptions`](../modules/providers.md#providerbaseoptions) |

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[constructor](providers.ProviderHotBase.md#constructor)

#### Defined in

[src/providers/base-provider.ts:17](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/base-provider.ts#L17)

## Properties

### \_options

• **\_options**: [`ProviderHotBaseOptions`](../modules/providers.md#providerhotbaseoptions) & [`ProviderBaseOptions`](../modules/providers.md#providerbaseoptions)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[_options](providers.ProviderHotBase.md#_options)

#### Defined in

[src/providers/base-provider.ts:15](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/base-provider.ts#L15)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](providers.ProviderHotEvm.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[captureRejectionSymbol](providers.ProviderHotBase.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:452

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[captureRejections](providers.ProviderHotBase.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:459

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners` property
can be used. If this value is not a positive number, a `RangeError` is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_ `EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single
`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[defaultMaxListeners](providers.ProviderHotBase.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:498

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](providers.ProviderHotEvm.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[errorMonitor](providers.ProviderHotBase.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:445

## Methods

### [captureRejectionSymbol]

▸ `Optional` **[captureRejectionSymbol]**\<`K`\>(`error`, `event`, `...args`): `void`

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` \| `symbol` |
| `...args` | `AnyRest` |

#### Returns

`void`

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[[captureRejectionSymbol]](../interfaces/providers.ProviderInterface.md#[capturerejectionsymbol])

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[[captureRejectionSymbol]](providers.ProviderHotBase.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:136

___

### abort

▸ **abort**(): `void`

Stop action

#### Returns

`void`

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[abort](../interfaces/providers.ProviderInterface.md#abort)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[abort](providers.ProviderHotBase.md#abort)

#### Defined in

[src/providers/base-provider.ts:60](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/base-provider.ts#L60)

___

### addListener

▸ **addListener**\<`K`\>(`eventName`, `listener`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

Alias for `emitter.on(eventName, listener)`.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v0.1.26

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[addListener](../interfaces/providers.ProviderInterface.md#addlistener)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[addListener](providers.ProviderHotBase.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:597

___

### catchError

▸ **catchError**(`e`, `source`, `handled?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `e` | `Error` | `undefined` |
| `source` | `string` | `undefined` |
| `handled` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[catchError](providers.ProviderHotBase.md#catcherror)

#### Defined in

[src/providers/base-provider.ts:49](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/base-provider.ts#L49)

___

### clean

▸ **clean**(): `Promise`\<`void`\>

Clean provider storage

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[clean](../interfaces/providers.ProviderInterface.md#clean)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[clean](providers.ProviderHotBase.md#clean)

#### Defined in

[src/providers/hot/provider.ts:74](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/provider.ts#L74)

___

### emit

▸ **emit**\<`K`\>(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `AnyRest` |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[emit](../interfaces/providers.ProviderInterface.md#emit)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[emit](providers.ProviderHotBase.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:859

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[eventNames](../interfaces/providers.ProviderInterface.md#eventnames)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[eventNames](providers.ProviderHotBase.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:922

___

### getAccountInfo

▸ **getAccountInfo**(`_hdPath`): `Promise`\<\{ `address`: `string` = ''; `publicKey`: `string` = '' }\>

Get public key and address for hd path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_hdPath` | `string` | HD path |

#### Returns

`Promise`\<\{ `address`: `string` = ''; `publicKey`: `string` = '' }\>

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[getAccountInfo](../interfaces/providers.ProviderInterface.md#getaccountinfo)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[getAccountInfo](providers.ProviderHotBase.md#getaccountinfo)

#### Defined in

[src/providers/hot/provider.ts:90](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/provider.ts#L90)

___

### getIdentifier

▸ **getIdentifier**(): `string`

#### Returns

`string`

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[getIdentifier](../interfaces/providers.ProviderInterface.md#getidentifier)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[getIdentifier](providers.ProviderHotBase.md#getidentifier)

#### Defined in

[src/providers/hot/provider.ts:86](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/provider.ts#L86)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](providers.ProviderHotEvm.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[getMaxListeners](../interfaces/providers.ProviderInterface.md#getmaxlisteners)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[getMaxListeners](providers.ProviderHotBase.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:774

___

### getPrivateKey

▸ **getPrivateKey**(`_hdPath`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hdPath` | `string` |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[getPrivateKey](../interfaces/providers.ProviderInterface.md#getprivatekey)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[getPrivateKey](providers.ProviderHotBase.md#getprivatekey)

#### Defined in

[src/providers/base-provider.ts:45](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/base-provider.ts#L45)

___

### listenerCount

▸ **listenerCount**\<`K`\>(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[listenerCount](../interfaces/providers.ProviderInterface.md#listenercount)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[listenerCount](providers.ProviderHotBase.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:868

___

### listeners

▸ **listeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[listeners](../interfaces/providers.ProviderInterface.md#listeners)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[listeners](providers.ProviderHotBase.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:787

___

### off

▸ **off**\<`K`\>(`eventName`, `listener`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

Alias for `emitter.removeListener()`.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v10.0.0

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[off](../interfaces/providers.ProviderInterface.md#off)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[off](providers.ProviderHotBase.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:747

___

### on

▸ **on**\<`K`\>(`eventName`, `listener`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v0.1.101

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[on](../interfaces/providers.ProviderInterface.md#on)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[on](providers.ProviderHotBase.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:629

___

### once

▸ **once**\<`K`\>(`eventName`, `listener`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v0.3.0

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[once](../interfaces/providers.ProviderInterface.md#once)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[once](providers.ProviderHotBase.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:659

___

### prependListener

▸ **prependListener**\<`K`\>(`eventName`, `listener`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v6.0.0

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[prependListener](../interfaces/providers.ProviderInterface.md#prependlistener)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[prependListener](providers.ProviderHotBase.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:886

___

### prependOnceListener

▸ **prependOnceListener**\<`K`\>(`eventName`, `listener`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v6.0.0

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[prependOnceListener](../interfaces/providers.ProviderInterface.md#prependoncelistener)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[prependOnceListener](providers.ProviderHotBase.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:902

___

### rawListeners

▸ **rawListeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[rawListeners](../interfaces/providers.ProviderInterface.md#rawlisteners)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[rawListeners](providers.ProviderHotBase.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:818

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `symbol` |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v0.1.26

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[removeAllListeners](../interfaces/providers.ProviderInterface.md#removealllisteners)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[removeAllListeners](providers.ProviderHotBase.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:758

___

### removeListener

▸ **removeListener**\<`K`\>(`eventName`, `listener`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v0.1.26

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[removeListener](../interfaces/providers.ProviderInterface.md#removelistener)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[removeListener](providers.ProviderHotBase.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:742

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ProviderHotEvm`](providers.ProviderHotEvm.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ProviderHotEvm`](providers.ProviderHotEvm.md)

**`Since`**

v0.3.5

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[setMaxListeners](../interfaces/providers.ProviderInterface.md#setmaxlisteners)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[setMaxListeners](providers.ProviderHotBase.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:768

___

### signPersonalMessage

▸ **signPersonalMessage**(`hdPath`, `message`): `Promise`\<`string`\>

Sign personal message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path for subscribe |
| `message` | [`BytesLike`](../modules/providers.md#byteslike) | message |

#### Returns

`Promise`\<`string`\>

signature of personal message

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[signPersonalMessage](../interfaces/providers.ProviderInterface.md#signpersonalmessage)

#### Overrides

[ProviderHotBase](providers.ProviderHotBase.md).[signPersonalMessage](providers.ProviderHotBase.md#signpersonalmessage)

#### Defined in

[src/providers/hot/evm-provider.ts:60](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/evm-provider.ts#L60)

___

### signTransaction

▸ **signTransaction**(`_hdPath`, `transaction`): `Promise`\<`string`\>

Sign transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_hdPath` | `string` | HD path for subscribe |
| `transaction` | [`TransactionRequest`](../modules/providers.md#transactionrequest) | transaction for sign |

#### Returns

`Promise`\<`string`\>

signature of transaction

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[signTransaction](../interfaces/providers.ProviderInterface.md#signtransaction)

#### Overrides

[ProviderHotBase](providers.ProviderHotBase.md).[signTransaction](providers.ProviderHotBase.md#signtransaction)

#### Defined in

[src/providers/hot/evm-provider.ts:26](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/evm-provider.ts#L26)

___

### signTypedData

▸ **signTypedData**(`_hdPath`, `typedData`): `Promise`\<`string`\>

Sign typed data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_hdPath` | `string` | HD path for subscribe |
| `typedData` | [`TypedData`](../modules/providers.md#typeddata) |  |

#### Returns

`Promise`\<`string`\>

signature of typed data

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[signTypedData](../interfaces/providers.ProviderInterface.md#signtypeddata)

#### Overrides

[ProviderHotBase](providers.ProviderHotBase.md).[signTypedData](providers.ProviderHotBase.md#signtypeddata)

#### Defined in

[src/providers/hot/evm-provider.ts:97](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/evm-provider.ts#L97)

___

### updatePin

▸ **updatePin**(`pin`): `Promise`\<`void`\>

Update pin for encrypted providers

#### Parameters

| Name | Type |
| :------ | :------ |
| `pin` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ProviderInterface](../interfaces/providers.ProviderInterface.md).[updatePin](../interfaces/providers.ProviderInterface.md#updatepin)

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[updatePin](providers.ProviderHotBase.md#updatepin)

#### Defined in

[src/providers/hot/provider.ts:47](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/provider.ts#L47)

___

### addAbortListener

▸ `Static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

**`Since`**

v20.5.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[addAbortListener](providers.ProviderHotBase.md#addabortlistener)

#### Defined in

node_modules/@types/node/events.d.ts:437

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> \| `EventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[getEventListeners](providers.ProviderHotBase.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:358

___

### getMaxListeners

▸ `Static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> \| `EventTarget` |

#### Returns

`number`

**`Since`**

v19.9.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[getMaxListeners](providers.ProviderHotBase.md#getmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:387

___

### initialize

▸ `Static` **initialize**(`privateKey`, `getPassword`, `options`): `Promise`\<[`ProviderHotBase`](providers.ProviderHotBase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `getPassword` | () => `Promise`\<`string`\> |
| `options` | `Omit`\<[`ProviderBaseOptions`](../modules/providers.md#providerbaseoptions), ``"getPassword"``\> |

#### Returns

`Promise`\<[`ProviderHotBase`](providers.ProviderHotBase.md)\>

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[initialize](providers.ProviderHotBase.md#initialize)

#### Defined in

[src/providers/hot/provider.ts:17](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/hot/provider.ts#L17)

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[listenerCount](providers.ProviderHotBase.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:330

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`\<`any`[], `any`, `any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterIteratorOptions` |

#### Returns

`AsyncIterableIterator`\<`any`[], `any`, `any`\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[on](providers.ProviderHotBase.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:303

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`\<`any`[], `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterIteratorOptions` |

#### Returns

`AsyncIterableIterator`\<`any`[], `any`, `any`\>

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[on](providers.ProviderHotBase.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:308

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`\<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[once](providers.ProviderHotBase.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:217

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`\<`any`[]\>

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[once](providers.ProviderHotBase.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:222

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter`\<`DefaultEventMap`\> \| `EventTarget`)[] | Zero or more {EventTarget} or {EventEmitter} instances. If none are specified, `n` is set as the default max for all newly created {EventTarget} and {EventEmitter} objects. |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

[ProviderHotBase](providers.ProviderHotBase.md).[setMaxListeners](providers.ProviderHotBase.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:402
