import { isTelFct } from "../isTel";
import { resizeTo } from 'window-resizeto'

describe('isTel testing', () => {
    test('return true when it s tel', () => {
        resizeTo(window, 400, 400)
        const fct = isTelFct()
        expect(fct).toBe(true)
    })
    test('return false when it s desktop', () => {
        resizeTo(window, 1920, 1080)
        const fct = isTelFct()
        expect(fct).toBe(false)
    })
}) 