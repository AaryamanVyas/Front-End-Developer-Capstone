import React, { useReducer } from "react";
import BookingPage from "./BookingPage";

// Function to initialize available times
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer function to update available times
const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    // For now, return the same times regardless of the date
    return initializeTimes();
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



