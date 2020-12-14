import { useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

export default function useShoppingBag() {
    const { cartCount, cartDetails, totalPrice } = useShoppingCart()
    const [itemList, setItemList] = useState([])

    const cartItems = (cartDetails) => {
        const cart = []
        for (const sku in cartDetails) {
            const cartEntry = cartDetails[sku]
            cart.push(cartEntry)
        }
        setItemList(cart)
    }

    useEffect(() => {
        cartItems(cartDetails)
    }, [cartDetails])

    return { cartCount, itemList, totalPrice };
}