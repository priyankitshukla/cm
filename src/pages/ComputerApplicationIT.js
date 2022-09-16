import React from "react";
import ResourceBottom from "./ResourceBottom";
class ComputerApplicationIT extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Computer Application & IT</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              In today's techno-savvy world, no industry survives without
              adopting the latest technology & hence graduates in the field of
              computer applications are always in demand. Bachelors in the
              computer application is a mainstream career option and a very
              sought-after course amongst students. A degree in computer
              application creates substantial scope for an excellent career.
              Entry to premier colleges requires students to pass an entrance
              exam. Considering the fast pace growth of this sector, lots of
              students are pursuing this career path thus making it increasingly
              competitive. Graduates in this field need to constantly upgrade
              their skill set to keep up with the rapidly changing technology.
              For a career in Computer Application one can do BCA, a three year
              bachelor program and follow it up with MCA, a masters program.
              While its imperative to have Mathematics at 10+2 level, it's also
              recommended that the candidate chooses a combination of Science
              (Physics, Chemistry, Maths) with Computer Science as it increases
              the odds of grasping concepts faster. While demand for Computer
              Application Graduates is becoming sector agnostic, companies like
              Accenture, TCS, TechMahindra, IGATE and StartUps like Flipkart &
              UBER continue to be the top recruiters. Trending fields: Web/
              Mobile Design Engineer, Web/ Mobile App Developer, UI/UX
              Designers, Technical Writers​
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
          <ResourceBottom pageName="Computer Application & IT"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default ComputerApplicationIT;
