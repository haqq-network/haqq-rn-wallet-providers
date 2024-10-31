[@haqq/rn-wallet-providers - v0.0.11](../README.md) / [Exports](../modules.md) / [providers](../modules/providers.md) / ProviderInterface

# Interface: ProviderInterface

[providers](../modules/providers.md).ProviderInterface

Base provider for other providers
extends EventEmitter

## Hierarchy

- `EventEmitter`

  ↳ **`ProviderInterface`**

## Implemented by

- [`ProviderBase`](../classes/providers.ProviderBase.md)
- [`ProviderHotBase`](../classes/providers.ProviderHotBase.md)
- [`ProviderHotEvm`](../classes/providers.ProviderHotEvm.md)
- [`ProviderHotTron`](../classes/providers.ProviderHotTron.md)
- [`ProviderKeystoneBase`](../classes/providers.ProviderKeystoneBase.md)
- [`ProviderKeystoneEvm`](../classes/providers.ProviderKeystoneEvm.md)
- [`ProviderLedgerBase`](../classes/providers.ProviderLedgerBase.md)
- [`ProviderLedgerEvm`](../classes/providers.ProviderLedgerEvm.md)
- [`ProviderMnemonicBase`](../classes/providers.ProviderMnemonicBase.md)
- [`ProviderMnemonicEvm`](../classes/providers.ProviderMnemonicEvm.md)
- [`ProviderMnemonicTron`](../classes/providers.ProviderMnemonicTron.md)
- [`ProviderSSSBase`](../classes/providers.ProviderSSSBase.md)
- [`ProviderSSSEvm`](../classes/providers.ProviderSSSEvm.md)
- [`ProviderSSSTron`](../classes/providers.ProviderSSSTron.md)

## Table of contents

### Properties

