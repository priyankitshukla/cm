import React from "react";
import ResourceBottom from "./ResourceBottom";
class Aviation extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Aviation</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Aviation is still amongst the most rewarding and fascinating
              careers. Aviation refers to all the activities involving the
              operation of aircrafts. The courses in India deal with Flying
              Operation, Aircrew, Aircraft, Air Traffic Management, Aviation
              safety and economics of the airport. Aircraft pilots are highly
              trained professionals and require intensive training & skill up
              gradation. Being a highly specialized job one is required to have
              knowledge of air navigation, interpreting meteorological reports,
              lead the aircraft under varied circumstances and be a leader to
              the crew and passengers. At technical level, a lot of skills are
              prerequisite for the pilots and they have to qualify many tests to
              get the license to fly. Getting the DGCA (Directorate General of
              Civil Aviation) license to fly the airplane is highly competitive
              in nature. For a career as a Pilot, one should pass the 10+2 level
              with the subject combination of Physics, Chemistry and Maths. Post
              class 12th one can try and crack the entrance exams of the flying
              schools in India and also clear the physical fitness requirements.
              Leading recruiters include well known International and domestic
              airlines such as Emirates, Singapore Air, Etihad, Jet Airways and
              Air India. Trending fields- Commercial Pilot, Private Jet Pilot,
              Aircraft Maintenance Engineer etc​
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
          <ResourceBottom pageName="Aviation"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Aviation;
