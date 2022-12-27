import { render, screen } from "@testing-library/react";
import Electriques from "..";
import axios from "axios"
import { dataElectrics } from "../../../assets/electric";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { act } from "react-dom/test-utils";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

const MockElectriques = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Electriques />
            </BrowserRouter>
        </Provider>
    )
}

beforeEach(() => {
    mockedAxios.get.mockResolvedValue(res)

})

describe("testing page 'Electriques", () => {
/*     test("display loader when there is no data", async() => {
        await act( async () => render(<MockElectriques/>));
        const loader = await screen.findByTestId("loader")
        expect(loader).toBeInTheDocument()
    }) */
    test("display page when there is data", async() => {
        await act( async () => render(<MockElectriques/>));
        const title = await screen.findByText(/Harley Benton/i)
        const loader = screen.queryByTestId(/loader/i)
        expect(title).toBeInTheDocument() 
        expect(loader).not.toBeInTheDocument()
    })
})
