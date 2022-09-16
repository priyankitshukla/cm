import React from "react";
import ResourceBottom from "./ResourceBottom";
class Economics extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Economics</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Economics is the study of deep insight in economical functions at
              macro and micro levels to handle the global market. It is the
              science of economic system and theories that manages production,
              distribution and consumption of goods and services. Economics
              favours quantitative skills and critical thinkers. Fields involved
              in economics are econometrics, international economics, economic
              policy making, public finance, development economics, monitory
              economics, etc. Economics as a career provides good opportunities
              to conquer an edge in today's globalizing world. The industrial
              sector has great demand for economist at both the national and
              international level. The fastest growth in demand for economics is
              being witnessed in the private sector, especially in the areas of
              consulting and economic research. Economists are equally important
              in the government sector, entry to which is on the basis of UPSC
              examination (Civil Services in IES). Candidates aspiring for
              career in Economics must have passed the 10+2 (HSC) examination
              from recognized Board/University with Economics as one of the
              recommended subjects. One can move on to pursue Bachelor's degree
              in Economics followed by a Master's Degree or Doctor of Philosophy
              degree for prospective economists to be competitive. However, job
              prospects are open after graduation itself. The top recruiters
              include Private and Public Banks, Private and Government Research
              Centres, Multi National Companies, Consulting Companies. Trending
              Field: Business Economics, Monetary economics, Financial economics
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
          <ResourceBottom pageName="Economics"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Economics;
