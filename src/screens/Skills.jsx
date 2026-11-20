import { useState } from "react";
import SkillBar from "../components/Skillbar";
import { motion } from "framer-motion";

function Skills() {
  const [ready , setReady] = useState(false);
  return (
    
    <>
      <motion.div
        className="container text-center mt-4 mt-md-5 mb-4 mb-md-5 px-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => setReady(true)}
        whileHover={ready ? { y: -12 } : undefined}
      >
        <h4 style={{ color: "#00c0ff" }}>Skills</h4>

        <h1 className="fs-1 lh-sm">
          I Work Hard to Improve My Skills
          <br className="d-none d-md-block" /> Regularly
        </h1>
      </motion.div>

      <section className="skills-section pb-4 pb-md-5">
        <div className="container">
          <div className="row gx-lg-5 gy-0">
            <motion.div
              className="col-12 col-lg-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => setReady(true)}
              whileHover={ready ? { y: -12 } : undefined}
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
                ease: "easeInOut",
              }}
              onAnimationComplete={() => setReady(true)}
              whileHover={ready ? { y: -12 } : undefined}
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
