import Web3 from 'web3';
import { AbiInput, AbiItem } from 'web3-utils';

const web3: Web3 = new Web3();

/*
// decoding input data according to given type
// e.g input -> ("uint256", "0x0000000000000000000000000000000000000000000000000000000000000010")
// e.g output -> '16'
*/
export const decodeParam = (type: string | object, hex: string): any => {
  const decodedInput = web3.eth.abi.decodeParameter(type, hex);
  return decodedInput;
};

/*
// decoding input data according to given types
// e.g input -> (['string', 'uint256'], "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ea000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000")
// e.g output ->  { '0': 'Hello!%!', '1': '234' }
*/
export const decodeParams = (
  type: any[],
  hex: string
): { [key: string]: any } => {
  const decodedInput = web3.eth.abi.decodeParameters(type, hex);
  return decodedInput;
};

/*
// decoding Log 
// e.g input -> 
// inputs: [{
                type: 'string',
                name: 'myString'
            },{
                type: 'uint256',
                name: 'myNumber',
                indexed: true
            },{
                type: 'uint8',
                name: 'mySmallNumber',
                indexed: true
            }]
    hex: "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000748656c6c6f252100000000000000000000000000000000000000000000000000"
    topics: ['0x000000000000000000000000000000000000000000000000000000000000f310', '0x0000000000000000000000000000000000000000000000000000000000000010']);
// e.g output -> 
// Result   {
                '0': 'Hello%!',
                '1': '62224',
                '2': '16',
                myString: 'Hello%!',
                myNumber: '62224',
                mySmallNumber: '16'
            }
*/
export const decodeLog = (
  inputs: AbiInput[],
  hex: string,
  topics: string[]
): { [key: string]: any } => {
  const decodedLog = web3.eth.abi.decodeLog(inputs, hex, topics);
  return decodedLog;
};
