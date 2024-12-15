import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Renders the navigation bar", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );

    const navElement = screen.getByText("Reservations"); // Update text as per your Navbar
    expect(navElement).toBeInTheDocument();
});
