import { getTotalItems } from '../utils';

const Header = ({ cart }) => {
  return (
    <div className="header">
      <h1>
        E-shop
        <span role="img" aria-label="money">
          🤑
        </span>
      </h1>
      <div className="badge-wrapper">
        <div className="cart-icon">
          <span role="img" aria-label="cart">
            🛒
          </span>
        </div>
        <span> {getTotalItems(cart)} </span>
      </div>
    </div>
  );
};

export default Header;
