import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Testimonial from "../Testimonial";
import "../App.css";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/versions.css";
import "../css/responsive.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "react-tabs/style/react-tabs.css";

import LoadingScreen from 'react-loading-screen';

class Home extends React.Component {
    render(){
        return(
            <>
             <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          renderIndicator={false}
        >
          <div>
            <img src={require("../images/slider-01.jpg")} />
            <h2>
              <strong>Your Source for </strong>Personal Growth
            </h2>
            <p className="lead">Stream Selection and Career Planning. </p>
            <button type="button" className="btn btn-primary mr-2">
              Enquire Now
            </button>

            <button type="button" className="btn btn-secondary">
              Read More...
            </button>
          </div>
          <div>
            <img src={require("../images/slider-02.jpg")} />
            <h2>
              <strong>Your Source for </strong>Personal Growth
            </h2>
            <p className="lead">Stream Selection and Career Planning. </p>
            <button type="button" className="btn btn-primary  mr-2">
              Enquire Now
            </button>
            <button type="button" className="btn btn-secondary">
              Read More...
            </button>{" "}
          </div>
        </Carousel>

        <div id="plan" className="section lb">
          <h1>Our Programs</h1>
          <div className="container">
            <hr className="invis"></hr>
            <>
              {" "}
              <Tabs>
                <TabList>
                  <Tab>Stream & Subject Selection</Tab>
                  <Tab>Career Selection & Planning</Tab>
                  <Tab>Career Selection & Development</Tab>
                </TabList>

                <TabPanel>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="tab-content">
                        <div className="tab-pane active fade show" id="tab1">
                          <div className="row text-center">
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category A</p>
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
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category B</p>
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
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category C</p>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="tab-content">
                        <div className="tab-pane active fade show" id="tab1">
                          <div className="row text-center">
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category A</p>
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
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category B</p>
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
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category C</p>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="tab-content">
                        <div className="tab-pane active fade show" id="tab1">
                          <div className="row text-center">
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category A</p>
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
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category B</p>
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
                            <div className="col-sm-4">
                              <div className="pricing-table pricing-table-highlighted">
                                <p>Test Category C</p>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </>
          </div>
        </div>
        <Testimonial></Testimonial>
            </>
        );
    }
}

export default Home;