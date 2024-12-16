import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';
function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      {location.pathname === '/' && <Header />}
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/booking" element={<Main />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
      <Menu/>
    </>
  );
}

export default App;
