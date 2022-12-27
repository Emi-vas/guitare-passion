import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCart/shoppingCart.reducer";

const rootReducer = combineReducers({
    cart: shoppingCartReducer
})

export default rootReducer