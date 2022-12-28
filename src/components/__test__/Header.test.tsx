import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { resizeTo } from 'window-resizeto'
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";

const MockHeader = () => {
    return(
       <BrowserRouter>
        <Provider store={store}>
            <Header />
        </Provider>
       </BrowserRouter> 
    )
}


describe("test header", () => {
    test("render header on desktop", () => {
        render(<MockHeader />)
        const firstLink = screen.getByText(/Guitare électriques/i)
        expect(firstLink).toBeInTheDocument()
    })

    test("hidde header on tel", () => {
        resizeTo(window, 400, 400)
        render(<MockHeader />)
        const firstLink = screen.queryByText(/Guitare électriques/i)
        expect(firstLink).not.toBeInTheDocument()
    })
    test("display header on when you clic on button", () => {
        resizeTo(window, 400, 400)
        render(<MockHeader />)
        const buttonMenu = screen.getByTestId('buttonMenu')
        userEvent.click(buttonMenu)
        const firstLink = screen.getByText(/Guitare électriques/i)
        expect(firstLink).toBeInTheDocument()
    })
})