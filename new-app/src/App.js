import './App.css';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import Specials from './Specials';
import BookingForm from './BookingForm';
function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <BookingForm />
      

      <Main/>
      <Specials/>
      <Footer/>

    </>
  );
}

export default App;
