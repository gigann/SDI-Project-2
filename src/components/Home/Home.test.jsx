import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import Home from '../Home/Home.jsx'

describe('Home', () => {

    beforeEach(() => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });

    test("Renders the Home and checks the button text", () => {
      expect(screen.getByText('Reset')).toBeInTheDocument();
    });
});