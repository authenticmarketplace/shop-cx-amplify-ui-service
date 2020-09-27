/* NPM Modules */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* App Modules */
/* App Components */
import Browse from './Components/Browse/index.js';
import ProductDetails from './Components/ProductDetails/index.js';
import ScrollToTop from './Components/_parts/ScrollToTop.js';
import ForYou from './Components/ForYou/index.js';
import MyStore from './Components/MyStore';
import ShoppingBag from './Components/ShoppingBag/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Browse} />
          <Route path="/foryou" component={ForYou} />
          <Route path="/mystore" component={MyStore} />
          <Route path="/bag" component={ShoppingBag} />
          <Route path="/product/:productID" component={ProductDetails} id=":productID" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
