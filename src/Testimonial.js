import React from "react";
import { Carousel } from "react-responsive-carousel";

class Testimonial extends React.Component {
  render() {
    return (
      <div id="testimonials" className="parallax section db parallax-off">
        <div className="container">
          <div className="section-title text-center">
            <h3>Success Stories</h3>
          </div>

          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          
            <div className="testimonial clearfix">
              <div className="testi-meta">
                <img
                  src={require("./images/anuja.jpg")}
                  alt=""
                  className="img-fluid"
                ></img>
                <h4>Anuja Maseeh</h4>
              </div>
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left"></i> Wonderful Support!
                </h3>
                <p className="lead">
                  Your support is the main reason for me to choose medical field
                  as my career. Thanks a lot.
                </p>
              </div>
            </div>

            <div className="testimonial clearfix">
              <div className="testi-meta">
                <img
                  src={require("./images/kunalgupta.jpg")}
                  alt=""
                  className="img-fluid"
                ></img>
                <h4>Kunal Gupta </h4>
              </div>
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left"></i> Awesome Services!
                </h3>
                <p className="lead">
                  Really... Career Mapper helped me in mapping my career as data
                  scientist. Thank you guys...keep it up.
                </p>
              </div>
            </div>

            <div className="testimonial clearfix">
              <div className="testi-meta">
                <img
                  src={require("./images/DakshitaGarg.jpg")}
                  alt=""
                  className="img-fluid "
                ></img>
                <h4>Dakshita Garg</h4>
              </div>
              <div className="desc">
                <h3>
                  <i className="fa fa-quote-left"></i> Great & Talented Team!
                </h3>
                <p className="lead">
                  Thanks to you. I was able to choose my passion. I will always
                  appreciate your help.{" "}
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Testimonial;
