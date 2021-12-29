import React from 'react';
import Decode from './app/decode/Decode';
import Encode from './app/encode/Encode';

interface Props {}

const App = (props: Props) => {
  return (
    <div>
      <Encode />
      <Decode />
    </div>
  );
};

export default App;
