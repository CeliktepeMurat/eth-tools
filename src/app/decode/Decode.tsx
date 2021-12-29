import React, { useState } from 'react';

interface Props {}
const Decode = (props: Props) => {
  const [decodeInput, setDecodeInput] = useState(' ');
  const [decodedInput, setDecodedInput] = useState(' ');

  return (
    <div>
      <input
        type='text'
        onChange={(e) => setDecodeInput(e.target.value.toString())}
      />
      <button onClick={() => console.log('Encode')}>Decode</button>
      <p>{decodedInput && decodedInput}</p>
    </div>
  );
};

export default Decode;
