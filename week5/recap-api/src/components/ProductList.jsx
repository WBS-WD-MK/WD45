import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
const ProductList = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
        // in general all axios data will be in res.data
        setProducts(res.data.products);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      {products?.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
