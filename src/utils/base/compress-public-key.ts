/**
 * Compress public key
 * @param {string} publicKey public key
 * @return compressed public key
 */
export const compressPublicKey = (publicKey: string) => {
  const pk = publicKey.startsWith('0x') ? publicKey.slice(2) : publicKey;

  if (pk.length === 66 && (pk.startsWith('02') || pk.startsWith('03'))) {
    return pk;
  }

  const pk1 = Buffer.from(pk, 'hex');

  // tslint:disable-next-line:no-bitwise
  const prefix = (pk1[64] & 1) !== 0 ? 0x03 : 0x02;
  const prefixBuffer = Buffer.alloc(1);
  prefixBuffer[0] = prefix;
  return Buffer.concat([prefixBuffer, pk1.slice(1, 1 + 32)]).toString('hex');
};
