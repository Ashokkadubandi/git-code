import { Component } from "react";
import Header from "../Header";
import Sample from "../../context/global";
import "./index.css";

class Books extends Component {
  state = { booksData: [] };

  componentDidMount() {
    this.getBooksApi();
  }

  renderBooksData = (data) => {
    const { title, price, image, isbn13 } = data;
    return (
      <Sample.Consumer>
        {(value) => {
          const { updateAddCart, cart } = value;
          const checking = cart.find((each) => each.isbn13 === data.isbn13);
          const addCartItem = () => {
            console.log(checking);
            if (checking === undefined) {
              updateAddCart(data);
            }
          };

          return (
            <li className="book-list" key={isbn13}>
              <img src={image} alt="img-gen" className="image" />
              <p className="title">{title}</p>
              <p className="price">{price}</p>
              <button
                type="button"
                className="add-cart-btn"
                onClick={addCartItem}
              >
                {checking === undefined ? "Add to cart" : "Added"}
              </button>
            </li>
          );
        }}
      </Sample.Consumer>
    );
  };

  getBooksApi = async () => {
    const url = "https://api.itbook.store/1.0/search/mongodb";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({ booksData: data.books });
  };
  render() {
    const { booksData } = this.state;
    return (
      <div>
        <Header />
        <p>Get books API</p>
        <ul className="books-container">
          {booksData.map((each) => this.renderBooksData(each))}
        </ul>
      </div>
    );
  }
}

export default Books;
