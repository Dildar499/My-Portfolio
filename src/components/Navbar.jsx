import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  px-3">
      <div className="container-lg">
        <Link className="navbar-brand" to="/home" aria-label="Home">
          <img
            src="/DildarLogo.png"
            alt="Dildar Hussain"
            className="navbar-logo"
            style={{ width: "150px" }}
          />
        </Link>

        <button
          className="navbar-toggler bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <div className="navbar-center-group d-lg-flex align-items-lg-center gap-lg-3">
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav mx-lg-auto gap-lg-3">
                <li className="nav-item">
                  <Link className="nav-link text-light fs-5" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light fs-5" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light fs-5" to="/skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light fs-5" to="/services">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light fs-5" to="/Blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light fs-5" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <span className="mx-3">|</span>
              <div className="navbar-socials d-flex gap-4 ms-lg-3">
                <a
                  href="https://www.instagram.com/yoyochotenawab?hvrq=MWQzOWgwaG4zYjE2bw=="
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-light fs-5"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.facebook.com/YoYoChoteawabw222/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-light fs-5"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dildar-hussain-184790315/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-light fs-5"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/Dildar499"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-light fs-5"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
