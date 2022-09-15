import React from "react";
import ResourceBottom from "./ResourceBottom";
class CabinCrew extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Cabin Crew</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Cabin Crew can be an excellent career choice if travelling across
              the world and interacting with new people excites you. Cabin crew
              are the in-flight members that make passengers comfortable while
              they are flying to their destinations. They look after the
              passengers boarding, seats, luggage, food and basic requirements
              along with their safety by introducing them to certain safety
              measures. They also need to provide a written report about all the
              records of the flight, which includes sales report about the food
              and other products, and an account of any unusual experiences.
              Training in cabin crew services include the study of the
              profession, passenger handling, in-flight procedures and
              emergencies, duties after landing, flight evaluation, dealing with
              passengers with special needs, food and beverage services among
              others. To become a member of cabin crew one has to be physically
              fit and attractive. Some airlines have a specific requirement in
              terms of weight and height. Candidates should also possess good
              communication and interpersonal skills with the right amount of
              tactfulness. Selection is usually on the basis of an interview
              followed by a group discussion. The candidates are eligible to
              apply after completing class 12th. Before starting work as a
              professional, one is required to gain some basic knowledge about
              the job through a course that lasts for around 6 months to a year.
              A degree in hotel management is recommended for fast track
              movement and good growth potential. Recruiters include all the
              leading International and Domestic Airlines such as Singapore Air,
              Emirates, Jet Airways, Air India, Indigo etc.
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
          <ResourceBottom pageName="Cabin Crew"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default CabinCrew;
