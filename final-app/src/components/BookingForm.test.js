import { render, screen } from "@testing-library/react";
import { act } from "react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
    const availableTimes = ["17:00", "18:00", "19:00"]; // Mock available times
    const setAvailableTimes = jest.fn(); // Mock function
    const submitForm = jest.fn(); // Mock function

    act(() => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                submitForm={submitForm}
            />
        );
    });

    // Use getAllByText to handle multiple elements with the same text
    const labelElements = screen.getAllByText("Choose date");
    expect(labelElements[0]).toBeInTheDocument(); // Ensure at least one exists
});
