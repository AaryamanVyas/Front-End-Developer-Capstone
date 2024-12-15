import React, { useState } from "react";

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setError] = useState({});

  // Validation function
  const validate = () => {
    const newError = {};
    if (!date) newError.date = "date is required";
    if (!time) newError.time = "time is required";
    if (guests < 1 || guests > 10) newError.guests = "guests must be between 1 and 10";
    if (!occasion) newError.occasion = "please select an occasion";
    setError(newError);
    return Object.keys(newError).length === 0; // Returns true if no errors
  };

  // Handle field blur to remove individual error
  const handleBlur = (field) => {
    setError((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (field === "date" && date) delete newErrors.date;
      if (field === "time" && time) delete newErrors.time;
      if (field === "guests" && guests >= 1 && guests <= 10) delete newErrors.guests;
      if (field === "occasion" && occasion) delete newErrors.occasion;
      return newErrors;
    });
  };

  // Handle date change, trigger validation, and update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setAvailableTimes({ type: "UPDATE_TIMES", payload: selectedDate });
    validate(); // Revalidate form after date selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    if (validate()) {
      if (typeof submitForm === "function") {
        submitForm(formData);
      } else {
        console.error("submitForm is not a function");
      }
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
        onBlur={() => handleBlur("date")} // Trigger onBlur for date field
      />
      {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          validate(); // Validate after time change
        }}
        onBlur={() => handleBlur("time")} // Trigger onBlur for time field
      >
        <option value="">Select Time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => {
          setGuests(Number(e.target.value));
          validate(); // Validate after guests change
        }}
        onBlur={() => handleBlur("guests")} // Trigger onBlur for guests field
      />
      {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => {
          setOccasion(e.target.value);
          validate(); // Validate after occasion change
        }}
        onBlur={() => handleBlur("occasion")} // Trigger onBlur for occasion field
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && <span style={{ color: "red" }}>{errors.occasion}</span>}

      <input 
        type="submit" 
        value="Make Your reservation" 
        disabled={Object.keys(errors).length > 0} 
      />
    </form>
  );
};

export default BookingForm;
