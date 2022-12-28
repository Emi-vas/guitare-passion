import { Guitar, GuitarInCart } from "../../assets/types"
import * as actionTypes from "./shoppingCart.types"

type shoppingCart = {
    cart: [] | GuitarInCart[]
}

const shoppingCartInitialState: shoppingCart = {
    cart: []
}

const shoppingCartReducer = (state: shoppingCart = shoppingCartInitialState, action: any) => {
    let item: any
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            item = action.payload
            const inCart = state.cart.find((c: GuitarInCart) => c.id == item.id)
            if(inCart) {
                //already in cart
                item = inCart //to have the qte
                return {
                    ...state,
                    cart: state.cart.map((c: GuitarInCart) => 
                        c.id == item.id ? {...item, qte: item.qte + 1} : c
                    )
                }
            }
            return {
                ...state,
                cart: [...state.cart, {...item, qte: 1}]
            }
        case actionTypes.REMOVE_TO_CART:
            item = state.cart.find((c: GuitarInCart) => c.id == action.payload.id)
            if(item.qte > 1) {
                return {
                    ...state,
                    cart: state.cart.map((c: GuitarInCart) => 
                        c.id == action.payload.id ? {...c, qte: c.qte - 1} : c
                    )
                }
             }
             return {
                ...state,
                cart: state.cart.filter((c: GuitarInCart) => c.id != item.id)
             }
        default:
            return state
    }
}

export default shoppingCartReducer