import React from "react";
import ResourceBottom from "./ResourceBottom";
class SocialServices extends React.Component {
  render() {
    return (
      <>
        <div className="container" style={{ backgroundColor: `white` }}>
          <div className="actuarialscience">
            <div className="container text-center">
              <h1>Social Services</h1>
            </div>
          </div>
          <br></br>
          <p className="">
            <span>
              Social workers work with populations of all ages and may serve
              various cultural groups. Social workers provide a wide range of
              services at the national, state and domestic levels. Depending on
              their specialty, one may work in schools, government agencies,
              hospitals, mental health clinics, community centre and career
              centres. Social workers identify those who need help, assess their
              situations and develop plans to address their needs. People
              interested in social work should be empathetic and compassionate
              towards other people with an urge to alleviate their problems.
              Career as a social worker is at its prime with various
              organizations looking for trained professionals in this domain.
              Career opportunities exist in both government as well as private
              sector. One may work with National or International NGO's or
              Industrial or Corporate Sector. Bachelor or Master's degree in
              Social Work is recommended to practice social work. Graduates from
              any field may enroll for masters degree in social work but
              psychology, sociology, economics, and political science are
              recommended. Many institutions also offer M.Phil. and PhD
              programmes in Social Work. The top recruiters include NGOs
              (National or International ) like Green Peace, Smile Foundation,
              Aashayein etc. Schools and hospitals (Apollo, Maxx, Fortis etc.)
              also generate employment in these fields. Trending Field: Child
              social workers, Family social workers, Substance abuse social
              workers, Medical and public health social workers.
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
          <ResourceBottom pageName="Social Services"></ResourceBottom>
        </div>
      </>
    );
  }
}

export default SocialServices;
