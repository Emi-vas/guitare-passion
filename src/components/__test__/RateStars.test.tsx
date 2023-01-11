import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import RateStars from "../RateStars";

interface Props {
    rate: number
}

const MockRateStars = ({rate}: Props) => {
    return (
        <Provider store={store}>
            <RateStars rate={rate} />
        </Provider>
    )
}

describe('RateStars component', () => {
    test('full stars', () => {
        render(<MockRateStars rate={3} />)
        const stars = screen.getAllByTestId("star")
        expect(stars.length).toBe(5)
    })
    test('half stars', () => {
        render(<MockRateStars rate={3.5} />)
        const stars = screen.getAllByTestId("star")
        expect(stars.length).toBe(5)
    })
    test('empty stars', () => {
        render(<MockRateStars rate={0} />)
        const stars = screen.getAllByTestId("star")
        expect(stars.length).toBe(5)
    })
})