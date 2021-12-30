import BN from 'bn.js';
import Web3 from 'web3';
import { Mixed } from 'web3-utils';

const web3: Web3 = new Web3();

// e.g. input -> '32'
// e.g. output -> '0xa5b9d60f32436310afebcfda832817a68921beb782fabf7915cc0460b443116a'
export const generateRandomHex = (size: number): string => {
  const randomHex = web3.utils.randomHex(size);
  return randomHex;
};

// e.g. input: a string to hash -> '234'
// e.g. output: '0xc1912fee45d61c87cc5ea59dae311904cd86b84fee17cc96966216f811ce6a79'
export const getSha3 = (input: string): string | null => {
  const sha3 = web3.utils.sha3(input);
  return sha3;
};

// e.g. input -> {type: 'uint256', value: '234'} or ('234564535', '0xfff23243', true, -10) or '234' etc.
// e.g. output -> '0x61c831beab28d67d1bb40b5ae1a11e2757fa842f031a2d0bc94a7867bc5d26c2'
export const getSha3Packed = (input: Mixed): string | null => {
  const sha3 = web3.utils.soliditySha3Raw(input);
  return sha3;
};

// e.g. input -> '0xc1912'
// e.g. output -> true
export const isHexValue = (value: string): boolean => {
  const isHex = web3.utils.isHex(value);
  return isHex;
};

// e.g. input -> '0xc1912fee45d61c87cc5ea59dae31190fffff232d'
// e.g. output -> true
export const isAddress = (value: string): boolean => {
  const isAddress = web3.utils.isAddress(value);
  return isAddress;
};

// e.g. input -> '0xc1912fee45d61c87cc5ea59dae31190fffff232d'
// e.g. output -> '0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'
export const converToChecksumAddress = (value: string): string | null => {
  const checksumAddress = web3.utils.toChecksumAddress(value);
  return checksumAddress;
};

// e.g. input -> '0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'
// e.g. output -> true
export const checkAddressCheckSum = (value: string): boolean => {
  const checksumAddress = web3.utils.checkAddressChecksum(value);
  return checksumAddress;
};

// e.g. input -> 'I have 100€'
// e.g. output -> '0x49206861766520313030e282ac'
export const convertToHex = (value: string | number | BN): string => {
  const hex = web3.utils.toHex(value);
  return hex;
};

// e.g. input -> '0xea'
// e.g. output -> '234'
export const convertToBN = (value: string | number): BN => {
  const hex = web3.utils.toBN(value);
  return hex;
};

// e.g. input -> '0xea'
// e.g. output -> '234'
export const convertHexToNumber = (value: string): number => {
  const hex = web3.utils.hexToNumber(value);
  return hex;
};

// e.g. input -> '234'
// e.g. output -> '0xea'
export const convertNumberToHex = (value: string | number | BN): string => {
  const hex = web3.utils.numberToHex(value);
  return hex;
};

// e.g. input -> '0x000000ea'
// e.g. output -> [ 0, 0, 0, 234 ]
export const convertHexToBytes = (value: string): number[] => {
  const hex = web3.utils.hexToBytes(value);
  return hex;
};

// e.g. input -> '[ 72, 101, 108, 108, 111, 33, 36 ]'
// e.g. output -> '0x48656c6c6f2125'
export const convertBytesToHex = (value: string): number[] => {
  const hex = web3.utils.hexToBytes(value);
  return hex;
};
