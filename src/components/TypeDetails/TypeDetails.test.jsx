import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import TypeDetails from '../TypeDetails/TypeDetails.jsx'

describe('TypeDetails', () => {

    beforeEach(() => {
      render(
        <BrowserRouter>
          <TypeDetails />
        </BrowserRouter>
      );
    });

    test("Renders the TypeDetails and checks the button text", () => {
      expect(screen.getByText('TypeDetails')).toBeInTheDocument();
    });
});