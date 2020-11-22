import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { byIdentityOrientation } from '../../../graphql/queries.js';

export default function useTopSelections() {
  const [topSelections, setTopSelections] = useState([]);

  const getTopSelections = async () => {
    if(localStorage.byIdentityOrientation && localStorage.productRequestCount < 10500) {
      setTopSelections(JSON.parse(localStorage.byIdentityOrientation))
      localStorage.productRequestCount++;
    }
    else {
      try {
        const productData = await API.graphql({
          query: byIdentityOrientation,
          variables: { identityOrientation: 'Unisex', limit: 7 }
        })
        setTopSelections(productData.data.byIdentityOrientation.items)
        localStorage.byIdentityOrientation = JSON.stringify(productData.data.byIdentityOrientation.items)
        localStorage.productRequestCount = 1;
      }
      catch(err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    getTopSelections()
  }, [])

  return { topSelections };
}