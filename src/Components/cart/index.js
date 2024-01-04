import { Component } from "react";
import Sample from "../../context/global";
import Header from "../Header";
import CartItems from "../cartItems";
import "./index.css";

class Cart extends Component {
  render() {
    return (
      <Sample.Consumer>
        {(value) => {
          const { cart } = value;
          console.log(cart);

          return (
            <>
              <Header />
              <ul className="cart-items-container">
                {cart.map((each) => (
                  <CartItems key={each.isbn13} itemDetails={each} />
                ))}
              </ul>
            </>
          );
        }}
      </Sample.Consumer>
    );
  }
}

export default Cart;
