import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, setAvailableTimes }) => {
    return (
      <div>
        <h1>Booking Page</h1>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
      </div>
    );
};

export default BookingPage;
