import { render, screen } from "@testing-library/react";
import RateStars from "../RateStars";

describe('RateStars component', () => {
    test('full stars', () => {
        render(<RateStars rate={3} />)
        const stars = screen.getAllByTestId("star")
        expect(stars.length).toBe(5)
    })
    test('half stars', () => {
        render(<RateStars rate={3.5} />)
        const stars = screen.getAllByTestId("star")
        expect(stars.length).toBe(5)
    })
    test('empty stars', () => {
        render(<RateStars rate={0} />)
        const stars = screen.getAllByTestId("star")
        expect(stars.length).toBe(5)
    })
})