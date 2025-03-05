import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react"
import Home from '../Home/Home.jsx'

describe('Home', () => {

    beforeEach(() => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });

    test("Renders the Home and checks the button text", async () => {
      expect(await screen.findByRole('button')).toBeInTheDocument();
    });
});