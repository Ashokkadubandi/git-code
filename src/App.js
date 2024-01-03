import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Books from "./Components/Books";
import TGames from "./Components/Toys%Games";
import NotFound from "./Components/NotFound";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/books" component={Books} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/cart" component={TGames} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
);

export default App;
