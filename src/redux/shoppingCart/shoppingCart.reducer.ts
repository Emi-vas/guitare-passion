import { Guitar } from "../../assets/types"
import * as actionTypes from "./shoppingCart.types"

type shoppingCart = {
    cart: [] | Guitar[]
}


const shoppingCartInitialState: shoppingCart = {
    cart: []
}


const shoppingCartReducer = (state: shoppingCart = shoppingCartInitialState, action: any) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}

export default shoppingCartReducer