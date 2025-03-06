import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import PokemonCard from '../PokemonCard/PokemonCard.jsx';

// Mock the fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: 'pikachu',
        sprites: {
          other: {
            showdown: {
              front_default: 'https://example.com/pikachu.png'
            }
          }
        }
      }),
  })
);

describe('PokemonCard Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PokemonCard data={{ pokemon: { url: 'https://pokeapi.co/api/v2/pokemon/pikachu' } }} />
      </BrowserRouter>
    );
  });

  test("Displays the Pokemon name and image after fetch", async () => {
    await waitFor(() => {
    expect(screen.getByRole('img')).toBeInTheDocument();
    });

  });

  test("Navigates to Pokemon details when clicked", async () => {
    await waitFor(() => expect(screen.getByText(/pikachu/i)).toBeInTheDocument());

    const card = screen.getByText(/pikachu/i);
    fireEvent.click(card);

    expect(window.location.pathname).toBe('/pokemonDetails/pikachu');
  });
});