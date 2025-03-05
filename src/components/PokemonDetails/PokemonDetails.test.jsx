import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import PokemonDetails from '../PokemonDetails/PokemonDetails.jsx'

describe('PokemonDetails', () => {

    beforeEach(() => {
      render(
        <BrowserRouter>
          <PokemonDetails />
        </BrowserRouter>
      );
    });

    test("Renders the PokemonDetails and checks the text", () => {
      expect(screen.getByText('Pokemon Information')).toBeInTheDocument();
    });
});