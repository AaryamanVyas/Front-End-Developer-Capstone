import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/little_lemon.png";

const Footer = ({ scrollToSection, refs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterLinkClick = (ref, path) => {
    if (location.pathname === "/" && ref) {
      // If already on the homepage, scroll to the section
      scrollToSection(ref);
    } else {
      // Navigate to the homepage first
      navigate(path);
    }
  };

  return (
    <footer>
      <section>
        {/* Company Info */}
        <div className="company-info">
          <img src={logo} alt="Little Lemon Logo" />
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <button
                onClick={() => handleFooterLinkClick(refs.homeRef, "/")}
                className="nav-button"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFooterLinkClick(refs.aboutRef, "/")}
                className="nav-button"
              >
                About Us
              </button>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <button
                onClick={() => handleFooterLinkClick(refs.footerRef, "/")}
                className="nav-button"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <strong>Address:</strong> <br />
              123 Mediterranean Street, Towncity, USA
            </li>
            <li>
              <strong>Phone:</strong> <br />
              +1 (234) 567-8900
            </li>
            <li>
              <strong>Email:</strong> <br />
              <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3>Social Links</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
