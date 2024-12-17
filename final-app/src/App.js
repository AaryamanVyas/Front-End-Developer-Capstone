import React, { useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  const location = useLocation();

  // Create refs for smooth scrolling
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  // Scroll to specific section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Nav
        scrollToSection={scrollToSection}
        refs={{ homeRef, menuRef, aboutRef, footerRef }}
      />

      {/* Wrap Header with a ref for "Home" */}
      {location.pathname === "/" && (
        <div ref={homeRef}>
          <Header />
        </div>
      )}

      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/booking" element={<Main />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>

      {/* Sections for Menu and About Us */}
      <div ref={menuRef}>
        <Menu />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>

      {/* Footer with ref */}
      <div ref={footerRef}>
      <Footer scrollToSection={scrollToSection} refs={{ homeRef, menuRef, aboutRef, footerRef }} />
      </div>
    </>
  );
}

export default App;
