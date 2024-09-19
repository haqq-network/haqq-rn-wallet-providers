import converter from 'bech32-converting';

/**
 * get cosmos address
 * @param {string} address eth address
 * @param {string} prefix prefix for address
 */
export const cosmosAddress = (address: string, prefix: string) => {
  return converter(prefix).toBech32(address);
};
