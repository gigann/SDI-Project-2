import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import TypeDetails from '../TypeDetails/TypeDetails.jsx'

describe('TypeDetails', () => {

    beforeEach(() => {
      render(
        <MemoryRouter>
          <TypeDetails />
        </MemoryRouter>
      );
    });

    test("Renders the TypeDetails and checks the title text", () => {
      expect(screen.getByText('TYPE EFFECTIVENESS')).toBeInTheDocument();
    });
});