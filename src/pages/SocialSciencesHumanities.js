import React from "react";
import ResourceBottom from "./ResourceBottom";
class SocialSciencesHumanities extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Social Sciences & Humanities</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Social Sciences and Humanity is a science that deals with
              understanding various aspects of human development. It includes a
              vast domain of career options such as psychologist, sociologist,
              historian, political scientist, archaeologist, anthropologist
              amongst others. While a career in engineering and medical field is
              becoming a traditional and obscure concept, competition in these
              fields is fast increasing. Securing a seat in good social science
              colleges requires outstanding marks at the +2 level. On the other
              hand some universities are conducting entrance tests and personal
              interviews as a selection process. Although it will be quite
              helpful to take up stream of humanities/social sciences/arts in
              10+2 examinations, but there has also been an influx of science
              and commerce students in the field of social sciences at the under
              graduation level. A Bachelor's degree in psychology, sociology,
              political sciences and anthropology is a benchmark in career
              qualification. One may further go for masters degree and PhD for
              better career prospects. Jobs opportunities can be found in
              Private Sector, Government Sector, Judiciary sector amongst others
              depending upon the area of specialization. Trending Field:
              Counsellor, Archaeologist, Anthropologist.
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
          <ResourceBottom pageName="Social Sciences & Humanities"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default SocialSciencesHumanities;
