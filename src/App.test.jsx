// src/App.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Renders the App and increments on button click", () => {
    render(<App />);

    // Check if the initial count is 0
    expect(screen.getByText("count is 0")).toBeInTheDocument();

    // Click the increment button
    fireEvent.click(screen.getByText("count is 0"));

    // Check if the count is now 1
    expect(screen.getByText("count is 1")).toBeInTheDocument();
});