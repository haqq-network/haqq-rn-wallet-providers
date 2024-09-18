export function calcTypedDataSignatureV(signature: string) {
  if (!signature) {
    throw new Error('Invalid signature');
  }
  signature = signature.replace(/^0x/, '');
  if (signature.length !== 130) {
    throw new Error('Invalid signature length');
  }
  const orginalV = parseInt(signature.slice(-2), 16);
  if (Number.isNaN(orginalV)) {
    throw new Error('Invalid signature V');
  }
  const offset = 27;
  const v = (orginalV + offset).toString(16);
  return '0x' + signature.slice(0, -2) + v;
}
