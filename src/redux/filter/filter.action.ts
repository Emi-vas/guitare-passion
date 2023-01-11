import * as actionType from "./filter.types"

export const setFilterList = (list: string[]) => {
    return {
        type: actionType.SET_FILTER_LIST,
        payload: list
    }
}