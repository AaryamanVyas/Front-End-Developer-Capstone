import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, setAvailableTimes, submitForm }) => {
  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm 
        availableTimes={availableTimes} 
        setAvailableTimes={setAvailableTimes} 
        submitForm={submitForm} // ✅ Pass submitForm down to BookingForm
      />
    </div>
  );
};

export default BookingPage;
