/* NPM Modules */
import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react';
import { useTransition } from 'react-spring';
import { API } from 'aws-amplify';
import { useShoppingCart } from 'use-shopping-cart';
/* App Modules */
import { byIdentityOrientation, getProduct, listBrands } from '../../graphql/queries.js';
/* App Components */
import ProductDetailsView from './ProductDetailsView';

const initialState = {
  item: {},
  isLoading: true,
  error: false
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_ITEM':
      return { ...state, item: action.item, isLoading: false }
    case 'ERROR':
      return { ...state, error: true }
    default:
      return state
  }
}

const ProductInfoComponent = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [more_products, setMoreProducts] = useState([]);
  const [moreByBrand, setMoreByBrand] = useState([]);
  const { addItem } = useShoppingCart()
  const aref = useRef(null)

  const [sliderIndex, setSliderIndex] = useState(0)
  const onSliderClick = useCallback(() => setSliderIndex(n => (n + 1) % state.item.images.length), [state.item])
  const transitions = useTransition(sliderIndex, p => p, {
    from: { opacity: 0.7 },
    enter: { opacity: 1 },
    leave: { display: 'none' },
  })

  const requestProduct = async (id) => {
    try {
      console.log("requesting product item from API")
      const productData = await API.graphql({
        query: getProduct,
        variables: { productID: id }
      })
      dispatch({ type: 'SET_ITEM', item: productData.data.getProduct })
    }
    catch(err) {
      console.log(err)
    }
  }

  const requestMoreProducts = async () => {
    try {
      console.log("requesting more products from API")
      const productData = await API.graphql({
        query: byIdentityOrientation,
        variables: { identityOrientation: state.item.identityOrientation, limit: 4 }
      })
      setMoreProducts(productData.data.byIdentityOrientation.items);
    }
    catch(err) {
      console.log(err);
    }
  }

  const requestProductsByBrand = async () => {
    try {
      const productData = await API.graphql({
        query: listBrands,
        variables: { brandID: state.item.brand.brandID, limit: 4 }
      })
      console.log(productData.data.listBrands.items[0].products.items)
      setMoreByBrand(productData.data.listBrands.items[0].products.items);
    }
    catch(err) {
      console.log(err);
    }
  }

  const addProductToBag = () => {
    const product = { name: state.item.name,
      description: state.item.brand.displayName,
      sku: state.item.productID,
      price: state.item.price,
      currency: 'USD',
      image: state.item.images[0],
    }
    addItem(product)
    aref.current(`${state.item.name} from ${state.item.brand.displayName} has been added to your order`)
  }

  useEffect(() => {
    if(props.location.state === undefined) {
      requestProduct(props.match.params.productID)
    } else {
      console.log("setting item from state")
      dispatch({ type: 'SET_ITEM', item: props.location.state.item })
    }
  }, [])

  useEffect(() => {
    if(!state.isLoading) {
      requestMoreProducts()
      requestProductsByBrand()
    }
  }, [state.isLoading])

  return (   
      <ProductDetailsView 
        isLoading={state.isLoading}
        item={state.item}
        moreByBrand={moreByBrand}
        more_products={more_products}
        transitions={transitions}
        onSliderClick={onSliderClick}
        addProductToBag={addProductToBag}
        dispatch={dispatch}
        aref={aref}
      />
  );
}

export default ProductInfoComponent;

          {/* <h4 style={{display: 'block', width: '100%', margin: '0px', padding: '0px', textAlign: 'left', color: 'grey', fontWeight: '400'}}>{state.item.category}</h4>
          <h3 style={{display: 'block', width: '100%', margin: '0px 0px', padding: '0px', textAlign: 'left', color: 'white'}}>{state.item.name}</h3>
          <h4 style={{display: 'block', width: '100%', margin: '0px 0px 15px 0px', padding: '0px', textAlign: 'left', color: 'white', fontWeight: '400'}}>{state.item.productCaption}</h4> */}