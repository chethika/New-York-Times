import React from 'react';
import spinner from './833.gif';

export default () => {
    return (
      <div>
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: '1000px', margin: '1px auto', display: 'block' }}
        />
      </div>
    );
  };