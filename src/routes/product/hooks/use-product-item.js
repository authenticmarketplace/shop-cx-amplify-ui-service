import { useState, useEffect, useReducer, useCallback, useRef } from 'react';
import { useTransition } from 'react-spring';
import { useShoppingCart } from 'use-shopping-cart';
import { requestProduct, requestMoreProducts, requestProductsByBrand } from '../utils'

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

export default function useProductItem(productRoute) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [more_products, setMoreProducts] = useState([]);
    const [moreByBrand, setMoreByBrand] = useState([]);
    const { addItem } = useShoppingCart()
    const ref = useRef(null)

    const [sliderIndex, setSliderIndex] = useState(0)
    const onSliderClick = useCallback(() => setSliderIndex(n => (n + 1) % state.item.images.length), [state.item])
    const transitions = useTransition(sliderIndex, p => p, {
        from: { opacity: 0.7 },
        enter: { opacity: 1 },
        leave: { display: 'none' },
    })

    useEffect(() => {
        if(productRoute.location.state === undefined) {
          requestProduct(productRoute.productID, dispatch)
        } else {
          dispatch({ type: 'SET_ITEM', item: productRoute.location.state.item })
        }
    }, [productRoute.location.state, productRoute.productID])

    useEffect(() => {
        if(!state.isLoading) {
            requestMoreProducts(state.item, setMoreProducts)
            requestProductsByBrand(state.item, setMoreByBrand)
        }
    }, [state.isLoading, state.item])

    return {
        state,
        dispatch,
        more_products,
        setMoreProducts,
        moreByBrand,
        setMoreByBrand,
        addItem,
        ref,
        onSliderClick,
        transitions
    }
}