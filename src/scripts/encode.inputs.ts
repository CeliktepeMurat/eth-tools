import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

const web3: Web3 = new Web3();

// encoding function signature for given string input
// e.g input -> 'myMethod(uint256,string)'
// e.g output -> '0x24ee0097'
export const encodeFunctionSigWithString = (input: string): string => {
  const functionSig = web3.eth.abi.encodeFunctionSignature(input);
  return functionSig;
};

/*
// encoding function signature for given AbiItem input
// e.g input -> {
    name: 'myMethod',
    type: 'function',
    inputs: [{
        type: 'uint256',
        name: 'myNumber'
    },{
        type: 'string',
        name: 'myString'
    }]
}
// e.g output -> '0x24ee0097'
*/
export const encodeFunctionSigWithAbi = (input: AbiItem): string => {
  const functionSig = web3.eth.abi.encodeFunctionSignature(input);
  return functionSig;
};

// encoding event signature for given string input
// e.g input -> 'myEvent(uint256,bytes32)'
// e.g output -> '0xf2eeb729e636a8cb783be044acf6b7b1e2c5863735b60d6daae84c366ee87d97' - The ABI signature of the event.
export const encodeEventSig = (input: string): string => {
  const eventSig = web3.eth.abi.encodeEventSignature(input);
  return eventSig;
};

/*
// encoding function signature for given AbiItem input
// e.g input -> {
    name: 'myEvent',
    type: 'event',
    inputs: [{
        type: 'uint256',
        name: 'myNumber'
    },{
        type: 'bytes32',
        name: 'myBytes'
    }]
}
// e.g output -> '0xf2eeb729e636a8cb783be044acf6b7b1e2c5863735b60d6daae84c366ee87d97' - The ABI signature of the event.
*/
export const encodeEventSigWithAbi = (input: AbiItem): string => {
  const functionSig = web3.eth.abi.encodeEventSignature(input);
  return functionSig;
};

/*
// encoding single parameter with given type
// e.g input -> type: "uint256", param: "2345675643"
// e.g output -> 0x000000000000000000000000000000000000000000000000000000008bd02b7b
*/
export const encodeParameter = (type: string | object, param: any): string => {
  const encodedParamether = web3.eth.abi.encodeParameter(type, param);
  return encodedParamether;
};

/*
// encoding multiple parameters with given types
// e.g input -> types: ['uint256', 'string'], params: ['2345675643', 'Hello']
// e.g output -> 0x000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000748656c6c6f212500000000000000000000000000000000000000000000000000
*/
export const encodeParameters = (types: any[], params: any[]): string => {
  const encodedParamether = web3.eth.abi.encodeParameters(types, params);
  return encodedParamether;
};
