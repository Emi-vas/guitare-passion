import { BREAKPOINTS } from "../assets/constants"

export const isTelFct = () => {
    const size = window.innerWidth
    const breakPoint = BREAKPOINTS.tel

    if(size <= breakPoint) {
        return true
    } else {
        return false
    }
}