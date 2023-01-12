import { render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { anArticle } from "../../components/__test__/Header.test";
import { useEffect } from "react";
import { addToCart } from "../../redux/shoppingCart/shoppingCart.actions";
import useIsInCart from "../useIsInCart";
import { createStore } from "redux";
import rootReducer from "../../redux/rootReducer";

interface Props {
    number: number
}

const App = ({ number }: Props) => {
    return (
        <Provider store={createStore(rootReducer)}>
            <MockComponent number={number} />
        </Provider>
    )
}

const MockComponent = ({number}: Props) => {
    const dispatch = useDispatch()
    const res = useIsInCart(anArticle)

    useEffect(() => {
        if(!number) {
            return
        }
        for(let i = 0; i < number; i++){
            dispatch(addToCart(anArticle))
        }
    },[])

    return (
        <div>
            <h1>{res}</h1>
        </div>
    )
}


describe('testing hook useInCart', () => {
    test('return false when article is not un store', ()=>{
        render(<App />)
        const res = screen.getByRole('heading')
        expect(res.textContent).toBe("")
    })
    test('number of article in store', ()=>{
        render(<App number={2} />)
        const res = screen.getByRole('heading')
        expect(res.textContent).toBe("2")
    })
})