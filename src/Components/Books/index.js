import { Component } from "react";
import Header from "../Header";

class Books extends Component {
  componentDidMount() {
    this.getBooksApi();
  }

  getBooksApi = async () => {
    const url = "https://api.itbook.store/1.0/search/mongodb";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Header />
        <p>Get books API</p>
      </div>
    );
  }
}

export default Books;
