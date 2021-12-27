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
