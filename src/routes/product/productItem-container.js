import React from 'react';
import ProductItemView from './productItem-view';
import { useProductItem } from './hooks'
import { addProductToBag } from './utils'

const ProductItemContainer = (props) => {
  const productRoute = { location: props.location, productID: props.match.params.productID };

  const { 
    state, 
    moreByBrand, 
    more_products,
    transitions,
    onSliderClick,
    dispatch,
    ref,
    addItem
  } = useProductItem(productRoute)

  const addProduct = () => {
    addProductToBag(state.item, addItem, ref)
  }

  return (   
      <ProductItemView 
        isLoading={state.isLoading}
        item={state.item}
        moreByBrand={moreByBrand}
        more_products={more_products}
        transitions={transitions}
        onSliderClick={onSliderClick}
        addProductToBag={addProductToBag}
        dispatch={dispatch}
        aref={ref}
        addProduct={addProduct}
      />
  );
}

export default ProductItemContainer;