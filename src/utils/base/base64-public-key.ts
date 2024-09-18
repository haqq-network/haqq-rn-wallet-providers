import {compressPublicKey} from './compress-public-key';

/**
 * Base64 encode public key
 * @param {string} publicKey public key
 * @return base64 encoded public key
 */
export const base64PublicKey = (publicKey: string) => {
  return Buffer.from(compressPublicKey(publicKey), 'hex').toString('base64');
};
