import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("Renders the BookingForm heading", () => {
    const availableTimes = ["17:00", "18:00", "19:00"];
    const setAvailableTimes = jest.fn();
    const submitForm = jest.fn();

    // Render the component
    act(() => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          submitForm={submitForm}
        />
      );
    });

    // Check if the 'Choose date' label is rendered
    const labelElements = screen.getAllByText("Choose date");
    expect(labelElements[0]).toBeInTheDocument(); // Ensure at least one exists
  });

  test("validates date field when empty", () => {
    render(<BookingForm availableTimes={[]} setAvailableTimes={() => {}} submitForm={() => {}} />);
    
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    fireEvent.click(submitButton);
    
    const dateError = screen.getByText(/date is required/i);
    expect(dateError).toBeInTheDocument();
  });

  test("validates time field when empty", () => {
    render(<BookingForm availableTimes={["18:00", "19:00"]} setAvailableTimes={() => {}} submitForm={() => {}} />);
    
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2024-12-25" } });

    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    fireEvent.click(submitButton);
    
    const timeError = screen.getByText(/time is required/i);
    expect(timeError).toBeInTheDocument();
  });

  test("validates guests field", () => {
    render(<BookingForm availableTimes={["18:00", "19:00"]} setAvailableTimes={() => {}} submitForm={() => {}} />);
    
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2024-12-25" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });

    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "15" } });

    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    fireEvent.click(submitButton);

    const guestsError = screen.getByText(/guests must be between 1 and 10/i);
    expect(guestsError).toBeInTheDocument();
  });

  test("validates valid form submission", () => {
    render(<BookingForm availableTimes={["18:00", "19:00"]} setAvailableTimes={() => {}} submitForm={() => {}} />);
    
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2024-12-25" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });

    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    fireEvent.click(submitButton);

    const errors = screen.queryAllByRole("alert");
    expect(errors.length).toBe(0);
  });
});
