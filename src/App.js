import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import BrowseComponent from './BrowseComponent/index.js';
import ProductInfoComponent from './BrowseComponent/ProductInfoComponent';
import ScrollToTop from './_components/ScrollToTop.js';
import AppMenu from './Menu';
import ForYouComponent from './ForYouComponent.js';
import MyStoreComponent from './MyStoreComponent';
import ShoppingBagComponent from './ShoppingBag/BagComponent.js';
import Playground from './playground.js';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Playground} />
          <Route path="/browse" component={BrowseComponent} />
          <Route path="/foryou" component={ForYouComponent} />
          <Route path="/mystore" component={MyStoreComponent} />
          <Route path="/bag" component={ShoppingBagComponent} />
          <Route path="/product/:productID" component={ProductInfoComponent} id=":productID" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
