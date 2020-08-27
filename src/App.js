import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import BrowseComponent from './BrowseComponent/index.js';
import ProductInfoComponent from './BrowseComponent/ProductInfoComponent';
import ScrollToTop from './_components/ScrollToTop.js';
import AppMenu from './Menu';
import ForYouComponent from './ForYouComponent.js';
import MyStoreComponent from './MyStoreComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={AppMenu} />
          <Route path="/browse" component={BrowseComponent} />
          <Route path="/foryou" component={ForYouComponent} />
          <Route path="/mystore" component={MyStoreComponent} />
          <Route path="/product/:productId" component={ProductInfoComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
