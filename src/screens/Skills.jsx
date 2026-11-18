import SkillBar from "../components/Skillbar";

function Skills(){
    return(
        <>
         <div className="container text-center ">
        <h4 style={{ color: "#00c0ff" }}>Skills</h4>
        <h1 style={{ fontSize: "45px" }}>
          I Work Hard to Improve My Skills
          <br />
          Regularly
        </h1>
      </div>
       <section className="skills-section">
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-lg-6">
            <SkillBar name="HTML" percentage={100} />
            <SkillBar name="CSS" percentage={95} />
            <SkillBar name="Bootstrap" percentage={85} />
          </div>

          <div className="col-12 col-lg-6">
            <SkillBar name="JavaScript" percentage={90} />
            <SkillBar name="JSON" percentage={85} />
            <SkillBar name="React" percentage={90} />
          </div>

        </div>
      </div>
    </section>     
        </>
    )
}

export default Skills;