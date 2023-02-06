import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { resizeTo } from "window-resizeto";
import store from "../../redux/store";
import Aside from "../Aside";

const MockAside = () => {
    return (
        <Provider store={store}>
            <Aside 
                listFilters={[""]}
                filterStyleSelected=""
                setFilterStyleSelected={()=>{}}
                filterPrice={{min: 0, max: 0}}
                setFilterPrice={()=>{}}
                page=''
            />
        </Provider>
    )
}

const iconFilters = () => {
    //test display filter whene click on filters icon
    render(<MockAside />)
    const iconFilters = screen.getByTestId('icon-filters')
    userEvent.click(iconFilters)
    const filters = screen.getByText(/filtres/i)
    expect(filters).toBeInTheDocument()
}

describe("Aside testing responsive", ()=> {
    test("display filter on large desktop", () => {
        render(<MockAside />)
        const filters = screen.getByText(/filtres/i)
        expect(filters).toBeInTheDocument()
    })
    test('hide filters if window < 1000px', () => {
        resizeTo(window, 900, 900)
        render(<MockAside />)
        const filters = screen.queryByText(/filters/i)
        expect(filters).not.toBeInTheDocument()
    })
    test('Display filter when you click on icon filter', () => {
        iconFilters()
    })
    test('Display filter when you click on icon filter on tel', () => {
        resizeTo(window, 500, 900)
        iconFilters()
    })
})