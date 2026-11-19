import SkillBar from "../components/Skillbar";
import { motion } from "framer-motion";
function Skills() {
  return (
    <>
      <motion.div
        className="container text-center mb-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <h4 style={{ color: "#00c0ff" }}>Skills</h4>

        <h1 style={{ fontSize: "45px" }}>
          I Work Hard to Improve My Skills
          <br />
          Regularly
        </h1>
      </motion.div>
      <section className="skills-section">
        <div className="container">
          <div className="row">
            <motion.div
              className="col-12 mx-sm-auto col-lg-6 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <SkillBar name="HTML" percentage={100} />
              <SkillBar name="CSS" percentage={95} />
              <SkillBar name="Bootstrap" percentage={85} />
            </motion.div>

            <motion.div
              className="col-12 col-lg-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <SkillBar name="JavaScript" percentage={90} />
              <SkillBar name="JSON" percentage={85} />
              <SkillBar name="React" percentage={90} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
