import { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaTimes, FaBookReader } from "react-icons/fa";
import "./index.css";

class Header extends Component {
  state = { navBar: false };

  triggerNavItems = () => {
    this.setState((pre) => ({ navBar: !pre.navBar }));
  };

  renderNavItems = () => {
    return (
      <div className="nav-items-container">
        <ul className="nav-items">
          <li className="mobile-links">Books</li>
          <li className="mobile-links">Toys and Games</li>
          <li className="mobile=links">Contact</li>
          <li className="mobile-links">Books</li>
          <li className="mobile-links">Toys and Games</li>
          <li className="mobile=links">Contact</li>
          <li className="mobile-links">Books</li>
          <li className="mobile-links">Toys and Games</li>
          <li className="mobile=links">Contact</li>
        </ul>
        <p onClick={this.triggerNavItems}>
          <FaTimes />
        </p>
      </div>
    );
  };

  render() {
    const { navBar } = this.state;
    return (
      <>
        <nav className="header">
          <Link to="/" className="link">
            <FaBookReader className="book-logo-font" />
          </Link>
          <div className="nav-names">
            <Link to="/books" className="link">
              <p>Books</p>
            </Link>
            <Link to="/cart" className="link">
              <p>Cart</p>
            </Link>
            <Link to="contact" className="link">
              <p>Contact</p>
            </Link>
          </div>
        </nav>
        <div className="mobile-responsive">
          <FaBookReader className="book-logo-small" />
          <>
            {navBar ? (
              this.renderNavItems()
            ) : (
              <FaAlignJustify
                onClick={this.triggerNavItems}
                className="hamburger"
              />
            )}
          </>
        </div>
      </>
    );
  }
}

export default Header;
