import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(({ data }) => setProducts(data.products))
      .catch(e => console.error('ERROR IN GET PRODUCTS', e));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt="" width="200px" />
          <Link to={`/products/${product.id}`}>More Details </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
