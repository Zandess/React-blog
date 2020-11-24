import "./scss/style.scss";
//components
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import AboutBlock from "./components/AboutBlock/AboutBlock";
import AddNews from "./components/AddNews/AddNews";
//
//lib
import { Route, Switch } from "react-router-dom";
//
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/about" component={AboutBlock} />
        <Route path="/addnews" component={AddNews} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
