import React, { useReducer, useEffect } from "react";
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from './api'; // Import submitAPI function
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0]; 
    return fetchAPI(today);
  };
  
  const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
      return fetchAPI(action.payload);
    }
    return state;
  };
  
  const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate(); 
  
    // ✅ Make sure submitForm is defined properly
    const submitForm = (formData) => {
      const success = submitAPI(formData);
      if (success) {
        navigate('/booking-confirmed'); 
      } else {
        alert('Booking failed. Please try again.');
      }
    };
  
    // ✅ Pass submitForm to BookingPage
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