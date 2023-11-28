import ProductCard from './ProductCard';

const ProductList = ({ products, cart, setCart }) => {
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.sku} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default ProductList;
