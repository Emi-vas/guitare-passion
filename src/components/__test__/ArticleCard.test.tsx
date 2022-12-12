import ArticleCard from "../ArticleCard";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

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
    desc: "Harley Benton est une marque créée pour et distribuée par le détaillant allemand Thomann. Créée en 19971, elle propose des guitares, basses, banjos, mandolines, microphones, amplificateurs, pédales d'effet, des cordes, des médiators, des pièces détachées, etc., souvent à des prix peu élevés (qui s'expliquent en partie par une fabrication uniquement asiatique et donc très bon marché). Le succès de cette marque s'inscrit dans une tendance de fond d'amélioration de la qualité des instruments peu chers.",
    video: "https://www.youtube.com/watch?v=9rVFGZMx3cs&ab_channel=%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0%D0%94%D1%8F%D0%B4%D0%B8%D0%91%D0%B5%D0%BD%D0%B0"
}

const MockArticleCard = () => {
    return (
        <BrowserRouter>
            <ArticleCard article={data} />
        </BrowserRouter>
    )
}

beforeEach(() => {
    render(<MockArticleCard />)
})

describe('ArticleCard composent', () => {
    test('display title product', () => {
        const title = screen.getByText(/Harley Benton SC-1000 SBK Progressive Line/i)
        expect(title).toBeInTheDocument()
    })
    test("display price", () => {
        const price = screen.getByText(/198/i)
        expect(price).toBeInTheDocument()
    })
    test("image in the doc", () => {
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('src', '/images/articles/1.png')
        expect(img).toHaveAttribute('alt', 'Harley Benton SC-1000 SBK Progressive Line')
    })
})