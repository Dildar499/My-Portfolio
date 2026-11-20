import { useState } from "react";
import { Link } from "react-router-dom";
import { AvatarCircles } from "./ui/avatar-circles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const avatars = [
    {
      imageUrl: "/pic.png",
      profileUrl: "/about",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg px-3 mb-sm-5">
      <div className="container-lg">
        <Link
          className="navbar-brand d-flex align-items-center gap-2 text-light"
          to="/home"
          aria-label="Home"
          onClick={closeMenu}
        >
          <AvatarCircles avatarUrls={avatars} className="me-2" />
          <span className="brand-name">Dildar Hussain</span>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler bg-info"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            isOpen ? "show" : ""
          }`}
          id="navbarContent"
        >
          <div className="navbar-center-group d-lg-flex align-items-lg-center">
            <ul className="navbar-nav mx-lg-auto text-center text-lg-start">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/home" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/skills" onClick={closeMenu}>
                  Skills
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/Blogs" onClick={closeMenu}>
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            <span className="nav-divider d-none d-lg-inline mx-3">|</span>

            <div className="navbar-socials d-flex justify-content-center justify-content-lg-start">
              <a
                href="https://www.instagram.com/yoyochotenawab?hvrq=MWQzOWgwaG4zYjE2bw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-light"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.facebook.com/YoYoChoteawabw222/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-light"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://www.linkedin.com/in/dildar-hussain-184790315/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-light"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="https://github.com/Dildar499"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-light"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;