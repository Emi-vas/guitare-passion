import * as actionType from "./filter.types"


export const filterReducer = (state= [], action: any ) => {
    switch (action.type) {
        case actionType.SET_FILTER_LIST:
            return action.payload
        default:
            return state
    }
}