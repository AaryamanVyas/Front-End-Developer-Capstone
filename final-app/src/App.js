import './App.css';
import Nav from './components/Nav'
import Header from './components/Header';
import BookingPage from './components/BookingPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path='/booking' element={<BookingPage/>} />
      </Routes>
      {/* <BookingForm/> */}
    </>
  );
}

export default App;
