import React from "react";
import ResourceBottom from "./ResourceBottom";
class MarkettingManagement extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Marketting & Management</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Marketing is the management process responsible for identifying,
              anticipating and satisfying customer requirements profitably.
              Professionals in this field are the brains behind all ads and
              campaigns; and they're responsible for bringing products and
              services into the public consciousness. Careers in marketing
              require knowledge of market research, consumer behavior, sales,
              visual arts and general marketing. With new products being
              developed all the time and the economy moving to a global stage,
              the demand of marketers is at an all time high. A bachelor degree
              along with an MBA with marketing specialization is recommended for
              getting high paid marketing jobs. Besides MBA programs, BBM or BBA
              degree holders can also find various positions in the field of
              marketing. Top recruiters include companies from across the
              industry like P & G, ITC, HUL in FMCG, Maruti and Hyundai in
              Automotive, AC Nielsen in Market Research and Google, LinkedIn and
              Facebook in the Social Media space. Trending Fields : Digital
              Marketing, Brand Marketing.
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
          <ResourceBottom pageName="Marketting & Management"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default MarkettingManagement;
