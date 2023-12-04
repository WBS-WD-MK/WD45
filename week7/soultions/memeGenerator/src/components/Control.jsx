import React from 'react';

const Control = ({
  topLabel,
  bottomLabel,
  setTopLabel,
  setBottomLabel,
  handleNextMeme,
  handlePrevMeme,
  handleRandomMeme,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
      <input type="text" value={topLabel} onChange={e => setTopLabel(e.target.value)} />
      <input type="text" value={bottomLabel} onChange={e => setBottomLabel(e.target.value)} />
      <button onClick={handleNextMeme}>Next Meme</button>
      <button onClick={handlePrevMeme}>Previous Meme</button>
      <button onClick={handleRandomMeme}>Random Meme</button>
      
    </div>
  );
};

export default Control;
