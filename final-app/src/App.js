import './App.css';
import Nav from './components/Nav'
import Header from './components/Header';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path='/booking' element={<Main/>} />
        <Route path='/booking-confirmed' element={<ConfirmedBooking/>}/>
      </Routes>
      {/* <BookingForm/> */}
    </>
  );
}

export default App;
