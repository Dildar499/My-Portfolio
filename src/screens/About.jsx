import { Link } from "react-router-dom";
import "./About.css";
import { motion } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import { RippleButton } from "@/components/ui/ripple-button";

function About() {
  return (
    <>
      <section className="about-section">
        <motion.div
          className="container content-section text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="about-heading">About Me</h4>
          <h1 className="about-title">
            A Passionate Developer Who <br />
            Loves to Code
          </h1>
        </motion.div>

        <div
          className="container row mx-auto my-5 align-items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="col-12 col-lg-5 d-flex mb-5 mb-lg-0">
            <div
              className="image-container w-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/pic.png"
                className="profile-image1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                alt="Dildar Hussain"
              />
            </div>
          </div>

          {/* About Information */}
          <div className="col-12 col-lg-7">
            <motion.div
              className="about-content mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
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
                <motion.div
                  className="col-12 col-md-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
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
                      <p className="text-secondary">+92 326 650403 5</p>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="col-12 col-md-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <ul className="item fs-5">
                    <li>
                      <span>Address</span>
                      <p className="text-secondary">Azaan City, Sahiwal</p>
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
                </motion.div>
              </div>
              <RippleButton
                rippleColor="#00c0ff"
                duration="1500ms"
                onClick={() => {
                  setTimeout(() => {
                    window.open("/cv.pdf", "_blank");
                  }, 750);
                }}
              >
                Download CV
              </RippleButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <div className="container cards">
        <div className="row gy-3 gx-2"
        >
          <motion.div
            className="col-6 col-md-4 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedCounter target={50} suffix="+" title="Digital Products" />
          </motion.div>

          <motion.div
            className="col-6 col-md-4 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedCounter target={60} suffix="+" title="Direct Clients" />
          </motion.div>

          <motion.div
            className="col-6 col-md-4 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedCounter
              target={100}
              suffix="+"
              title="Total Projects"
              compact={true}
            />
          </motion.div>

          <motion.div
            className="col-6 col-md-4 col-lg-3 mx-md-auto mx-lg-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedCounter target={80} title="Awards Win" suffix="+" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
