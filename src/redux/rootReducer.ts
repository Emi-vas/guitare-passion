import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCart/shoppingCart.reducer";
import { filterReducer } from "./filter/filter.reducer";

const rootReducer = combineReducers({
    cart: shoppingCartReducer,
    filterList: filterReducer
})

export default rootReducer