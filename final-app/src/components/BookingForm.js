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
    if (!date) newError.date = "Date is required";
    if (!time) newError.time = "Time is required";
    if (guests < 1 || guests > 10) newError.guests = "Guests must be between 1 and 10";
    if (!occasion) newError.occasion = "Please select an occasion";
    setError(newError);
    return Object.keys(newError).length === 0;
  };

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

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setAvailableTimes({ type: "UPDATE_TIMES", payload: selectedDate });
    validate();
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
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      aria-labelledby="booking-form-title"
    >
      <fieldset>
        <legend id="booking-form-title">Make a Reservation</legend>

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          onBlur={() => handleBlur("date")}
          aria-describedby="date-error"
          aria-invalid={errors.date ? "true" : "false"}
        />
        {errors.date && (
          <span id="date-error" style={{ color: "red" }} aria-live="assertive">
            {errors.date}
          </span>
        )}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            validate();
          }}
          onBlur={() => handleBlur("time")}
          aria-describedby="time-error"
          aria-invalid={errors.time ? "true" : "false"}
        >
          <option value="">Select Time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.time && (
          <span id="time-error" style={{ color: "red" }} aria-live="assertive">
            {errors.time}
          </span>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => {
            setGuests(Number(e.target.value));
            validate();
          }}
          onBlur={() => handleBlur("guests")}
          aria-describedby="guests-error"
          aria-invalid={errors.guests ? "true" : "false"}
        />
        {errors.guests && (
          <span id="guests-error" style={{ color: "red" }} aria-live="assertive">
            {errors.guests}
          </span>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            validate();
          }}
          onBlur={() => handleBlur("occasion")}
          aria-describedby="occasion-error"
          aria-invalid={errors.occasion ? "true" : "false"}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && (
          <span id="occasion-error" style={{ color: "red" }} aria-live="assertive">
            {errors.occasion}
          </span>
        )}

        <button type="submit" aria-label="Make Your Reservation"> 
          Make Your Reservation
        </button>
      </fieldset>
    </form>
  );
};

export default BookingForm;
