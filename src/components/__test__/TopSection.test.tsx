import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TopSection from "../TopSection";

interface Props {
    title: string
}

const MockTopSection = ({title}: Props) => {
    return(
        <BrowserRouter>
            <TopSection title={title} />
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