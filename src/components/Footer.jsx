import { Link } from "react-router-dom";
import './Footer.css'
function Footer() {
  return (
    <footer className="footer w-100 py-4  text-white">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

        <div className="fw-bold fs-5 text-light">
          <span><img style={{width:'100px'}} src="./dildar.png" alt="" /></span> DildarHussain © 2026
        </div>

        <div className="footer-links d-flex flex-wrap justify-content-center align-items-center gap-4">
          <Link to="/home" className="text-decoration-none text-light fs-5">
            Home
          </Link>

          <Link to="/about" className="text-decoration-none text-light fs-5">
            About
          </Link>
          <Link to="/services" className="text-decoration-none text-light fs-5">
            Services
          </Link>


          <Link to="/skills" className="text-decoration-none text-light fs-5">
            Skills
          </Link>
          <Link to="/blogs" className="text-decoration-none text-light fs-5">
            Blogs
          </Link>
          <Link to="/contact" className="text-decoration-none text-light fs-5">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;