import React from "react";
import MapCompnent from "./MapComponent";
class ContactUs extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <div className="all-title-box3">
            <div className="container text-center">
              <br></br>
              <br></br>
              <br></br>
              <h1>Contact Us</h1>
            </div>
          </div>
          <div>
            {" "}
            <span>&#9993;</span> CareerMappers4u@gmail.com
          </div>{" "}
          <div>
            {" "}
            <span>&#9742;</span> +91 7533993339
          </div>
          <div>
            <p>
              23- First Floor, Parsvnath Panchavati, Tajnagari Phase-2,
              Fatehabad Road, Agra
            </p>
          </div>
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
          {/* <MapCompnent></MapCompnent> */}
        </div>
      </>
    );
  }
}
export default ContactUs;
