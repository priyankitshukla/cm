import React from "react";
import ResourceBottom from "./ResourceBottom";
class CivilServices extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Civil Services</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              The civil service system is the backbone of the administrative
              machinery of the country. The Union Public Service Commission
              conducts a nationwide competitive examination for recruitment to
              various Civil Services of the Government of India. Civil Services
              offer an attractive and challenging career to the ambitious,
              aspiring and the talented youth of the country. The wide variety
              of jobs within the fold of the Civil Services have relatively
              greater sphere of authority and power than any other services in
              India. It is considered to be one of the toughest examination in
              India with success rate of 0.1%-0.3% with more than 900,000
              applicants. The challenging aspect of this exam is that aspirants
              must complete a three-stage process, requiring in depth knowledge,
              rational thinking, drafting skills, creativity, language
              competency, a can do and empathetic personality. The candidate
              applying for civil services examination must hold a degree of any
              central, state or deemed university. There are certain
              restrictions on age limit and number of attempts. Jobs in civil
              services are symbols of great power, social recognition and
              affluence. A wide variety of work domains are associated with
              civil services, like maintenance of law and order, developmental
              work, disaster management, representing India on international
              forums, administration, and empowerment of marginalized sections
              of society etc. Trending fields: Indian Administrative Services,
              Indian Foreign Service, Indian Police Service.
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
          <ResourceBottom pageName="Civil Services"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default CivilServices;
