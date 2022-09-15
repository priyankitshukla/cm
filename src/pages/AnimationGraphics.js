import React from "react";
import ResourceBottom from "./ResourceBottom";
class AnimationGraphics extends React.Component {
    render(){
        return(<>
            <div className="container" style={{ backgroundColor: `white` }}>
        <div className="actuarialscience">
          <div className="container text-center">
            <h1>Actuarial Sciences</h1>
          </div>
        </div>
        <br></br>
        <p className="">
          <span>
            Actuaries are among the highest paid professionals today. Actuarial
            Sciences are often called financial astrologers applying statistical
            methods and mathematical skills to determine level of risk in
            finance, insurance and other professions. Endless opportunities,
            assurance of high salary and high job security are some of the
            reasons why actuarial sciences is emerging to be a sought after
            career option. An actuary may specialize in health insurance, life
            insurance, property and casualty insurance or pension and retirement
            benefits. It is a field that requires intense numerical and
            statistical knowledge. An actuary has a fellowship of bodies like
            Actuarial Society of India (ASI) Mumbai/ Institute of Actuaries
            London. Many universities also offer graduate degrees such as B.Sc.
            in Insurance, or in Actuarial Science and post graduate degrees like
            M.B.A. in Actuarial Science, or Diploma Courses in Actuarial
            Science. Top recruiters in this sector include Insurance Companies,
            Banking Companies, Government Bodies & Consulting Companies.
            Trending Field: Health Insurance, Life Insurance​.
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
          <ResourceBottom pageName="Animation & Graphics"></ResourceBottom>
      </div>
        
        </>);
    }
}

export default AnimationGraphics;