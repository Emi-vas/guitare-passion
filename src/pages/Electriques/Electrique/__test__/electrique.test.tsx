import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter, createMemoryRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import Electrique from "..";
import store from "../../../../redux/store";
import axios from "axios"

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;



const MockElectrique = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <Electrique />
            </Provider>
        </BrowserRouter>
    )
}

const res = {
    data: [
        {
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
    ]
}

beforeEach(() => {
    mockedAxios.get.mockResolvedValue(res)
})

describe('integration test Electric page', () => {
    test('add 1 on header cart when user click on add to cart ', async() => {
/*         const route = "guitares-electriques/1"

        await act( async () => <MockElectrique />);
        console.log("path name", window.location.href)
        const addToCartBtn = screen.getByText(/ajouter au panier/i) */
    })
})