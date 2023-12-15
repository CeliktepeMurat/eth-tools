import React, { useState, useEffect } from 'react';
import EncodeCard from '../../components/EncodeCard';
import { encodeFunctionSigWithString } from '../../scripts/encode.inputs';

interface Props {}

const Encode = (props: Props) => {
  return (
    <div>
      <div style={{ margin: '20px 0' }}>
        <EncodeCard
          title='Encode Function Signature'
          buttonText='Encode'
          func={encodeFunctionSigWithString}
        />
        <EncodeCard
          title='Encode Function Signature'
          buttonText='Encode'
          func={encodeFunctionSigWithString}
        />
        <EncodeCard
          title='Encode Function Signature'
          buttonText='Encode'
          func={encodeFunctionSigWithString}
        />
        <EncodeCard
          title='Encode Function Signature'
          buttonText='Encode'
          func={encodeFunctionSigWithString}
        />
      </div>
    </div>
  );
};

export default Encode;
