import {TransactionRequest} from '@ethersproject/abstract-provider';
import {
  DataType,
  ETHSignature,
  EthSignRequest,
} from '@keystonehq/bc-ur-registry-eth';
import {UR} from '@ngraveio/bc-ur';
import {UnsignedTransaction, ethers, utils} from 'ethers';

import {ProviderKeystoneBase} from './provider';

import {ProviderKeystonErrorEnum} from '../../constants';
import {calcTypedDataSignatureV, stringToUtf8Bytes} from '../../utils';
import {
  hexBuffer,
  normalize0x,
  uuidv4,
  uuidv4Stringify,
} from '../../utils/utils';
import {BytesLike, ProviderInterface, TypedData} from '../types';

export class ProviderKeystoneEvm
  extends ProviderKeystoneBase
  implements ProviderInterface
{
  async signTransaction(hdPath: string, transaction: TransactionRequest) {
    const resp = '';
    try {
      const unsignedTx = ethers.utils.serializeTransaction(
        transaction as UnsignedTransaction,
      );
      const dataType =
        transaction.type === 0
          ? DataType.transaction
          : DataType.typedTransaction;
      const unsignedTxBuffer = hexBuffer(unsignedTx);
      const {address} = await this.getAccountInfo(hdPath);
      const requestID = uuidv4();

      const signRequest = EthSignRequest.constructETHRequest(
        unsignedTxBuffer,
        dataType,
        hdPath,
        this._xfp,
        requestID,
        transaction.chainId,
        address,
      );

      const ur = signRequest.toUR();
      const {signatureHex} = await this._options.awaitForSign({
        requestID,
        cborHex: ur.cbor.toString('hex'),
        urType: ur.type,
      });
      const signature = this._parseSignature(signatureHex, requestID);

      const result = utils.serializeTransaction(
        transaction as UnsignedTransaction,
        signature,
      );

      this.emit('signTransaction', true);
      return result;
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'signTransaction');
      }
    }

    return resp;
  }

  async signPersonalMessage(
    hdPath: string,
    message: string | BytesLike,
  ): Promise<string> {
    let resp = '';
    try {
      const m = Array.from(
        typeof message === 'string' ? stringToUtf8Bytes(message) : message,
      );
      const unsignedBuffer = Buffer.from(m);
      const dataType = DataType.personalMessage;
      const {address} = await this.getAccountInfo(hdPath);
      const requestID = uuidv4();

      const signRequest = EthSignRequest.constructETHRequest(
        unsignedBuffer,
        dataType,
        hdPath,
        this._xfp,
        requestID,
        undefined,
        address,
      );

      const ur = signRequest.toUR();
      const {signatureHex} = await this._options.awaitForSign({
        requestID,
        cborHex: ur.cbor.toString('hex'),
        urType: ur.type,
      });
      resp = this._parseSignatureToHex(signatureHex, requestID);
      this.emit('signPersonalMessage', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'signPersonalMessage');
      }
    }

    return resp;
  }

  async signTypedData(hdPath: string, typedData: TypedData) {
    let resp = '';
    try {
      // calculate primary type
      const otherTypes = {...typedData.types};
      delete otherTypes.EIP712Domain;
      const primaryType = Object.keys(otherTypes)[0];

      const typedDataJson = JSON.stringify({
        ...typedData,
        primaryType,
      });
      const unsignedTxBuffer = Buffer.from(typedDataJson, 'utf8');
      const dataType = DataType.typedData;
      const {address} = await this.getAccountInfo(hdPath);
      const requestID = uuidv4();

      const signRequest = EthSignRequest.constructETHRequest(
        unsignedTxBuffer,
        dataType,
        hdPath,
        this._xfp,
        requestID,
        undefined,
        address,
      );

      const ur = signRequest.toUR();
      const {signatureHex} = await this._options.awaitForSign({
        requestID,
        cborHex: ur.cbor.toString('hex'),
        urType: ur.type,
      });
      resp = this._parseSignatureToHex(signatureHex, requestID);
      this.emit('signTypedData', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'signTypedData');
      }
      return '';
    }

    return calcTypedDataSignatureV(resp);
  }

  private _parseSignature(signatureHex: string, requestID: string) {
    const signatureBuffer = hexBuffer(signatureHex);
    const signatureUr = new UR(signatureBuffer, 'eth-signature');

    const ethSignature = ETHSignature.fromCBOR(signatureUr.cbor);
    const signatureRequestID = uuidv4Stringify(ethSignature.getRequestId());

    if (signatureRequestID !== requestID) {
      this._throwError(
        ProviderKeystonErrorEnum.InvalidRequestID,
        '_parseSignature',
      );
    }

    const signature = ethSignature.getSignature();

    const jsonSignature = {
      r: signature.slice(0, 32).toString('hex'),
      s: signature.slice(32, 64).toString('hex'),
      v: signature.slice(64, 65).toString('hex'),
    };

    return {
      r: '0x' + jsonSignature.r,
      s: '0x' + jsonSignature.s,
      v: parseInt(jsonSignature.v, 16),
    };
  }

  private _parseSignatureToHex(
    signatureHex: string,
    requestID: string,
  ): string {
    const signature = this._parseSignature(signatureHex, requestID);
    const v = (signature.v - 27).toString(16).padStart(2, '0');
    return normalize0x('0x' + signature.r.slice(2) + signature.s.slice(2) + v);
  }
}
