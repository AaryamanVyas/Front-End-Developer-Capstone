// BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
    const availableTimes = ["17:00", "18:00", "19:00"]; // Mock available times
    const setAvailableTimes = jest.fn(); // Mock function
    const submitForm = jest.fn(); // Mock function

    render(
        <BookingForm
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            submitForm={submitForm}
        />
    );

    // Check for the presence of a static label
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});
