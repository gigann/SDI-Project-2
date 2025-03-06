import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import PokemonTypeCard from '../PokemonTypeCard/PokemonTypeCard.jsx'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10' },
        ],
      }),
  })
);

describe('PokemonTypeCard', () => {

    beforeEach(() => {
      render(
        <MemoryRouter>
          <PokemonTypeCard />
        </MemoryRouter>
      );
    });

    test("Displays the type image after fetch", async () => {
      await waitFor(() => {
      expect(screen.getByRole('img')).toBeInTheDocument();
      });

    });

    test("Ensures 'Pokemon' button are displayed inside type cards", async () => {
      await waitFor(() => {
        const buttons = screen.getAllByRole('button', { name: /pokemon/i }); // Find buttons labeled 'Pokemon'
        expect(buttons.length).toBe(1);
      });
    });

    test("Ensures 'Details' buttons are displayed inside type cards", async () => {
      await waitFor(() => {
        const buttons = screen.getAllByRole('button', { name: /details/i }); // Find buttons labeled 'Details'
        expect(buttons.length).toBe(1);
      });
    });
 });