import React, { useReducer } from 'react';
import './App.css';
import BookingForm from './BookingForm';

// Step 1: Define the initial times and reducer functions
export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export const updateTimes = (state, action) => {
   switch (action.type) {
      case 'UPDATE_TIMES':
         // For now, return the initial times regardless of the action
         return initializeTimes();
      default:
         return state;
   }
};

function Main() {
   // Step 2: Use useReducer for availableTimes with initializeTimes and updateTimes
   const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

   return (
      <main className="main-content">
         <h1>Welcome to Little Lemon</h1>
         <p>Enjoy fresh, locally sourced Mediterranean dishes!</p>
         
         {/* Step 3: Pass down availableTimes and dispatch to BookingForm */}
         <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </main>
   );
}

export default Main;
