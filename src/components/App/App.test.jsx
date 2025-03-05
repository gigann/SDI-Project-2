import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe('App', () => {

    beforeEach(() => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });

    test("Renders the App and checks the button text", () => {
      expect(screen.getByText('Home')).toBeInTheDocument();
    });
});