import { Component } from "react";
import "./index.css";

class CartItem extends Component {
  render() {
    const { itemDetails } = this.props;
    const { image, title, subtitle, price } = itemDetails;
    return (
      <li className="cart-details">
        <img src={image} alt="img" className="image" />
        <div className="text-container">
          <h1 className="title">{title}</h1>
          <p className="sub">{subtitle}</p>
          <p className="price">{price}</p>
        </div>
      </li>
    );
  }
}
export default CartItem;
