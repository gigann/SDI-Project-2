import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import PokemonCard from '../PokemonCard/PokemonCard.jsx'

describe('PokemonCard', () => {

    beforeEach(() => {
      render(
        <BrowserRouter>
          <PokemonCard />
        </BrowserRouter>
      );
    });

    test("Renders the PokemonCard and checks the button text", () => {
      expect(screen.getByText('Reset')).toBeInTheDocument();
    });
});