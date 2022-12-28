import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Cart, Guitar, GuitarInCart } from '../assets/types';

/* 
    Get an article and return the qte if is in cart.
    if is not in cart, return false
*/

const useIsInCart = (articleData: Guitar) => {
    const cart = useSelector((state: Cart) => state.cart.cart)
    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        let inCartTemp: boolean | number = false
        if(!cart) {
            return
        }
        cart.map((c: GuitarInCart) => c.id == articleData.id ? inCartTemp = c.qte : false)
        setIsInCart(inCartTemp)
    },[cart])

    return isInCart ;
};

export default useIsInCart;