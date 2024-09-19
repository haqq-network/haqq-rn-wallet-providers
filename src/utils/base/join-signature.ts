export function joinSignature(signature: string) {
  const sig = Buffer.from(signature, 'hex');

  if (sig.length === 65) {
    sig[64] = sig[64] ? 28 : 27;
  }

  return sig.toString('hex');
}
