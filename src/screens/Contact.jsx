import "./Contact.css";
import { useState } from "react";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Contact() {

  const [ready , setReady] = useState(false)
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [email1, setEmail1] = useState("");

  const HandleForm = (e) => {
    e.preventDefault();

    setSuccess("Send Successfully");

    setText("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      {/* Contact Heading */}
      <motion.div
        className="container text-center mt-4 mt-md-5 px-3"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        onAnimationComplete={() => setReady(true)}
        whileHover={ready ? { y: -12 } : undefined}
        whileTap={ready ? { y: -12 } : undefined}
        transition={{ duration: 0.5 }}
      >
        <h4 style={{ color: "#00c0ff" }}>Contact</h4>
        <h1 className="section-title">I Want To Hear From You</h1>
      </motion.div>

      {/* Contact Section */}
      <div className="container listContact">
        <motion.div
          className="row gy-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Contact Information */}
          <motion.div className="col-md-6 col-12" variants={fadeUp}>
            <motion.ul
              className="contact-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.li
                className="d-flex align-items-start gap-3 gap-md-4 py-3"
                variants={fadeUp}
              >
                <div className="contact-icon">
                  <svg
                    style={{ width: "50px", height: "30px", color: "white" }}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M320 48C337.7 48 352 62.3 352 80L352 98.3C450.1 112.3 527.7 189.9 541.7 288L560 288C577.7 288 592 302.3 592 320C592 337.7 577.7 352 560 352L541.7 352C527.7 450.1 450.1 527.7 352 541.7L352 560C352 577.7 337.7 592 320 592C302.3 592 288 577.7 288 560L288 541.7C189.9 527.7 112.3 450.1 98.3 352L80 352C62.3 352 48 337.7 48 320C48 302.3 62.3 288 80 288L98.3 288C112.3 189.9 189.9 112.3 288 98.3L288 80C288 62.3 302.3 48 320 48zM160 320C160 408.4 231.6 480 320 480C408.4 480 480 408.4 480 320C480 231.6 408.4 160 320 160C231.6 160 160 231.6 160 320zM320 224C373 224 416 267 416 320C416 373 373 416 320 416C267 416 224 373 224 320C224 267 267 224 320 224z" />
                  </svg>
                </div>

                <div className="Short">
                  <h3>Address</h3>
                  <a
                    className="text-decoration-none text-secondary fs-5"
                    href="https://maps.app.goo.gl/aeCFerfHN9EBR9DeA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Azaan City, Sahiwal
                  </a>
                </div>
              </motion.li>

              <motion.li
                className="d-flex align-items-start gap-3 gap-md-4 py-3"
                variants={fadeUp}
              >
                <div className="contact-icon">
                  <svg
                    style={{ width: "50px", height: "30px", color: "white" }}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M155.8 96C123.9 96 96.9 119.4 92.4 150.9L64.6 345.2C64.2 348.2 64 351.2 64 354.3L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 354.3C576 351.3 575.8 348.2 575.4 345.2L547.6 150.9C543.1 119.4 516.1 96 484.2 96L155.8 96zM155.8 160L484.3 160L511.7 352L451.8 352C439.7 352 428.6 358.8 423.2 369.7L408.9 398.3C403.5 409.1 392.4 416 380.3 416L259.9 416C247.8 416 236.7 409.2 231.3 398.3L217 369.7C211.6 358.9 200.5 352 188.4 352L128.3 352L155.8 160z" />
                  </svg>
                </div>

                <div className="Short">
                  <h3>Email</h3>
                  <a
                    className="text-decoration-none text-secondary fs-5"
                    href="mailto:webtech754@gmail.com"
                  >
                    webtech754@gmail.com
                  </a>
                </div>
              </motion.li>

              <motion.li
                className="d-flex align-items-start gap-3 gap-md-4"
                variants={fadeUp}
              >
                <div className="contact-icon">
                  <svg
                    style={{ width: "50px", height: "30px", color: "white" }}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                  </svg>
                </div>

                <div className="Short">
                  <h3>WhatsApp</h3>
                  <a
                    className="text-decoration-none text-secondary fs-5"
                    href="https://wa.me/923266504035"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +92-326650403-5
                  </a>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="col-md-6 col-12"
            variants={fadeUp}
            onAnimationComplete={() => setReady(true)}
            whileHover={ready ? { y: -12 } : undefined}
            whileTap={ready ? { y: -12 } : undefined}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={HandleForm}>
              <div className="input-fields position-relative p-3 p-md-4 rounded-4 overflow-hidden">
                <label className="fs-2 text-decoration-underline">
                  Contact Form
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Your Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />

                <textarea
                  id="textArea"
                  rows={5}
                  placeholder="Your Message.."
                  className="textArea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="btn input-fields button"
                  style={{
                    backgroundColor: success ? "green" : "",
                    color: "white",
                  }}
                >
                  {success ? "Message Send" : "Click to Send"}
                </button>

                <BorderBeam
                  size={150}
                  duration={8}
                  borderWidth={2}
                  colorFrom="#00c0ff"
                  colorTo="#a855f7"
                />
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <div className="container-fluid newsLetter">
        <section className="newsletter-section">
          <div className="container">
            <motion.div
              className="row align-items-center gy-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Newsletter Content */}
              <motion.div className="col-12 col-lg-6" variants={fadeUp}>
                <div className="newsletter-content text-center text-lg-start">
                  <h4 className="text-info">Subscribe Now</h4>
                  <h1>Get My Newsletter</h1>
                  <p className="text-secondary">
                    Get latest news, tips and trics in your inbox
                  </p>
                </div>
              </motion.div>

              {/* Email Input */}
              <motion.div className="col-12 col-lg-6" variants={fadeUp}>
                <div className="textContent position-relative p-3 rounded-4 overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email here"
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                  />

                  <button onClick={() => setEmail1("")}>Send Now</button>

                  <BorderBeam
                    size={100}
                    duration={8}
                    borderWidth={2}
                    colorFrom="#00c0ff"
                    colorTo="#a855f7"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
