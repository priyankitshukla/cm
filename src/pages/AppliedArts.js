import React from "react";
import ResourceBottom from "./ResourceBottom";
class AppliedArts extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Applied Arts</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Applied Arts is the art of producing objects, which are aesthetic,
              utilitarian and also easy to use for people. Hence, these artists
              apply creative arts to practical use. It is about combining
              artistic vision with commercial need. Work of an applied artist
              can be seen in most basic objects such as table, chair, utensils
              and also in complex objects like smart phones, microwave, food
              processor amongst many others. Applied arts is often confused with
              fine arts. Fine Arts forms the basis for applied arts but it
              requires much more than that. Various fields in applied arts
              include graphic arts, architecture, industrial designing,
              decorative arts, jewelry, photography etc. Selection to some
              universities for bachelor of fine arts and applied arts is made on
              the basis of an aptitude test consisting of drawing, creative
              composition in painting, sculpture in clay and graphic design.
              There are many universities that provide bachelor's degree in
              applied arts or one can also pursue bachelors in fine arts with
              honors in applied arts. Job prospects are good after graduation.
              Applied Arts professionals take up jobs in sectors like animation,
              advertising companies, dance studios, television, software
              companies, magazines, digital media etc. Trending Field:
              Animation, Graphic Designer, Advertising etc.
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
          <ResourceBottom pageName="Applied Arts"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default AppliedArts;
