import React from 'react';

function DisplaySimpson({ Simpson }) {
  return (
    Simpson && (
      <div className='DisplaySimpson'>
        <img src={Simpson[0].image} alt={Simpson[0].name} />
        
          <h1>{Simpson[0].character}</h1>
          <h2>{Simpson[0].quote}</h2>
        
      </div>
    )
  );
}

export default DisplaySimpson;
