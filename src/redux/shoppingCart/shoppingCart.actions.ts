import * as actionType from "./shoppingCart.types"
import {Guitar, GuitarInCart} from '../../assets/types'

export const addToCart = (item: Guitar) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: item
    }
}

export const removeToCart = (item: Guitar) => {
    return {
        type: actionType.REMOVE_TO_CART,
        payload: item
    }
}