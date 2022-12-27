import * as actionType from "./shoppingCart.types"
import {Guitar} from '../../assets/types'

export const addToCart = (item: Guitar) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: item
    }
}