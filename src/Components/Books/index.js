import { Component } from "react";
import Header from "../Header";
import "./index.css";

class Books extends Component {
  state = { booksData: [] };

  componentDidMount() {
    this.getBooksApi();
  }

  renderBooksData = (data) => {
    console.log(data);
    const { title, price, subtitle, image, isbn13 } = data;
    return (
      <li className="book-list">
        <img src={image} alt="img-gen" className="image" />
        <p className="title">{title}</p>
        <p className="price">{price}</p>
        <button type="button" className="add-cart-btn">
          Add to cart
        </button>
      </li>
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
    console.log(booksData);
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
