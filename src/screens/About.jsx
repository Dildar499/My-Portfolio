import { Link } from "react-router-dom";
import "./About.css";
import { motion, useScopeMotion } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import { RippleButton } from "@/components/ui/ripple-button";
import { useState } from "react";

function About() {
  const [ready, setReady] = useState(false);
  return (
    <>
      <section className="about-section">
        <motion.div
          className="container content-section text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => setReady(true)}
          whileHover={ready ? { y: -12 } : undefined}
          whileTap={ready ? { y: -12 } : undefined}
        >
          <h4 className="about-heading">About Me</h4>
          <h1 className="about-title">
            A Passionate Developer Who <br className="d-none d-md-block" />
            Loves to Code
          </h1>
        </motion.div>

        <div className="container my-5">
          <div className="row align-items-stretch gy-5 gy-lg-0">
            {/* Profile Image */}
            <div className="col-14 col-lg-5 d-flex">
              <div className="image-container w-100">
                <motion.img
                  src="/pic.png"
                  className="profile-image1"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  onAnimationComplete={() => setReady(true)}
                  whileHover={ready ? { y: -12 } : undefined}
                  whileTap={ready ? { y: -12 } : undefined}
                  alt="Dildar Hussain"
                />
              </div>
            </div>

            {/* About Information */}
            <div className="col-14 col-lg-7">
              <motion.div
                className="about-content mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => setReady(true)}
                whileHover={ready ? { y: -12 } : undefined}
                whileTap={ready ? { y: -12 } : undefined}
              >
                <h2 className="about-heading">About Me</h2>

                <p className="text-secondary about-text">
                  I’m Dildar Hussain, a Computer Science graduate from Khwaja
                  Fareed University of Engineering and IT, where I studied from
                  2020 to 2024. I’m interested in frontend and software
                  development, and I enjoy building responsive websites using
                  JSON, CSS, JavaScript, React, and Bootstrap. I’m always
                  learning and looking for opportunities to grow as a developer.
                </p>

                <div className="row gx-3 gy-3 mb-3">
                  <motion.div
                    className="col-14 col-md-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    
                  >
                    <ul className="item about-text">
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
                    className="col-14 col-md-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    
                  >
                    <ul className="item about-text">
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

                <div className="d-flex justify-content-center justify-content-lg-start">
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
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <div className="container cards">
        <div className="row gy-3 gx-2">
          <motion.div
            className="col-6 col-md-4 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setReady(true)}
            whileHover={ready ? { y: -14 } : undefined}
            whileTap={ready ? { y: -12 } : undefined}
          >
            <AnimatedCounter target={50} suffix="+" title="Digital Products" />
          </motion.div>

          <motion.div
            className="col-6 col-md-4 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setReady(true)}
            whileTap={ready ? { y: -12 } : undefined}
            whileHover={ready ? { y: -14 } : undefined}
          >
            <AnimatedCounter target={60} suffix="+" title="Direct Clients" />
          </motion.div>

          <motion.div
            className="col-6 col-md-4 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setReady(true)}
            whileTap={ready ? { y: -12 } : undefined}
            whileHover={ready ? { y: -14 } : undefined}
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
            onAnimationComplete={() => setReady(true)}
            whileTap={ready ? { y: -12 } : undefined}
            whileHover={ready ? { y: -14 } : undefined}
          >
            <AnimatedCounter target={80} title="Awards Win" suffix="+" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
