import React from 'react';
import BookingForm from './BookingForm';
const BookingPage = ({availableTimes,setAvailableTimes}) =>{
    return(
        <div>
            <h1>booking page2</h1>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </div>
    )
}
export default BookingPage;