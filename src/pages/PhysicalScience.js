import React from "react";
import ResourceBottom from "./ResourceBottom";
class PhysicalScience extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Physical Science</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Physical Science deals with the study of nature and the properties
              of the non-living matter and energy. It encompasses wide variety
              of fields such as astronomy, earth sciences, geology, physics,
              chemistry and oceanography. The researchers in this field, design
              and conduct experiments to collect the observable physical
              evidence of the natural phenomenon. More and more people are
              trying to get in the field of physical sciences for research
              purposes. Physical Science graduates can even join IIT through
              GATE exam. Physical Science is also an optional in civil service
              main exam. Candidate should have Science (Physics, Chemistry) and
              Mathematics at 10+2 level to take up any physical science career
              field at undergraduate level. Top job recruiters' include- BHABHA
              ATOMIC RESEARCH CENTRE, IISER, DRDO, Indian Institute of Science
              etc. Trending fields - Environmentalist, Astronomy, Space
              Researcher.
            </span>
          </p>
          <div>
            <ul>
              <li>Career Path</li>
              <li>Leading Institutes in India</li>
              <li>Leading Institutes Abroad</li>
              <li>Entrance Exams</li>
            </ul>
          </div>
          <ResourceBottom pageName="Physical Science"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default PhysicalScience;
