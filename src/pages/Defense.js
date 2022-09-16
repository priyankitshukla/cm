import React from "react";
import ResourceBottom from "./ResourceBottom";
class Defense extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Defense</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              A career in defense forces promises one of the most prestigious
              and respected positions in the country. The Indian Armed Forces
              are the military forces of India, which consists of four
              professional uniformed services: The Indian Army, Indian Air
              Force, Indian Navy and Indian Coast Guard. The various
              paramilitary organizations and various inter-service institutions
              also help the Indian Armed Forces. The Ministry of Defense is
              responsible for the management of armed forces in India. Armed
              forces offer very exciting career to young men and women in
              several fields. Career in the forces promises a life full of
              adventure. To ensure that appropriate candidates are chosen, a
              comprehensive selection process is adopted by the armed forces
              through Service Selection Board (SSB) Interview. Selection
              procedure involves three phases: Objective test, Interview and
              medical examination. Candidates applying for Air force and Navy
              must have Physics and Maths in the +2 level exam. Students can
              apply after class 12 (NDA) or after graduation (CDS) for defense
              services. Candidates finally selected by SSB are absorbed by armed
              forces. Individuals are exposed to various forms of training and
              promotions at different levels.
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
          <ResourceBottom pageName="Defense"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Defense;
