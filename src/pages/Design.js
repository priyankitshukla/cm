import React from "react";
import ResourceBottom from "./ResourceBottom";
class Design extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Design</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Career in design is for people who have a creative outlook and are
              able to form innovative connections between colors, shape,
              materials and textures. Designers are required in nearly every
              field whether in designing cars, clothes, buildings, products,
              logos, theatre sets, merchandise sets, landscapes etc. While most
              indulge in computer-aided designs, a basic fine art is also
              intrinsic to designing. Design has wide variety of sub fields
              including graphic designing, fashion designing, interior
              designing, web designing, set designing, industrial designing,
              visual merchandise designing etc. Each of these categories
              requires a domain specialization. One can select their area of
              specialization on the basis of their interest, skill and aptitude.
              Most institutes have an entrance exam for admission and
              competition for the premier institutes like NID and NIFT is quite
              high. In order to build a career in design one should have a
              bachelor's or master's degree in the particular field. Designers
              can find jobs in Fashion Houses, Media Houses, Automobile
              Industry, Technology Firms, Web Designing Firms etc. A lot of
              designers also pursue their career as a Freelancer.
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
          <ResourceBottom pageName="Design"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Design;
