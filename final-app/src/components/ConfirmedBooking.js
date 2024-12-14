import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Booking Confirmed! 🎉</h1>
      <p>Thank you for booking with Little Lemon. We look forward to seeing you!</p>
      <Link to="/booking">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Back to Booking Page</button>
      </Link>
    </div>
  );
};

export default ConfirmedBooking;
