
import { Link } from "react-router-dom";
import "./About.css";
import AnimatedCounter from "../components/AnimatedCounter";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="container content-section text-center">
          <h4 className="about-heading">About Me</h4>
          <h1 className="about-title">
            A Passionate Developer Who <br />
            Loves to Code
          </h1>
        </div>

        <div className="container row mx-auto my-5 align-items-stretch">
          {/* Profile Image */}
          <div className="col-12 col-lg-5 d-flex mb-5 mb-lg-0">
            <div className="image-container w-100">
              <img
                src="/pic.png"
                className="profile-image1"
                alt="Dildar Hussain"
              />
            </div>
          </div>

          {/* About Information */}
          <div className="col-12 col-lg-7">
            <div className="about-content mb-4">
              <h2 className="about-heading">About Me</h2>

              <p className="text-secondary fs-5">
                I’m Dildar Hussain, a Computer Science graduate from Khwaja
                Fareed University of Engineering and IT, where I studied from
                2020 to 2024. I’m interested in frontend and software
                development, and I enjoy building responsive websites using
                JSON, CSS, JavaScript, React, and Bootstrap. I’m always learning
                and looking for opportunities to grow as a developer.
              </p>

              <div className="row gx-3 gy-3 mb-3">
                <div className="col-12 col-md-6">
                  <ul className="item fs-5">
                    <li>
                      <span>Name</span>
                      <p className="text-secondary">Dildar Hussain</p>
                    </li>

                    <li>
                      <span>Email</span>
                      <p>
                        <Link
                          className="text-decoration-none text-secondary"
                          to="/contact"
                        >
                          webtect754@gmail.com
                        </Link>
                      </p>
                    </li>

                    <li>
                      <span>Phone</span>
                      <p className="text-secondary">
                        +92 326 650403 5
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-md-6">
                  <ul className="item fs-5">
                    <li>
                      <span>Address</span>
                      <p className="text-secondary">
                        Azaan City, Sahiwal
                      </p>
                    </li>

                    <li>
                      <span>Degree</span>
                      <p className="text-secondary">Bachelor's</p>
                    </li>

                    <li>
                      <span>Freelance</span>
                      <p className="text-secondary">Available</p>
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download text-decoration-none"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <div className="container cards">
        <div className="row gy-3 gx-2">
          <div className="col-6 col-md-4 col-lg-3">
            <AnimatedCounter
              target={50}
              suffix="+"
              title="Digital Products"
            />
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <AnimatedCounter
              target={60}
              suffix="+"
              title="Direct Clients"
            />
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <AnimatedCounter
              target={100}
              suffix="+"
              title="Total Projects"
              compact={true}
            />
          </div>

          <div className="col-6 col-md-4 col-lg-3 mx-md-auto mx-lg-0">
            <AnimatedCounter
              target={80}
              title="Awards Win"
              suffix="+"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
