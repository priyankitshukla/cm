import "./App.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/versions.css";
import "./css/responsive.css";
import { Carousel } from "react-responsive-carousel";
import Header from "./Header";

import "./js/custom.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Audio } from "react-loader-spinner";
import React from "react";

import LoadingScreen from 'react-loading-screen';




class App extends React.Component {

  componentDidMount() {
    this.props.hideLoader();
  }  
  render(){
  return (
    <div className="App">
       <LoadingScreen
    loading={true}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    logoSrc='/logo.png'
    text='Here an introduction sentence (Optional)'
  > 
    // ...
    // here loadable content
    // for example, async data
    //<div>Loadable content</div>
  </LoadingScreen>
      <Header></Header>
      

      <div
        className="modal fade"
        id="login"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header tit-up">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Customer Login</h4>
            </div>
            <div className="modal-body customer-box">
              <ul className="nav nav-tabs">
                <li>
                  <a className="active" href="#Login" data-toggle="tab">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#Registration" data-toggle="tab">
                    Registration
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="Login">
                  <form role="form" className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          className="form-control"
                          id="email1"
                          placeholder="Name"
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Email"
                          type="email"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-light btn-radius btn-brd grd1"
                        >
                          Submit
                        </button>
                        <a className="for-pwd" href="">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-pane" id="Registration">
                  <form role="form" className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          className="form-control"
                          placeholder="Name"
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          type="email"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          className="form-control"
                          id="mobile"
                          placeholder="Mobile"
                          type="email"
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          type="password"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-10">
                        <button
                          type="button"
                          className="btn btn-light btn-radius btn-brd grd1"
                        >
                          Save &amp; Continue
                        </button>
                        <button
                          type="button"
                          className="btn btn-light btn-radius btn-brd grd1"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        renderIndicator={false}
      >
        <div>
          <img src={require("./images/slider-01.jpg")} />
          <h2>
            <strong>Your Source for </strong>Personal Growth
          </h2>
          <p class="lead">Stream Selection and Career Planning. </p>
          <button type="button" class="btn btn-primary mr-1">
            Enquire Now
          </button>

          <button type="button" class="btn btn-secondary">
            Read More...
          </button>
        </div>
        <div>
          <img src={require("./images/slider-02.jpg")} />
          <h2>
            <strong>Your Source for </strong>Personal Growth
          </h2>
          <p class="lead">Stream Selection and Career Planning. </p>
          <button type="button" class="btn btn-primary">
            Enquire Now
          </button>
          <button type="button" class="btn btn-secondary">
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
                <div class="row">
                  <div class="col-md-12">
                    <div class="tab-content">
                      <div class="tab-pane active fade show" id="tab1">
                        <div class="row text-center">
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
                <div class="row">
                  <div class="col-md-12">
                    <div class="tab-content">
                      <div class="tab-pane active fade show" id="tab1">
                        <div class="row text-center">
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
                <div class="row">
                  <div class="col-md-12">
                    <div class="tab-content">
                      <div class="tab-pane active fade show" id="tab1">
                        <div class="row text-center">
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
      <Footer></Footer>
    </div>
  );
}
}

export default App;
