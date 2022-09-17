import React from "react";
import ResourceBottom from "./ResourceBottom";
class FoodAgriculture extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Food & Agriculture</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              This field is simply not just about harvesting, crops, seeds,
              pesticides etc., but also delves into the aspects of trading,
              feasibility studies, food processing, marketing as well as
              economics. If the prospect of getting into the management or the
              business side of the agriculture interests you, then the
              relatively new courses like B.Sc. in Agriculture Business
              Management may interest you. Specializations in the field are -
              Food Science, Plant Science, Animal Science and Soil Science. With
              the demand for improvement of the food quality and production
              techniques it has led to a career gateway for the interested
              students to pursue this course. Candidates must have had Science
              with biology at 10+2 level for this course. Some institutions also
              have admissions via entrance tests. Top recruiting companies-
              ICRISAT, Indian Agriculture Research Institute and many more.
              Trending fields - Agriculture Scientists, Agronomy.
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
          <ResourceBottom pageName="Food & Agriculture"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default FoodAgriculture;
