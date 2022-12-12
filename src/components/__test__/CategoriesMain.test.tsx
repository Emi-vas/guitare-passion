import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CategoriesMain from "../CategoriesMain";

const data = [
    {
        id: 1,
        name: "titre1",
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
        video: "https://www.youtube.com/watch?v=9rVFGZMx3cs&ab_channel=%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0%D0%94%D1%8F%D0%B4%D0%B8%D0%91%D0%B5%D0%BD%D0%B0"
    },
    {
        id: 2,
        name: "titre2",
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
        video: "https://www.youtube.com/watch?v=9rVFGZMx3cs&ab_channel=%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0%D0%94%D1%8F%D0%B4%D0%B8%D0%91%D0%B5%D0%BD%D0%B0"
    }
]

const MockCategoriesMain = () => {
  return(
    <BrowserRouter>
        <CategoriesMain title="title" data={data}/>
    </BrowserRouter>
  )
}

test('map data correctly', () => {
    render(<MockCategoriesMain />)
    const titleCard1 = screen.getByText(/titre1/i)
    expect(titleCard1).toBeInTheDocument()
    const titleCard2 = screen.getByText(/titre2/i)
    expect(titleCard2).toBeInTheDocument()  
})

