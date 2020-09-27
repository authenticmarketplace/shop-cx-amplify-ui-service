/* NPM Modules */
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
/* App Modules */
import { byDesignation, byIdentityOrientation, listProducts } from '../../graphql/queries.js';
/* App Components */
import ForYouView from './ForYouView.js';

const ForYouComponent = () => {
  const [trending, setTrending] = useState([]);
  const [deals, setDeals] = useState([]);

  const getTrending = async () => {
    if(localStorage.productRequestCount && localStorage.productRequestCount < 10500) {
      setTrending(JSON.parse(localStorage.byIdentityOrientation))
      localStorage.productRequestCount++;
      console.log("Set Products from Local Storage - Product Request Count is: " + localStorage.productRequestCount)
    }
    else {
      try {
        const productData = await API.graphql({
          query: byIdentityOrientation,
          variables: { identityOrientation: 'Unisex', limit: 8 }
        })
        setTrending(productData.data.byIdentityOrientation.items)
        localStorage.byIdentityOrientation = JSON.stringify(productData.data.byIdentityOrientation.items)
        localStorage.productRequestCount = 1;
      }
      catch(err) {
        console.log(err)
      }
    }
  }

  const getDeals = async () => {
    if(localStorage.productRequestCount && localStorage.productRequestCount < 10500) {
      setDeals(JSON.parse(localStorage.byDesignation))
      localStorage.productRequestCount++;
      console.log("Set Products from Local Storage - Product Request Count is: " + localStorage.productRequestCount)
    }
    else {
      try {
        const productData = await API.graphql({
          query: byDesignation,
          variables: { designation: 'Black-owned', limit: 8 }
        })
        console.log(productData)
        setDeals(productData.data.byDesignation.items)
        localStorage.byDesignation = JSON.stringify(productData.data.byDesignation.items)
        localStorage.productRequestCount = 1;
      }
      catch(err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    getTrending()
    getDeals()
  }, [])
    return (
        <ForYouView trending={trending} deals={deals} />
    );
}

export default ForYouComponent;