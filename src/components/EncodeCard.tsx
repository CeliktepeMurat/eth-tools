import React, { useState } from 'react';

interface Props {
  title: string;
  buttonText: string;
  func: any;
}

const EncodeCard = ({ title, buttonText, func }: Props) => {
  const [encodeInput, setEncodeInput] = useState(' ');
  const [encodedInput, setEncodedInput] = useState(' ');

  return (
    <div
      style={{
        width: '80%',
        height: '260px',
        minWidth: '400px',
        maxWidth: '600px',
        margin: 'auto',
        borderRadius: '20px',
        backgroundImage: `linear-gradient(to right, #e66465, #9198e5)`,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
        marginTop: '20px',
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
        {title}
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '30px auto',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <input
          className=''
          placeholder='Enter to encode...'
          type='text'
          onChange={(e) => setEncodeInput(e.target.value.toString())}
          style={{
            width: '80%',
            height: '100px',
            textAlign: 'center',
            borderRadius: '5px',
          }}
        />

        <button
          style={{
            color: 'white',
            marginTop: '20px',
            borderRadius: '10px',
            padding: '10px',
            backgroundColor: '#e66465',
            alignSelf: 'center',
          }}
          onClick={() => setEncodedInput(func(encodeInput))}
        >
          {buttonText}
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
