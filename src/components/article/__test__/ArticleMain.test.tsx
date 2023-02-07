import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ArticleMain from "../ArticleMain";
import store from "../../../redux/store";
import userEvent from "@testing-library/user-event";
import { click } from "@testing-library/user-event/dist/click";
import { BrowserRouter } from "react-router-dom";

const data = {
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
    desc: "Harley Benton est une marque créée pour et distribuée ",
    video: "https://www.youtube.com/embed/9rVFGZMx3cs"
}

const MookArticleMain = () =>  {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <ArticleMain articleData={data} title=""/>
            </Provider>
        </BrowserRouter>
    )
}

beforeEach(() => {
    render(<MookArticleMain />)
})

describe("ArticleMain Component", () => {
    test('display title of article', () => {
        const title = screen.getByText(/Harley Benton SC-1000 SBK Progressive Line/i)
        expect(title).toBeInTheDocument()
    })
    test('video of article', () => {
        const video = screen.getByTestId('video')
        expect(video).toHaveAttribute('src', 'https://www.youtube.com/embed/9rVFGZMx3cs')
    })
    test('display price', () => {
        const price = screen.getByText(/198/i)
        expect(price).toBeInTheDocument() 
    })
    test('display description', () => {
        const description = screen.getByText(/Harley Benton est une marque créée pour et distribuée/i)
        expect(description).toBeInTheDocument() 
    })
})

describe("ArticleMain bloc add to cart", ()=> {
    test('add to cart button', () => {
        const addToCartBtn = screen.getByRole('button', {name: /ajouter au panier/i})
        userEvent.click(addToCartBtn)
        const cartQte = screen.getByTestId('cart-qte')
        expect(cartQte.textContent).toBe('1')
    })
    test('+ button', () => {
        const plusBtn = screen.getByRole('button', {name: "+"})  
        userEvent.click(plusBtn)
        userEvent.click(plusBtn)
        const cartQte = screen.getByTestId('cart-qte')
        expect(cartQte.textContent).toBe('3')
    })
    test('- button', () => {
        const lessBtn = screen.getByRole('button', {name: "-"})  
        userEvent.click(lessBtn)
        userEvent.click(lessBtn)
        const cartQte = screen.getByTestId('cart-qte')
        expect(cartQte.textContent).toBe('1')
    })
    test('remove item with - button', () => {
        const lessBtn = screen.getByRole('button', {name: "-"})  
        userEvent.click(lessBtn)
        const addToCartBtn = screen.getByRole('button', {name: /ajouter au panier/i})
        expect(addToCartBtn).toBeInTheDocument()
    })
})