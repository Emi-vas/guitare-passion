import { screen, render } from "@testing-library/react";
import ArticleCara from "../ArticleCara";

const dataCara = {
    sound: 3,
    maneuverability: 4,
    polyvalence: 5
}

const dataStyles = ["rock", "blues"]

beforeEach(() => {
    render(<ArticleCara dataCara={dataCara} dataStyles={dataStyles}/>)
})

describe("ArticleCara testing", () => {
    test('display styles', () => {
        const firstStyle = screen.getByText(/rock/i)
        expect(firstStyle).toBeInTheDocument()
        const secondStyle = screen.getByText(/blues/i)
        expect(secondStyle).toBeInTheDocument()
    })
})