import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import Battle from '../Battle/Battle.jsx'

describe('Battle', () => {

    beforeEach(() => {
      render(
        <BrowserRouter>
          <Battle />
        </BrowserRouter>
      );
    });

    test("Renders the Battle and checks the button text", () => {
      expect(screen.getByText('Battle')).toBeInTheDocument();
    });
});