- [abort](providers.ProviderInterface.md#abort)
- [clean](providers.ProviderInterface.md#clean)
- [getAccountInfo](providers.ProviderInterface.md#getaccountinfo)
- [getIdentifier](providers.ProviderInterface.md#getidentifier)
- [getPrivateKey](providers.ProviderInterface.md#getprivatekey)
- [signPersonalMessage](providers.ProviderInterface.md#signpersonalmessage)
- [signTransaction](providers.ProviderInterface.md#signtransaction)
- [signTypedData](providers.ProviderInterface.md#signtypeddata)
- [updatePin](providers.ProviderInterface.md#updatepin)

### Methods

- [[captureRejectionSymbol]](providers.ProviderInterface.md#[capturerejectionsymbol])
- [addListener](providers.ProviderInterface.md#addlistener)
- [emit](providers.ProviderInterface.md#emit)
- [eventNames](providers.ProviderInterface.md#eventnames)
- [getMaxListeners](providers.ProviderInterface.md#getmaxlisteners)
- [listenerCount](providers.ProviderInterface.md#listenercount)
- [listeners](providers.ProviderInterface.md#listeners)
- [off](providers.ProviderInterface.md#off)
- [on](providers.ProviderInterface.md#on)
- [once](providers.ProviderInterface.md#once)
- [prependListener](providers.ProviderInterface.md#prependlistener)
- [prependOnceListener](providers.ProviderInterface.md#prependoncelistener)
- [rawListeners](providers.ProviderInterface.md#rawlisteners)
- [removeAllListeners](providers.ProviderInterface.md#removealllisteners)
- [removeListener](providers.ProviderInterface.md#removelistener)
- [setMaxListeners](providers.ProviderInterface.md#setmaxlisteners)

## Properties

### abort

• **abort**: () => `void`

#### Type declaration

▸ (): `void`

Stop action

##### Returns

`void`

#### Defined in

[src/providers/types.ts:54](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L54)

___

### clean

• **clean**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

Clean provider storage

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/providers/types.ts:63](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L63)

___

### getAccountInfo

• **getAccountInfo**: (`hdPath`: `string`) => `Promise`\<\{ `address`: `string` ; `publicKey`: `string`  }\>

#### Type declaration

▸ (`hdPath`): `Promise`\<\{ `address`: `string` ; `publicKey`: `string`  }\>

Get public key and address for hd path

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path |

##### Returns

`Promise`\<\{ `address`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[src/providers/types.ts:19](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L19)

___

### getIdentifier

• **getIdentifier**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[src/providers/types.ts:14](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L14)

___

### getPrivateKey

• **getPrivateKey**: (`hdPath`: `string`) => `Promise`\<`string`\>

#### Type declaration

▸ (`hdPath`): `Promise`\<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `hdPath` | `string` |

##### Returns

`Promise`\<`string`\>

#### Defined in

[src/providers/types.ts:22](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L22)

___

### signPersonalMessage

• **signPersonalMessage**: (`hdPath`: `string`, `message`: [`BytesLike`](../modules/providers.md#byteslike)) => `Promise`\<`string`\>

#### Type declaration

▸ (`hdPath`, `message`): `Promise`\<`string`\>

Sign personal message

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path for subscribe |
| `message` | [`BytesLike`](../modules/providers.md#byteslike) | message |

##### Returns

`Promise`\<`string`\>

signature of personal message

#### Defined in

[src/providers/types.ts:40](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L40)

___

### signTransaction

• **signTransaction**: (`hdPath`: `string`, `transaction`: [`TransactionRequest`](../modules/providers.md#transactionrequest)) => `Promise`\<`string`\>

#### Type declaration

▸ (`hdPath`, `transaction`): `Promise`\<`string`\>

Sign transaction

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path for subscribe |
| `transaction` | [`TransactionRequest`](../modules/providers.md#transactionrequest) | transaction for sign |

##### Returns

`Promise`\<`string`\>

signature of transaction

#### Defined in

[src/providers/types.ts:29](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L29)

___

### signTypedData

• **signTypedData**: (`hdPath`: `string`, `typedData`: [`TypedData`](../modules/providers.md#typeddata)) => `Promise`\<`string`\>

#### Type declaration

▸ (`hdPath`, `typedData`): `Promise`\<`string`\>

Sign typed data

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path for subscribe |
| `typedData` | [`TypedData`](../modules/providers.md#typeddata) |  |

##### Returns

`Promise`\<`string`\>

signature of typed data

#### Defined in

[src/providers/types.ts:50](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L50)

___

### updatePin

• **updatePin**: (`pin`: `string`) => `Promise`\<`void`\>

#### Type declaration

▸ (`pin`): `Promise`\<`void`\>

Update pin for encrypted providers

##### Parameters

| Name | Type |
| :------ | :------ |
| `pin` | `string` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/providers/types.ts:59](https://github.com/haqq-network/haqq-rn-wallet-providers/blob/69c5710/src/providers/types.ts#L59)

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

#### Inherited from

EventEmitter.[captureRejectionSymbol]

#### Defined in

node_modules/@types/node/events.d.ts:136

___

### addListener

▸ **addListener**\<`K`\>(`eventName`, `listener`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:597

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

#### Inherited from

EventEmitter.emit

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

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:922

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:774

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

#### Inherited from

EventEmitter.listenerCount

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

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:787

___

### off

▸ **off**\<`K`\>(`eventName`, `listener`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v10.0.0

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:747

___

### on

▸ **on**\<`K`\>(`eventName`, `listener`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v0.1.101

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:629

___

### once

▸ **once**\<`K`\>(`eventName`, `listener`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v0.3.0

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:659

___

### prependListener

▸ **prependListener**\<`K`\>(`eventName`, `listener`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:886

___

### prependOnceListener

▸ **prependOnceListener**\<`K`\>(`eventName`, `listener`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.prependOnceListener

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

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:818

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:758

___

### removeListener

▸ **removeListener**\<`K`\>(`eventName`, `listener`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:742

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ProviderInterface`](providers.ProviderInterface.md)

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

[`ProviderInterface`](providers.ProviderInterface.md)

**`Since`**

v0.3.5

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:768
