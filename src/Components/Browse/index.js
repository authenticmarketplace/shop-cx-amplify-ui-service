/* NPM Modules */
import React, { useReducer, useEffect } from 'react';
import { API } from 'aws-amplify';
/* App Modules */
import { listProducts } from '../../graphql/queries.js';
/* App Components */
import BrowseView from './BrowseView';

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

const BrowseComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const request_products = async () => {
    if(localStorage.productRequestCount && localStorage.productRequestCount < 10500) {
      dispatch({type: 'SET_PRODUCTS', products: JSON.parse(localStorage.allProducts)})
      localStorage.productRequestCount++;
      console.log("Set Products from Local Storage - Product Request Count is: " + localStorage.productRequestCount)
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
        console.log("Created Product Request Count in Local Storage")
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
        <BrowseView isLoading={state.isLoading} products={state.products} requestProducts={request_products}/>
      </React.Fragment>
    );
}

export default BrowseComponent;