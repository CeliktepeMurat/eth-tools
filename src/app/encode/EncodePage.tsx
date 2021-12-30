import React, { useState, useEffect } from 'react';
import EncodeCard from '../../components/EncodeCard';
import { encodeFunctionSigWithString } from '../../scripts/encode.inputs';

interface Props {}

const Encode = (props: Props) => {
  return (
    <div>
      <h1>Encode Page</h1>
      <EncodeCard />
    </div>
  );
};

export default Encode;
