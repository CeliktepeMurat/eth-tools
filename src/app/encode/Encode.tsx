import React, { useState, useEffect } from 'react';
import { encodeFunctionSigWithString } from '../../scripts/encode.inputs';

interface Props {}

const Encode = (props: Props) => {
  const [encodeInput, setEncodeInput] = useState(' ');
  const [encodedInput, setEncodedInput] = useState(' ');

  const encodeSigWithString = (text: string) => {
    setEncodedInput(encodeFunctionSigWithString(text));
  };
  return (
    <div>
      <input
        type='text'
        onChange={(e) => setEncodeInput(e.target.value.toString())}
      />

      <button onClick={() => encodeSigWithString(encodedInput)}>Encode</button>
      <p>{encodedInput && encodedInput}</p>
    </div>
  );
};

export default Encode;
