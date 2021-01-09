import "./header.css";
import logo from "./assets/logo.svg";
import cart from "./assets/cart.svg";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} className="app-logo" alt="logo" />
        </div>
        <div className="cart-icon">
          <img src={cart} className="cart-shop" alt="cart-shop" />
        </div>
      </div>
    </div>
  );
}

export default Header;
