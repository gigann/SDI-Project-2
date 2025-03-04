import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import PokemonTypeList from '../PokemonTypeList/PokemonTypeList.jsx'

describe('PokemonTypeList', () => {

    beforeEach(() => {
      render(
        <BrowserRouter>
          <PokemonTypeList />
        </BrowserRouter>
      );
    });

    test("Renders the PokemonTypeList and checks the button text", () => {
      expect(screen.getByText('PokemonTypeList')).toBeInTheDocument();
    });
});