import React from "react";
import ResourceBottom from "./ResourceBottom";
class Architecture extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Architecture</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Architecture is a highly ambitious field these days as structural
              designs and modern buildings are taking over not just the city,
              but the country's infrastructure is also getting a facelift and
              new avenues are opening up for the hopeful students. Architecture
              fields include Landscape Design, Urban Design and Planning,
              Ecological Management, Urban Conservation, Heritage Management
              amongst many others. While many people find this career
              fascinating and therefore lakhs of candidates apply and compete to
              get through the premier institutions through the entrance-test. It
              is recommended that aspirants take Maths, Physics, Chemistry and
              Engineering Drawing at 10+2 level for this course. There are
              multiple entrance tests such as NATA which is National Aptitude
              Test of Architecture and on the basis of ranking /marks obtained
              in these entrance tests, the students are selected for college
              courses. Top recruiting firms- Architecture Design Firms, Real
              Estate Firms, Engineering Firms, Government Bodies Trending fields
              - Landscape Designer, Interior Designer, Urban Design and
              Planning. ​
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
          <ResourceBottom pageName="Architecture"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Architecture;
