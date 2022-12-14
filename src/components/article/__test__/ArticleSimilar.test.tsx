import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Guitar } from "../../../assets/types";
import ArticleSimilar from "../ArticleSimilar";

const aGuitar = {
    id: 1,
    name: "GuitarArticleSimilar",
    price: 300,
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
    data: Guitar[]
    articleRef: Guitar
}

const MockArticleSimilar = ({data, articleRef}: Props) => {
    return(
        <BrowserRouter>
            <ArticleSimilar data={data} articleRef={articleRef}/>
        </BrowserRouter>
    )
}

describe("ArticleSimilar testing", () => {
    test("Display 3 articles when they match with style and price", () => {
        const guitarRef = aGuitar
        const data = [
            {
                ...aGuitar,
                id: 2,
                price: 400,
            },
            {
                ...aGuitar,
                id: 3,
                price: 400,
            },
            {
                ...aGuitar,
                id: 4,
                price: 400,
            },
        ]

        render(<MockArticleSimilar data={data} articleRef={guitarRef} />)

        const ArticleSimilarTitle = screen.getAllByText(/GuitarArticleSimilar/i)
        expect(ArticleSimilarTitle.length).toBe(3)
    })
    test("Display ONLY 3 articles when they match with style and price", () => {
        const guitarRef = aGuitar
        const data = [
            {
                ...aGuitar,
                id: 2,
                price: 400,
            },
            {
                ...aGuitar,
                id: 3,
                price: 400,
            },
            {
                ...aGuitar,
                id: 4,
                price: 400,
            },
            {
                ...aGuitar,
                id: 5,
                price: 400,
            },
        ]

        render(<MockArticleSimilar data={data} articleRef={guitarRef} />)

        const ArticleSimilarTitle = screen.getAllByText(/GuitarArticleSimilar/i)
        expect(ArticleSimilarTitle.length).toBe(3)
    })
    test("Display 3 articles when they match with style but not price", () => {
        const guitarRef = aGuitar
        const data = [
            {
                ...aGuitar,
                id: 2,
                price: 400,
            },
            {
                ...aGuitar,
                id: 3,
                price: 400,
            },
            {
                ...aGuitar,
                id: 4,
                price: 5400,
            },
        ]

        render(<MockArticleSimilar data={data} articleRef={guitarRef} />)

        const ArticleSimilarTitle = screen.getAllByText(/GuitarArticleSimilar/i)
        expect(ArticleSimilarTitle.length).toBe(3)
    })
    test("When it's possible display the guitar with similar price", () => {
        const guitarRef = aGuitar
        const data = [
            {
                ...aGuitar,
                id: 2,
                price: 400,
            },
            {
                ...aGuitar,
                id: 3,
                price: 400,
            },
            {
                ...aGuitar,
                id: 4,
                price: 5400,
                name: "expensiveGuitar"
            },
            {
                ...aGuitar,
                id: 4,
                price: 400,
            },
        ]

        render(<MockArticleSimilar data={data} articleRef={guitarRef} />)

        const ArticleSimilarTitle = screen.getAllByText(/GuitarArticleSimilar/i)
        expect(ArticleSimilarTitle.length).toBe(3)

        const expensiveGuitar = screen.queryByText(/expensiveGuitar/i)
        expect(expensiveGuitar).not.toBeInTheDocument()
    })

    test("Doesn't display a guitar with no style similar", () => {
        const guitarRef = aGuitar
        const data = [
            {
                ...aGuitar,
                id: 2,
                price: 400,
            },
            {
                ...aGuitar,
                id: 3,
                price: 400,
            },
            {
                ...aGuitar,
                id: 4,
                price: 5400,
                style: ["raggae"]
            },
        ]

        render(<MockArticleSimilar data={data} articleRef={guitarRef} />)

        const ArticleSimilarTitle = screen.getAllByText(/GuitarArticleSimilar/i)
        expect(ArticleSimilarTitle.length).toBe(2)
    })
})