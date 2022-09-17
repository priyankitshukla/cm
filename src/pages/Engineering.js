import React from "react";
import ResourceBottom from "./ResourceBottom";
class Engineering extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Engineering</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Engineering is one of the most versatile degrees spanning multiple
              domains ranging from aerospace to automobiles to healthcare to
              business & many more. Engineers are at the center of innovation
              and one of the most sought after professionals in the country.
              They provide technological solutions to the problems, issues and
              ideas that affect every area of our lives and are responsible for
              technological advancements. Depending upon one's interest, one can
              specialize in multiple fields of engineering such as Electronics,
              Computer Science, Mechanical, Civil & Aerospace amongst others.
              With increasing competition in the field, huge numbers of
              engineering colleges have mushroomed across the country. However,
              competition for the premier colleges remains extremely high. A
              four year Bachelor's degree in Engineering can be quite rewarding
              if completed from the marque colleges of the country. In order to
              build a career in Engineering and Technology, one should have a
              combination of PCM (Physics, Chemistry and Mathematics) at the
              10+2 level. An engineering degree from the coveted colleges opens
              doors for some of the top companies in the world like Google,
              Facebook, Amazon, Microsoft amongst others recruiters. Trending
              fields: Computer Science Engineering, Electronic & Communication
              Engineering, Sound Engineering, Marine Engineering
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
          <ResourceBottom pageName="Engineering"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default Engineering;
