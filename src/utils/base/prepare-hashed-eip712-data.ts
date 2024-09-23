import {utils} from 'ethers';

import {TypedData} from '../../providers/types';

export const prepareHashedEip712Data = ({
  domain,
  message,
  types,
}: TypedData) => {
  const {EIP712Domain, ...othTypes} = types;
  const domainSeparatorHex = utils._TypedDataEncoder.hashStruct(
    'EIP712Domain',
    {EIP712Domain},
    domain,
  );
  const hashStructMessageHex = utils._TypedDataEncoder
    .from(othTypes)
    .hash(message);
  return {
    domainSeparatorHex,
    hashStructMessageHex,
  };
};
