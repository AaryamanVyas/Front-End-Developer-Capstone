// Main.js
import React, { useReducer } from 'react';
import './App.css';
import BookingForm from './BookingForm';

// Define fetchData within Main.js
const fetchData = (date) => {
   // Mock available times for the provided date
   // In a real app, replace this with an API call
   const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
   return times;
};

// Initialize today's available times using fetchData
export const initializeTimes = () => {
   const today = new Date();
   return fetchData(today);  // Get available times for today
};

// Reducer to update available times based on selected date
export const updateTimes = (state, action) => {
   switch (action.type) {
      case 'UPDATE_TIMES':
         const selectedDate = new Date(action.payload.date); // Create a Date object from the selected date
         return fetchData(selectedDate); // Fetch available times for the selected date
      default:
         return state;
   }
};

function Main() {
   // Set up useReducer with initializeTimes and updateTimes
   const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

   return (
      <main className="main-content">
         <h1>Welcome to Little Lemon</h1>
         <p>Enjoy fresh, locally sourced Mediterranean dishes!</p>
         
         {/* Pass availableTimes and dispatch to BookingForm */}
         <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </main>
   );
}

export default Main;
