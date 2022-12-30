import { screen, render } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "..";
import { anArticle } from "../../../components/__test__/Header.test";
import { addToCart } from "../../../redux/shoppingCart/shoppingCart.actions";
import { createStore } from "redux";
import rootReducer from "../../../redux/rootReducer";
import userEvent from "@testing-library/user-event";
import { Guitar } from "../../../assets/types";
import { useEffect } from "react";

const anArticle2 = {
    id: 2,
    name: "Harley Benton SC-450Plus LD Vintage Series",
    price: 198,
    rate: 4.5,
    img: "4.png",
    cara: {
        polyvalence: 5,
        maneuverability: 4,
        sound: 4
    },
    style: ["rock", "hard-rock", "blues", "pop", "jazz"],
    desc: "Harley Benton est une marque créée pour et distribuée par le détaillant allemand Thomann. Créée en 19971, elle propose des guitares, basses, banjos, mandolines, microphones, amplificateurs, pédales d'effet, des cordes, des médiators, des pièces détachées, etc., souvent à des prix peu élevés (qui s'expliquent en partie par une fabrication uniquement asiatique et donc très bon marché). Le succès de cette marque s'inscrit dans une tendance de fond d'amélioration de la qualité des instruments peu chers.",
    video: "https://www.youtube.com/embed/nGCVtbrzzio"
}

interface Props {
    withArticle : Guitar[] | false
}

const CartMock = ({withArticle}: Props) => {
    return(
        <BrowserRouter>
            <Provider store={createStore(rootReducer)}>
                { withArticle ? <CartWithArticle articleList={withArticle} /> : <Cart /> }
            </Provider>
        </BrowserRouter>
    )
}

interface CartWithArticleProps {
    articleList: Guitar[]
}

const CartWithArticle = ({articleList}: CartWithArticleProps) => {
    const dispatch = useDispatch()

    useEffect(() => {
        articleList.map((a: any) => dispatch(addToCart(a)))
    },[])

    return(<Cart />)
}


describe("Cart page testing", ()=> {
    test("empty cart", () => {
        render(<CartMock withArticle={false} />)
        const text = screen.getByText(/votre panier est vide/i)
        expect(text).toBeInTheDocument()
    })
    test("not empty cart", () => {
        render(<CartMock withArticle={[anArticle]} />)
        const text = screen.queryByText(/votre panier est vide/i)
        expect(text).not.toBeInTheDocument()
    })
    test("display title and price of article in cart", () => {
        render(<CartMock withArticle={[anArticle]} />)
        const title = screen.getByText(/Harley Benton SC-1000 SBK Progressive Line/i)
        const price = screen.getAllByText(/198/i)
        expect(title).toBeInTheDocument()
        expect(price.length).toBe(2)
    })
    test("display sum when there is more then one article & + btn", ()=> {
        render(<CartMock withArticle={[anArticle]} />)
        const plusBtn = screen.getByRole('button', {name: "+"})
        userEvent.click(plusBtn)
        const titleUnitaire = screen.getByText(/tarif unitaire/i)
        expect(titleUnitaire).toBeInTheDocument()
        const sum = screen.getAllByText(/396/i)
        expect(sum.length).toBe(2)
    })
    test('remove an article and clear cart with - btn', () => {
        render(<CartMock withArticle={[anArticle]} />)
        const lessBtn = screen.getByRole("button", {name: '-'})
        userEvent.click(lessBtn)
        const text = screen.getByText(/votre panier est vide/i)
        expect(text).toBeInTheDocument()
    })
    test("total with multiple articles", () => {
        render(<CartMock withArticle={[anArticle, anArticle2, anArticle2]} />)
        const totalTitle = screen.getByRole("heading", {name: /total/i})
        expect(totalTitle).toBeInTheDocument()
        const totalValue = screen.getByText("594 €")
        expect(totalValue).toBeInTheDocument()
    })
})