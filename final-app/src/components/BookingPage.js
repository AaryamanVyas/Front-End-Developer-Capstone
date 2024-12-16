import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, setAvailableTimes, submitForm }) => {
  return (
    <div>
      <BookingForm 
        availableTimes={availableTimes} 
        setAvailableTimes={setAvailableTimes} 
        submitForm={submitForm} // ✅ Pass submitForm down to BookingForm
      />
    </div>
  );
};

export default BookingPage;
