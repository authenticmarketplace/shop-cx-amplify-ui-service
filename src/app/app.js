import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Browse } from '../routes/browse';
import { Product } from '../routes/product';
import { Discovery } from '../routes/discovery';
import { MyStore } from '../routes/mystore';
import { ShoppingBag } from '../routes/shoppingBag';
import { ResetScrollHeight } from './../utils';
import './app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ResetScrollHeight />
        <Switch>
          <Route path="/" exact component={Browse} />
          <Route path="/discovery" component={Discovery} />
          <Route path="/mystore" component={MyStore} />
          <Route path="/bag" component={ShoppingBag} />
          <Route path="/product/:productID" component={Product} id=":productID" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
