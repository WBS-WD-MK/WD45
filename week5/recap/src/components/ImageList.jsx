import ImageListItem from './ImageListItem';

const ImageList = ({ images, setCurrentImage }) => {
  return (
    <aside>
      {images.map(image => (
        <ImageListItem key={image.id} image={image} setCurrentImage={setCurrentImage} />
      ))}
    </aside>
  );
};

export default ImageList;
