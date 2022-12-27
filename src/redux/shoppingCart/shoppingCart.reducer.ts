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
            let item = action.payload
            const inCart = state.cart.find((c: Guitar) => c.id == item.id)
            if(inCart) {
                //already in cart
                item = inCart //to have the qte
                return {
                    ...state,
                    cart: state.cart.map((c: Guitar) => 
                        c.id == item.id ? {...item, qte: item.qte + 1} : c
                    )
                }
            }
            return {
                ...state,
                cart: [...state.cart, {...item, qte: 1}]
            }
        default:
            return state
    }
}

export default shoppingCartReducer