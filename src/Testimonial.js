import React from "react";

class Testimonial extends React.Component {
  render() {
    return (
      <div id="testimonials" className="parallax section db parallax-off">
        <div className="container">
          <div className="section-title text-center">
            <h3>Success Stories</h3>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="testi-carousel owl-carousel owl-theme">
                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img
                      src="images/ayusha.jpeg"
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
                      Your support is the main reason for me to choose medical
                      field as my career. Thanks a lot.
                    </p>
                  </div>
                </div>

                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img
                      src="images/kunalgupta.jpg"
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
                      Really... Career Mapper helped me in mapping my career as
                      data scientist. Thank you guys...keep it up.
                    </p>
                  </div>
                </div>

                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img
                      src="images/DakshitaGarg.jpg"
                      alt=""
                      className="img-fluid "
                    ></img>
                    <h4>Dakshita Garg</h4>
                  </div>
                  <div className="desc">
                    <h3>
                      <i className="fa fa-quote-left"></i> Great & Talented
                      Team!
                    </h3>
                    <p className="lead">
                      Thanks to you. I was able to choose my passion. I will
                      always appreciate your help.{" "}
                    </p>
                  </div>
                </div>
                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img
                      src="images/testi_01.png"
                      alt=""
                      className="img-fluid"
                    ></img>
                    <h4>James Fernando </h4>
                  </div>
                  <div className="desc">
                    <h3>
                      <i className="fa fa-quote-left"></i> Wonderful Support!
                    </h3>
                    <p className="lead">
                      They have got my project on time with the competition with
                      a sed highly skilled, and experienced & professional team.
                    </p>
                  </div>
                </div>

                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img
                      src="images/testi_02.png"
                      alt=""
                      className="img-fluid"
                    ></img>
                    <h4>Jacques Philips </h4>
                  </div>
                  <div className="desc">
                    <h3>
                      <i className="fa fa-quote-left"></i> Awesome Services!
                    </h3>
                    <p className="lead">
                      Explain to you how all this mistaken idea of denouncing
                      pleasure and praising pain was born and I will give you
                      completed.
                    </p>
                  </div>
                </div>

                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img
                      src="images/testi_03.png"
                      alt=""
                      className="img-fluid"
                    ></img>
                    <h4>Venanda Mercy </h4>
                  </div>
                  <div className="desc">
                    <h3>
                      <i className="fa fa-quote-left"></i> Great & Talented
                      Team!
                    </h3>
                    <p className="lead">
                      The master-builder of human happines no one rejects,
                      dislikes avoids pleasure itself, because it is very pursue
                      pleasure.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
