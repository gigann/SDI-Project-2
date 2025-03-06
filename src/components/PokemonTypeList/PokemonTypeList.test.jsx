import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import PokemonTypeList from '../PokemonTypeList/PokemonTypeList.jsx'

describe('PokemonTypeList', () => {

    beforeEach(() => {
      render(
        <MemoryRouter>
          <PokemonTypeList />
        </MemoryRouter>
      );
    });

    test("Renders the PokemonTypeList and checks the title text", () => {
      expect(screen.getByText('TYPE POKEMON')).toBeInTheDocument();
    });
});