export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function uuidv4Stringify(buffer: Buffer) {
  if (buffer.length !== 16) {
    throw new Error(`Invalid buffer length for uuid: ${buffer.length}`);
  }
  if (buffer.equals(Buffer.alloc(16))) {
    return null;
  } // If buffer is all zeros, return null
  const str = buffer.toString('hex');
  return `${str.slice(0, 8)}-${str.slice(8, 12)}-${str.slice(
    12,
    16,
  )}-${str.slice(16, 20)}-${str.slice(20)}`;
}

export function hexBuffer(str: string | Buffer): Buffer {
  if (Buffer.isBuffer(str)) {
    return Buffer.from(str);
  }
  return Buffer.from(str.startsWith('0x') ? str.slice(2) : str, 'hex');
}

export function normalize0x(strWith0x: string): string {
  return strWith0x.replace(/^(0x)*/, '0x');
}

export function encodeBase58(buffer: Buffer): string {
  const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  const base = BigInt(58);

  let result = '';
  let num = BigInt('0x' + buffer.toString('hex'));

  while (num > 0) {
    const remainder = num % base;
    num = num / base;
    result = alphabet[Number(remainder)] + result;
  }

  // Добавляем ведущие нули
  for (const byte of buffer) {
    if (byte === 0x00) {
      result = alphabet[0] + result;
    } else {
      break;
    }
  }

  return result;
}
