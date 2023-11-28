import { decrease, increase, getTotalPrice } from '../utils';

const ShoppingCart = ({ cart, setCart }) => {
  return cart.length ? (
    <>
      {cart.map(product => (
        <div className="cart-row" key={product.sku}>
          <div className="details">
            <h4>{product.name}</h4>
            Unit price: $ {product.price} | Qty: {product.qty}
          </div>
          <div className="cart-buttons">
            <button onClick={() => setCart(decrease(cart, product))}>-</button>
            <span>{parseFloat(product.price * product.qty).toFixed(2)} €</span>
            <button onClick={() => setCart(increase(cart, product))}>+</button>
          </div>
        </div>
      ))}
      <div className="cart-row">
        <h4>Total price: {getTotalPrice(cart)} €</h4>
      </div>
    </>
  ) : (
    <div className="cart-row">No items in your cart</div>
  );
};

export default ShoppingCart;
