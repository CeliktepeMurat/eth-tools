import React, { useState } from 'react';

interface Props {}

const EncodeCard = (props: Props) => {
  const [encodeInput, setEncodeInput] = useState(' ');
  const [encodedInput, setEncodedInput] = useState(' ');

  return (
    <div
      style={{
        width: '40%',
        height: '240px',
        minWidth: '400px',
        maxWidth: '600px',
        margin: 'auto',
        borderRadius: '20px',
        backgroundImage: `linear-gradient(to right, #e66465, #9198e5)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '20px',
          marginTop: '10px',
        }}
      >
        Encode string
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '30px auto',

          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <input
          className=''
          placeholder='Encode string...'
          type='text'
          onChange={(e) => setEncodedInput(e.target.value.toString())}
          style={{
            width: '60%',
            height: '40px',
            textAlign: 'center',
            borderRadius: '20px',
          }}
        />

        <button
          style={{
            color: 'white',

            borderRadius: '20px',
            padding: '15px',
            backgroundColor: '#e66465',
          }}
          onClick={() => console.log('function')}
        >
          Encode
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',

          padding: '20px',
        }}
      >
        <p style={{ color: 'white', fontSize: '22px' }}>
          {encodedInput && encodedInput}
        </p>
      </div>
    </div>
  );
};

export default EncodeCard;
