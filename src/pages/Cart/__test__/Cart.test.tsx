import { screen, render } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "..";
import { anArticle } from "../../../components/__test__/Header.test";
import { addToCart } from "../../../redux/shoppingCart/shoppingCart.actions";
import { createStore } from "redux";
import rootReducer from "../../../redux/rootReducer";

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
})