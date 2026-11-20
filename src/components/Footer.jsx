import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer w-100 py-4 text-white">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 gap-md-4">
        {/* Logo + copyright */}
        <div className="footer-brand d-flex flex-column flex-sm-row align-items-center text-center text-sm-start gap-2 fw-bold text-light">
          <img className="footer-logo" src="/dildar.png" alt="Dildar Hussain logo" />
          <span>DildarHussain © 2026</span>
        </div>

        {/* Links */}
        <nav className="footer-links d-flex flex-wrap justify-content-center align-items-center">
          <Link to="/home" className="text-decoration-none text-light">Home</Link>
          <Link to="/about" className="text-decoration-none text-light">About</Link>
          <Link to="/services" className="text-decoration-none text-light">Services</Link>
          <Link to="/skills" className="text-decoration-none text-light">Skills</Link>
          <Link to="/blogs" className="text-decoration-none text-light">Blogs</Link>
          <Link to="/contact" className="text-decoration-none text-light">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;