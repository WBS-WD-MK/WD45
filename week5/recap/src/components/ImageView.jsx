const ImageView = ({ image }) => {
  return (
    <div>
      <h2>{image.title}</h2>
      <img src={image.src} alt={image.title} width={500} />
    </div>
  );
};

export default ImageView;
