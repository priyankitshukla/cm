import React from "react";
import ResourceBottom from "./ResourceBottom";
class PerfomingArts extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Perfoming Arts</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Performing arts is an art form where the artists express
              themselves in front of audience through their physical abilities
              like body movements, facial expressions, vocals and gestures.
              Performing arts is divided into three art forms namely, music,
              dance and drama. Music consists of knowing the theories of music,
              notes, principles of singing and composing music. Dance, on the
              other hand is the rhythmic movement of body in sync with the
              background sound and music. Drama comprises of the depiction of a
              story through the amalgamation of dance and music along with use
              of gestures, language, speech and facial expressions. Apart from
              the basic academic requirement, a person should be interested in
              the particular art form along with enough talent and skills to
              pursue it as a career. India is the largest producer of films all
              over the world and our culture has always cherished different art
              forms, which continues till date. There are many institutes and
              universities that provides education in performance at certificate
              level, diploma level, bachelor's and master's level. Minimum
              requirement for certificate courses is Xth board certificate;
              while for diploma and bachelor's level it is 10+2 board
              certificate. If one wants to study at the master's level,
              bachelor's degree in relevant subjects is mandatory. Performing
              art has a lot of scope in todays time and age. One can be placed
              in theatre groups, entertainment companies, television, as well as
              the film industry or work independently as freelancers..
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
          <ResourceBottom pageName="Perfoming Arts"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default PerfomingArts;
