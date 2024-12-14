import React, { useReducer, useEffect } from "react";
import BookingPage from "./BookingPage";
import { fetchAPI } from './api'; // Import the local API functions

// Function to initialize available times
const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  return fetchAPI(today); // Call the API for today's available times
};

// Reducer function to update available times
const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.payload); // Call the API for the new date's available times
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <BookingPage availableTimes={availableTimes} setAvailableTimes={dispatch} />
    </div>
  );
};

export default Main;
