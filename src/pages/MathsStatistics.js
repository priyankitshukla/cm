import React from "react";
import ResourceBottom from "./ResourceBottom";
class MathsStatistics extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Maths & Statistics</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              If one has the passion and deep interest in mathematics, then it
              is possible to build a perfectly satisfying, stimulating,
              creditable and lucrative career in it. A career in mathematics is
              frequently synonymous with a teaching career, but a trained
              mathematician can be very well employed outside of academia.
              Mathematicians use mathematical theory, computational techniques,
              algorithms and latest computer technology to solve economic,
              scientific and business problems. A degree in Mathematics &
              Statistics equips you with the requisite skills for developing and
              implementing various methods to solve business problems. Few
              Specialization fields in the domain include-Pure Mathematics,
              Applied Mathematics, Pure Statistics, Computer Science, Physical
              Sciences, Engineering and other mathematically aligned fields like
              Insurance amongst the others. Competition is increasing since the
              subjects like mathematics and statistics are in vogue these days
              due to their wide gamut of applicability in the field of study and
              research. One needs to be proficient in the basics of mathematics
              right from the middle school, in order to pursue higher studies in
              mathematics. Candidate must have completed 10+2 with Mathematics
              and taken up the subject at honors level, so as to specialize in
              it further at the post-graduation level. Recruiters include
              government agencies and top MNCs across sectors such as Banking,
              Finance, Insurance and others. Trending Fields include- Big Data
              Analytics, Actuarial Science.
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
          <ResourceBottom pageName="Maths & Statistics"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default MathsStatistics;
