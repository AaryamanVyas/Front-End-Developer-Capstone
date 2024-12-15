import React, { useReducer } from "react";
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom';

// Exported for testing
export const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0]; 
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.payload);
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const navigate = useNavigate(); 
  
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div>
      <BookingPage 
        availableTimes={availableTimes} 
        setAvailableTimes={dispatch} 
        submitForm={submitForm} 
      />
    </div>
  );
};

export default Main;
