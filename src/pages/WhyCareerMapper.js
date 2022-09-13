import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/versions.css";
import "../css/responsive.css";
import "react-bootstrap-accordion/dist/index.css";

import { Accordion } from "react-bootstrap-accordion";
import { Button } from "bootstrap";

class WhyCareerMapper extends React.Component {
  render() {
    return (
      <>
        <div className="section-title text-center">
          <h2>Why Choose Career Mapper?</h2>
          <div className="accordion-body text-center">
            Ever since opening our doors, we’ve helped countless individuals
            achieve their career and life dreams. We are committed to providing
            excellent education, training and resources so that our students
            will thrive in today’s competitive world. With flexible service
            options and great counselors, we’re sure you’ll be satisfied with
            your progress at Career Mapper.
          </div>
          <button className="btn btn-primary">See Full Report </button>
        </div>
      </>
    );
  }
}
export default WhyCareerMapper;
