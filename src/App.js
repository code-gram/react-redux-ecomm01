import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/product/:productId" component={ProductDetail} />
        <Route>404 Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
