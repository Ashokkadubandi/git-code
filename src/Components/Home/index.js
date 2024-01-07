import Header from "../Header";

import "./index.css";

const Home = () => (
  <>
    <Header />
    <div className="home">
      <div className="card-box">
        <p className="heading-books">
          Books that you want know Deployed by Vercel
        </p>
        <p className="desc">
          Explore your shopping here with relevant things that you would might
          buy such products
        </p>
        <button className="btn-style" type="button">
          Explore
        </button>
      </div>
    </div>
  </>
);

export default Home;
