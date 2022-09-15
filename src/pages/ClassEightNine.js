import React from "react";

import FAQ from "./FAQ";
import WhyCareerMapper from "./WhyCareerMapper";

class ClassEightNine extends React.Component {
  componentDidUpdate(props) {
    console.log("class eight nine");
  }
  render() {
    return (
      <div class="container">
        <div id="classeightnine">
          <div className="all-title-box">
            <div className="container text-center">
              <h1>
                Moving You Forward
                <span className="m_1">
                  Stream Selection and Planning for Class 8-9.
                </span>
              </h1>
              <a href="#" className="hover-btn-new">
                <span>Enquire Now</span>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" className="hover-btn-new">
                <span>Read More</span>
              </a>
            </div>
          </div>

          <div id="overviews" className="section wb" style={{ padding: 0 }}>
            <div className="container">
              <div className="section-title row text-center">
                <div className="col-md-8 offset-md-2">
                  <h1>Let's help you discover your perfect stream</h1>
                </div>
              </div>

              <div id="plan">
                <div className="container">
                  <div
                    className="section-title text-center"
                    style={{ padding: 0 }}
                  >
                    <h3>Our Programs</h3>
                  </div>

                  <hr className="invis"></hr>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="tab-content">
                        <div className="tab-pane active fade show" id="tab1">
                          <div className="row text-center">
                            <div className="col-md-6">
                              <div className="pricing-table">
                                <div className="pricing-table-header grd1">
                                  <h2>Test Category</h2>
                                  <h2>A</h2>
                                </div>
                                <div className="pricing-table-space"></div>
                                <div className="pricing-table-features">
                                  <p>
                                    <i className="fa fa-calendar-times-o"></i>{" "}
                                    <strong>Duration</strong> 1hr
                                  </p>
                                  <p>
                                    <i className="fa fa-money"></i>{" "}
                                    <strong>Price</strong> 5000
                                  </p>
                                  <p>
                                    <i className="fa-location-arrow"></i>{" "}
                                    <strong>Location</strong> Taj Nagri
                                  </p>
                                  <p>
                                    <i className="fa fa-link"></i>{" "}
                                    <a href="">Full Detail</a>{" "}
                                  </p>
                                </div>
                                <div className="pricing-table-sign-up">
                                  <a href="#" className="hover-btn-new orange">
                                    <span>Book Now</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="pricing-table pricing-table-highlighted">
                                <div className="testi-meta">
                                  <img
                                    src={require("../images/test_side_image.png")}
                                    alt=""
                                    className="img-fluid"
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row text-center"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WhyCareerMapper></WhyCareerMapper>
          <div className="section-title text-center">
            <h2>Frequently asked questions</h2>
          </div>

          <FAQ></FAQ>
        </div>
      </div>
    );
  }
}

export default ClassEightNine;
