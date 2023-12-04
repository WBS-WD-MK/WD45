import { useState, useEffect } from 'react';
import './App.css';
import Meme from './components/Meme';
import Control from './components/Control';
import axios from 'axios';
function App() {
  const [topLabel, setTopLabel] = useState('');
  const [bottomLabel, setBottomLabel] = useState('');
  const [memes, setMemes] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [download, setDownload] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.imgflip.com/get_memes')
      .then(({ data }) => {
        const memesArray = data.data.memes;
        console.log(memesArray);
        setMemes(memesArray);
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        setCurrentImageIndex(randomIndex);
      })
      .catch(e => console.log('Error in fetch memes'));
  }, []);
  const handleNextMeme = () => {
    setCurrentImageIndex(previousIndex =>
      previousIndex < memes.length - 1 ? previousIndex + 1 : 0,
    );
  };
  const handlePrevMeme = () => {
    setCurrentImageIndex(previousIndex =>
      previousIndex > 0 ? previousIndex - 1 : memes.length - 1,
    );
  };
  const handleRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setCurrentImageIndex(randomIndex);
  };
  return (
    <>
      <Meme
        meme={memes && memes[currentImageIndex]}
        topLabel={topLabel}
        bottomLabel={bottomLabel}
        download={download}
      />
      <Control
        topLabel={topLabel}
        bottomLabel={bottomLabel}
        setTopLabel={setTopLabel}
        setBottomLabel={setBottomLabel}
        handleNextMeme={handleNextMeme}
        handlePrevMeme={handlePrevMeme}
        handleRandomMeme={handleRandomMeme}
      />
    </>
  );
}

export default App;
