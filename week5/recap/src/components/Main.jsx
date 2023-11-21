import ImageView from './ImageView';
import ImageList from './ImageList';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
const Main = () => {
  const [images, setImages] = useState([
    {
      id: uuidv4(),
      title: 'police Duck',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeSqFaod7jFjHL5ZJXWJ9bV9QbqATMt9qWA&usqp=CAU',
    },
    {
      id: uuidv4(),
      title: 'Roman Duck',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMWGZDeRHPoeU3U5BkbfZb673pBFXN12izg&usqp=CAU',
    },
  ]);
  const [currentImage, setCurrentImage] = useState({});

  // set the current image to be the first image in the list
  // THIS WILL ONLY RUN THE FIRST TIME THE APP IS LOADED
  useEffect(() => {
    if (images.length > 0) {
      // set the current image to be the first image of the array
      setCurrentImage(images[0]);
    }
  }, [images]);

  // we can pass this function instead of setCurrentImage to the ImageList
  const handleImageClick = image => {
    setCurrentImage(image);
  };
  return (
    <main>
      <ImageView image={currentImage} />
      <ImageList images={images} setCurrentImage={setCurrentImage} />
    </main>
  );
};

export default Main;
