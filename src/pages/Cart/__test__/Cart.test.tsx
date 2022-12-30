import { screen, render } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "..";
import { anArticle } from "../../../components/__test__/Header.test";
import { addToCart } from "../../../redux/shoppingCart/shoppingCart.actions";
import { createStore } from "redux";
import rootReducer from "../../../redux/rootReducer";
import userEvent from "@testing-library/user-event";

interface Props {
    withArticle ?: boolean
}

const CartMock = ({withArticle}: Props) => {
    return(
        <BrowserRouter>
            <Provider store={createStore(rootReducer)}>
                { withArticle ? <CartWithArticle /> : <Cart /> }
            </Provider>
        </BrowserRouter>
    )
}

const CartWithArticle = () => {
    const dispatch = useDispatch()
    dispatch(addToCart(anArticle))
    return(<Cart />)
}


describe("Cart page testing", ()=> {
    test("empty cart", () => {
        render(<CartMock withArticle={false} />)
        const text = screen.getByText(/votre panier est vide/i)
        expect(text).toBeInTheDocument()
    })
    test("not empty cart", () => {
        render(<CartMock withArticle={true} />)
        const text = screen.queryByText(/votre panier est vide/i)
        expect(text).not.toBeInTheDocument()
    })
    test("display title and price of article in cart", () => {
        render(<CartMock withArticle={true} />)
        const title = screen.getByText(/Harley Benton SC-1000 SBK Progressive Line/i)
        const price = screen.getByText(/198/i)
        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
    })
    test("display sum when there is more then one article & + btn", ()=> {
        render(<CartMock withArticle={true} />)
        const plusBtn = screen.getByRole('button', {name: "+"})
        userEvent.click(plusBtn)
        const titleUnitaire = screen.getByText(/tarif unitaire/i)
        expect(titleUnitaire).toBeInTheDocument()
        const sum = screen.getByText(/396/i)
        expect(sum).toBeInTheDocument()
    })
    test('remove an article and clear cart with - btn', () => {
        render(<CartMock withArticle={true} />)
        const lessBtn = screen.getByRole("button", {name: '-'})
        userEvent.click(lessBtn)
        const text = screen.getByText(/votre panier est vide/i)
        expect(text).toBeInTheDocument()
    })
})