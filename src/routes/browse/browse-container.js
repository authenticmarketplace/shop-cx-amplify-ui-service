import React, { useReducer, useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries.js';
import BrowseView from './browse-view';

const initialState = {
  products: [],
  error: false,
  isLoading: true
}

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_PRODUCTS":
      return {...state, products: action.products, isLoading: false }
    case 'ERROR':
      return { ...state, error: true }
      default:
      return state
  }
}

const BrowseContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [welcome, setWelcome ] = useState(true);

  const request_products = async () => {
    if(localStorage.productRequestCount && localStorage.productRequestCount < 10500) {
      dispatch({type: 'SET_PRODUCTS', products: JSON.parse(localStorage.allProducts)})
      localStorage.productRequestCount++;
    }
    else {
      try {
        const products = await API.graphql({
          query: listProducts
        })
        console.log("Completed Products Request via API - Products Retrieved @ " + Date.now())
        dispatch({ type: 'SET_PRODUCTS', products: products.data.listProducts.items })
        localStorage.allProducts = JSON.stringify(products.data.listProducts.items)
        localStorage.productRequestCount = 1;
      }
      catch(err) {
        console.log(err);
        dispatch({ type: 'ERROR' })
      }
    }
  }

  useEffect(() => {
    request_products()
  }, [])

  return (
    <React.Fragment>
      <BrowseView welcome={welcome} setWelcome={setWelcome} isLoading={state.isLoading} products={state.products} requestProducts={request_products}/>
    </React.Fragment>
  );
}

export default BrowseContainer;