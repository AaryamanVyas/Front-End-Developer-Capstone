import React, { useState } from 'react';
import './App.css';
import BookingForm from './BookingForm';

function Main() {
   // State for available times
   const [availableTimes, setAvailableTimes] = useState([
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
   ]);

   return (
      <main className="main-content">
         <h1>Welcome to Little Lemon</h1>
         <p>Enjoy fresh, locally sourced Mediterranean dishes!</p>
         
         {/* Render BookingForm and pass availableTimes as a prop */}
         <BookingForm availableTimes={availableTimes} />
      </main>
   );
}

export default Main;
