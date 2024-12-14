import React, { useState } from "react";
import { submitAPI } from './api'; // Import the local API functions

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (typeof setAvailableTimes === "function") {
      setAvailableTimes({ type: "UPDATE_TIMES", payload: selectedDate });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    const success = submitAPI(formData);
    if (success) {
      alert("Booking successful!");
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes && availableTimes.length > 0 ? (
          availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No available times
          </option>
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
