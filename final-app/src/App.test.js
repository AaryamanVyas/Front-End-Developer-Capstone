// App.test.js
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Renders the navigation bar", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );

    const navElement = screen.getByText("Reservations"); // Updated to match actual text
    expect(navElement).toBeInTheDocument();
});
