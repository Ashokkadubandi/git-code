import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { Component } from "react";
import Books from "./Components/Books";
import Cart from "./Components/cart";
import NotFound from "./Components/NotFound";
import Sample from "./context/global";

class App extends Component {
  state = { cart: [] };

  addCartItem = (data) => {
    console.log("Cart function is called");
    this.setState((pre) => ({ cart: [...pre.cart, data] }));
  };

  render() {
    const { cart } = this.state;
    return (
      <Sample.Provider value={{ cart: cart, updateAddCart: this.addCartItem }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Sample.Provider>
    );
  }
}

export default App;
