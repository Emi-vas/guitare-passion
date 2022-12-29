import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { resizeTo } from 'window-resizeto'
import userEvent from "@testing-library/user-event";
import { Provider, useDispatch } from "react-redux";
import store from "../../redux/store";
import { addToCart } from "../../redux/shoppingCart/shoppingCart.actions";
import { Interface } from "readline";

export const anArticle = {
    id: 1,
    name: "Harley Benton SC-1000 SBK Progressive Line",
    price: 198,
    rate: 4.5,
    img: "1.png",
    cara: {
        polyvalence: 2,
        maneuverability: 4,
        sound: 4
    },
    style: ["metal", "hard-rock"],
    desc: "Harley Benton est une marque créée pour et distribuée par le détaillant allemand Thomann. Créée en 19971, elle propose des guitares, basses, banjos, mandolines, microphones, amplificateurs, pédales d'effet, des cordes, des médiators, des pièces détachées, etc., souvent à des prix peu élevés (qui s'expliquent en partie par une fabrication uniquement asiatique et donc très bon marché). Le succès de cette marque s'inscrit dans une tendance de fond d'amélioration de la qualité des instruments peu chers.",
    video: "https://www.youtube.com/embed/9rVFGZMx3cs"
}

interface Props {
    cart ?: boolean
}

const MockHeader = ({cart} :Props) => {
    return(
       <BrowserRouter>
            <Provider store={store}>
                {cart ? <HeaderWithDispatch /> : <Header /> }
            </Provider>
       </BrowserRouter> 
    )
}

const HeaderWithDispatch = () => {
    const dispatch = useDispatch()
    dispatch(addToCart(anArticle))
    return(
        <Header />
    )
}


describe("test header", () => {
    test("render header on desktop", () => {
        render(<MockHeader />)
        const firstLink = screen.getByText(/Guitare électriques/i)
        expect(firstLink).toBeInTheDocument()
    })

    test('cart on header with no article in store', ()=>{
        render(<MockHeader />)
        const cartQte = screen.getByTestId('cart-qte')
        expect(cartQte.innerHTML).toBe("0")
    })
    test('cart on header with article in store', ()=>{
        render(<MockHeader cart={true} />)
        const cartQte = screen.getByTestId('cart-qte')
        expect(cartQte.innerHTML).toBe("1")
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