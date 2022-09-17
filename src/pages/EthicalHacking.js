import React from "react";
import ResourceBottom from "./ResourceBottom";
class EthicalHacking extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Ethical Hacking</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Ethical Hacking is becoming a highly regarded profession in India
              these days and is synonymous with Internet-Security. It opens
              plenty of job opportunities in both public as well as private
              sector. Professionals engaged in this field primarily utilize
              in-depth computer knowledge and creativity to seek out the
              vulnerable areas in the systems so as to help companies anticipate
              and prevent hackers from hacking into their networks. Ethical
              hacker also plays an important role in controlling cyber
              terrorism. The specialization in this field as per person's
              interest encompasses the following: C++ Or JAVA, Computer
              Networks, Cyber-System; Data-Security; UNIX knowledge. Keeping the
              present-day scenario in view, people with required aptitude and
              passion compete for various lucrative career-avenues in this
              field. For a career in ethical hacking, it is fundamental to have
              a strong foundation in Computer Science/Information Technology. It
              is recommended that students choose a combination of Science with
              Computer science. One can also pursue a career in Ethical Hacking
              after completing their B.Tech/B.Sc degree as this will give a
              solid foundation and enable in comprehending the concepts quite
              swiftly. Reputed companies like WIPRO, RELIANCE, AIRTEL, IBM,
              INFOSYS, ELIXIR WEB SOLUTIONS, PRICE WATERHOUSE COOPERS, KPMG are
              always on the look out for efficient hacking professionals.
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
          <ResourceBottom pageName="Ethical Hacking"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default EthicalHacking;
