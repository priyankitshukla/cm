import logo from "./logo.svg";
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

function App() {
  return (
    <div className="App">
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

      <Carousel showThumbs={false}>
        <div>
          <img src={require("./images/slider-01.jpg")} />
          <h2>
            <strong>Your Source for </strong>Personal Growth
          </h2>
          <p class="lead">Stream Selection and Career Planning. </p>
          <a href="#">
            <span>Enquire Now</span>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#">
            <span>Read More</span>
          </a>{" "}
        </div>
        <div>
          <img src={require("./images/slider-02.jpg")} />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>

      <div id="plan" className="section lb">
        <div className="container">
          <div className="section-title text-center">
            <h3>Our Programs</h3>
          </div>

          <div className="row">
            <div className="col-md-12 offset-md-0">
              <div className="message-box">
                <ul className="nav nav-pills nav-stacked" id="myTabs">
                  <li>
                    <a className="active" href="#tab1" data-toggle="pill">
                      Stream & Subject Selection
                    </a>
                  </li>
                  <li>
                    <a href="#tab2" data-toggle="pill">
                      Career Selection & Planning
                    </a>
                  </li>
                  <li>
                    <a href="#tab2" data-toggle="pill">
                      Career Selection & Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="invis"></hr>

          <div className="row">
            <div className="col-md-12">
              <div className="tab-content">
                <div className="tab-pane active fade show" id="tab1">
                  <div className="row text-center">
                    <div className="col-md-4">
                      <div className="pricing-table pricing-table-highlighted">
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
                    <div className="col-md-4">
                      <div className="pricing-table pricing-table-highlighted">
                        <div className="pricing-table-header grd1">
                          <h2>Test Category</h2>
                          <h2>B</h2>
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

                    <div className="col-md-4">
                      <div className="pricing-table pricing-table-highlighted">
                        <div className="pricing-table-header grd1">
                          <h2>Test Category</h2>
                          <h2>C</h2>
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
                  </div>
                </div>

                <div className="tab-pane fade" id="tab2">
                  <div className="row text-center">
                    <div className="col-md-4">
                      <div className="pricing-table pricing-table-highlighted">
                        <div className="pricing-table-header grd1">
                          <h2>$477</h2>
                          <h3>Year</h3>
                        </div>
                        <div className="pricing-table-space"></div>
                        <div className="pricing-table-features">
                          <p>
                            <i className="fa fa-envelope-o"></i>{" "}
                            <strong>250</strong> Email Addresses
                          </p>
                          <p>
                            <i className="fa fa-money"></i>{" "}
                            <strong>125GB</strong> of Storage
                          </p>
                          <p>
                            <i className="fa fa-database"></i>{" "}
                            <strong>140</strong> Databases
                          </p>
                          <p>
                            <i className="fa fa-link"></i> <strong>60</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i className="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div className="pricing-table-sign-up">
                          <a href="#" className="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="pricing-table pricing-table-highlighted">
                        <div className="pricing-table-header grd1">
                          <h2>$485</h2>
                          <h3>Year</h3>
                        </div>
                        <div className="pricing-table-space"></div>
                        <div className="pricing-table-features">
                          <p>
                            <i className="fa fa-envelope-o"></i>{" "}
                            <strong>150</strong> Email Addresses
                          </p>
                          <p>
                            <i className="fa fa-money"></i>{" "}
                            <strong>65GB</strong> of Storage
                          </p>
                          <p>
                            <i className="fa fa-database"></i>{" "}
                            <strong>60</strong> Databases
                          </p>
                          <p>
                            <i className="fa fa-link"></i> <strong>30</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i className="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div className="pricing-table-sign-up">
                          <a href="#" className="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="pricing-table pricing-table-highlighted">
                        <div className="pricing-table-header grd1">
                          <h2>$500</h2>
                          <h3>Year</h3>
                        </div>
                        <div className="pricing-table-space"></div>
                        <div className="pricing-table-features">
                          <p>
                            <i className="fa fa-envelope-o"></i>{" "}
                            <strong>250</strong> Email Addresses
                          </p>
                          <p>
                            <i className="fa fa-money"></i>{" "}
                            <strong>125GB</strong> of Storage
                          </p>
                          <p>
                            <i className="fa fa-database"></i>{" "}
                            <strong>140</strong> Databases
                          </p>
                          <p>
                            <i className="fa fa-link"></i> <strong>60</strong>{" "}
                            Domains
                          </p>
                          <p>
                            <i className="fa fa-life-ring"></i>{" "}
                            <strong>24/7 Unlimited</strong> Support
                          </p>
                        </div>
                        <div className="pricing-table-sign-up">
                          <a href="#" className="hover-btn-new orange">
                            <span>Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial></Testimonial>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
