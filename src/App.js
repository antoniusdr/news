import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsList from "./pages/NewsList";
import Article from "./pages/Article";
import NavBar from "./components/NavBar";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/newslist/:id" component={Article} />
        <Route path="/newslist" component={NewsList} exact />
        <Route path="/about" component={About} exact />

        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
