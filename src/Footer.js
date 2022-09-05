import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="copyrights">
          <div className="container">
            <div className="footer-distributed">
              <div className="footer-center">
                <p className="footer-company-name">
                  All Rights Reserved. &copy; 2022 <a href="#">CAREERMAPPER</a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="#" id="scroll-to-top" className="dmtop global-radius">
          <i className="fa fa-angle-up"></i>
        </a>
      </>
    );
  }
}

export default Footer;
