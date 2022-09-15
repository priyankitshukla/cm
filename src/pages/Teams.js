import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/versions.css";
import "../css/responsive.css";
import "./Team.css";
import JoinOurTeam from "./JoinOurTeam";
class Teams extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <div className="all-title-box2">
            <div className="container text-center">
              <h1>OUR CHANGE MAKERS</h1>
              <a href="/team" className="hover-btn-new">
                <span>Team</span>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/applyforjob" className="hover-btn-new">
                <span>Join Our Team</span>
              </a>
            </div>
          </div>
          <br></br>
          <div class="row text-center">
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={require("../images/shrutiSharma.jpg")}
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 class="mb-0">Shruti Sharma</h5>
                <span class="small text-uppercase text-muted">
                  Career Coach<br></br>
                </span>
                <span class="small text-uppercase text-muted">
                  International Certified Career, CDA, USA Experience - 7 Years
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={require("../images/drsanjaysingh.jpg")}
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 class="mb-0">Dr. Sanjay Singh</h5>
                <span class="small text-uppercase text-muted">
                  Psychologist<br></br>
                </span>
                <span class="small text-uppercase text-muted">
                  Mental Health Professional, Experience - 20 Years
                  <br></br>
                </span>

                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={require("../images/drashwini.jpg")}
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 class="mb-0">Shruti Sharma</h5>
                <span class="small text-uppercase text-muted">
                  Astrologer<br></br>
                </span>
                <span class="small text-uppercase text-muted">
                  Child & Philosophical Counseling, Experience - 10 Years
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={require("../images/jaikabra.jpg")}
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 class="mb-0">Jai Kabra</h5>
                <span class="small text-uppercase text-muted">
                  Career Specialist of Science<br></br>
                </span>
                <span class="small text-uppercase text-muted">
                  Management, Medical, Technical Education Experience - 10 Years
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={require("../images/neerajpradhan.jpg")}
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 class="mb-0">Jai Kabra</h5>
                <span class="small text-uppercase text-muted">
                  Career Guide<br></br>
                </span>
                <span class="small text-uppercase text-muted">
                  Defence, Mathematics, Technology Career Experience - 12 Years
                </span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <JoinOurTeam></JoinOurTeam>
        </div>
      </>
    );
  }
}

export default Teams;
