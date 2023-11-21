const ImageView = ({ image }) => {
  return (
    <section className="imageView">
      <img src={image.src} alt={image.title} />
      <h2>{image.title}</h2>
    </section>
  );
};

export default ImageView;
