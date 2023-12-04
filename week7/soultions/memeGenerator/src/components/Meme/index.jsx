import React from 'react';
import './meme.css';
const Meme = ({ meme, topLabel, bottomLabel }) => {
  return (
    <>
      {meme ? (
        <div className="meme">
          <label className="top">{topLabel}</label>
          <img src={meme.url} alt={meme.name} />
          <label className="bottom">{bottomLabel}</label>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default Meme;
