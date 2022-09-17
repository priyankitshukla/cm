import React from "react";
import ResourceBottom from "./ResourceBottom";
class EducationTraining extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Education & Training</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              A career in Education and training is considered a noble one in
              India as well as across the globe. Educators pass on accumulated
              knowledge to the new generation shaping the future of the country.
              Educators requires a perfect blend of essential attributes like
              patience, confidence, liking for and an understanding of children/
              students. Education & training is such a broad domain that
              different skills and type of trainings are required for different
              levels. Areas of specialization include teaching at nursery
              schools, middle schools, high schools, colleges, universities,
              institutes, special schools etc. The demand for qualified
              educators is on rise and this trend is not likely to change
              anytime in the near future. Whether you're interested in working
              as a professor or elementary school teacher, a special educator
              instructor or corporate trainer you're sure to find a career in
              education extremely rewarding. For different levels, a different
              set of qualification is required ranging from nursery which
              requires a higher secondary degree (10+2 examination) along with
              B.Ed. to university level, where one requires at least a masters
              degree with NET qualification certificate. For aspirants planning
              to enter the domain of training they need to gain relevant
              expertise and experience. All top Schools and Colleges both in the
              private and public sector are constantly on the lookout for good
              talent in the field of education & training and are thus amongst
              the top recruiters. Training organizations and corporates are also
              on constant lookout for qualified trainers and experts.{" "}
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
          <ResourceBottom pageName="Education & Training"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default EducationTraining;
