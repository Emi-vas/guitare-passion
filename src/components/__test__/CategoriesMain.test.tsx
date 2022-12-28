import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CategoriesMain from "../CategoriesMain";
import store from "../../redux/store";

const data = [
    {
        id: 1,
        name: "titre1",
        price: 200,
        rate: 4.5,
        img: "1.png",
        cara: {
            polyvalence: 2,
            maneuverability: 4,
            sound: 4
        },
        style: ["metal", "hard-rock"],
        desc: "Harley Benton est une marque créée pour et distribuée par le détaillant allemand Thomann. Créée en 19971, elle propose des guitares, basses, banjos, mandolines, microphones, amplificateurs, pédales d'effet, des cordes, des médiators, des pièces détachées, etc., souvent à des prix peu élevés (qui s'expliquent en partie par une fabrication uniquement asiatique et donc très bon marché). Le succès de cette marque s'inscrit dans une tendance de fond d'amélioration de la qualité des instruments peu chers.",
        video: "https://www.youtube.com/watch?v=9rVFGZMx3cs&ab_channel=%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0%D0%94%D1%8F%D0%B4%D0%B8%D0%91%D0%B5%D0%BD%D0%B0"
    },
    {
        id: 2,
        name: "titre2",
        price: 2000,
        rate: 4.5,
        img: "1.png",
        cara: {
            polyvalence: 2,
            maneuverability: 4,
            sound: 4
        },
        style: ["rock", "hard-rock"],
        desc: "Harley Benton est une marque créée pour et distribuée par le détaillant allemand Thomann. Créée en 19971, elle propose des guitares, basses, banjos, mandolines, microphones, amplificateurs, pédales d'effet, des cordes, des médiators, des pièces détachées, etc., souvent à des prix peu élevés (qui s'expliquent en partie par une fabrication uniquement asiatique et donc très bon marché). Le succès de cette marque s'inscrit dans une tendance de fond d'amélioration de la qualité des instruments peu chers.",
        video: "https://www.youtube.com/watch?v=9rVFGZMx3cs&ab_channel=%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0%D0%94%D1%8F%D0%B4%D0%B8%D0%91%D0%B5%D0%BD%D0%B0"
    }
]

const MockCategoriesMain = () => {
  return(
    <BrowserRouter>
        <Provider store={store}>
            <CategoriesMain title="title" data={data}/>
        </Provider>
    </BrowserRouter>
  )
}

describe("CategoriesMain testind", () => {
    test('map data correctly', () => {
        render(<MockCategoriesMain />)
        const titleCard1 = screen.getByText(/titre1/i)
        expect(titleCard1).toBeInTheDocument()
        const titleCard2 = screen.getByText(/titre2/i)
        expect(titleCard2).toBeInTheDocument()  
    })

    test("integration test of filter style", () => {
        render(<MockCategoriesMain />)
        const filterMetal = screen.getByLabelText(/metal/i)
        const cardWithStyleMetal = screen.getByText(/titre1/i)
        const cardWithoutStyleMetal = screen.getByText(/titre2/i)

        userEvent.click(filterMetal)
        expect(cardWithStyleMetal).toBeInTheDocument()
        expect(cardWithoutStyleMetal).not.toBeInTheDocument()
    })
    test("button to remove filterStyles", () => {
        render(<MockCategoriesMain />)
        const filterMetal = screen.getByLabelText(/metal/i)
        
        userEvent.click(filterMetal)
        const button = screen.getByText(/tous les styles/i)
        userEvent.click(button)

        const cardWithStyleMetal = screen.getByText(/titre1/i)
        const cardWithoutStyleMetal = screen.getByText(/titre2/i)
        expect(cardWithStyleMetal).toBeInTheDocument()
        expect(cardWithoutStyleMetal).toBeInTheDocument()
    })

    test('min price filter - integration test', () => {
        render(<MockCategoriesMain />)
        const minInput = screen.getByPlaceholderText('min')
        const expensiveArticle = screen.getByText(/titre2/i)
        const lowCostArticle = screen.getByText(/titre1/i)
        
        userEvent.type(minInput, "300")
        expect(expensiveArticle).toBeInTheDocument()
        expect(lowCostArticle).not.toBeInTheDocument()
    })
    test('max price filter - integration test', () => {
        render(<MockCategoriesMain />)
        const maxInput = screen.getByPlaceholderText("max")
        const expensiveArticle = screen.getByText(/titre2/i) // 2000
        const lowcostArticle = screen.getByText(/titre1/i) //200

        fireEvent.change(maxInput, {
            target: {
                value: "1000"
            }
        })
        expect(expensiveArticle).not.toBeInTheDocument()
        expect(lowcostArticle).toBeInTheDocument() 
    })
})

