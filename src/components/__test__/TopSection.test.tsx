import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import TopSection from "../TopSection";
import store from "../../redux/store";

interface Props {
    title: string
}

const MockTopSection = ({title}: Props) => {
    return(
        <BrowserRouter>
            <Provider store={store}>
            <TopSection title={title} />
            </Provider>
        </BrowserRouter>
    )
}

describe('TopSection testing', () => {
    test('render title', () => {
        render(<MockTopSection title="Titre de la page" />)
        const titre = screen.getByText(/Titre de la page/i)
        expect(titre).toBeInTheDocument()
    })
})