import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { act } from "react"; // Use act from react instead of react-dom/test-utils

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
