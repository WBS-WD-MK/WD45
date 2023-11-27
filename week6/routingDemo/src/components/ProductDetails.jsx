import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch(e => setError(e.message));
  }, []);
  return (
    <>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt="" width="200px" />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.images[0]} />
          <button onClick={() => navigate(-1)}>Go Back!</button>
        </div>
      ) : (
        <p>loading...</p>
      )}
      {error && <p>{error} No Product matched the id</p>}
    </>
  );
};

export default ProductDetails;
