import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Guitar, GuitarInCart, Store } from '../assets/types';

/* 
    Get an article and return the qte if is in cart.
    if is not in cart, return false
*/

const useIsInCart = (articleData: Guitar) => {
    const cart = useSelector((store: Store) => store.cart.cart)
    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        let inCartTemp: boolean | number = false
        if(!cart) {
            return
        }
        cart.map((c: GuitarInCart) => c.id == articleData.id ? inCartTemp = c.qte : false)
        setIsInCart(inCartTemp)
    },[cart, articleData])

    return isInCart ;
};

export default useIsInCart;