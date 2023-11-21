const ImageListItem = ({ image, setCurrentImage }) => {
  const handleClick = () => {
    setCurrentImage(image);
  };
  return (
    <div onClick={handleClick}>
      <h2>{image.title}</h2>
      <img src={image.src} alt={image.title} width={200} height={200} />
    </div>
  );
};

export default ImageListItem;
