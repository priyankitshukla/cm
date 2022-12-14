import Popup from "reactjs-popup";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Modal = () => (
  <Popup
    trigger={
      <a className="nav-link" href="#">
        LOGIN
      </a>
    }
    modal
  >
    <span style={{ background: "white" }}> Login/Register </span>
  </Popup>
);

class Header extends React.Component {
  componentDidMount(props) {
    console.log("header page.");
  }
  render() {
    return (
      <>
        <header className="top-navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={require("./images/logo.png")} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbars-host"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-bs-target="#navbars-host"
                data-bs-toggle="collapse"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbars-host">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link dropdown-toggle">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown-a"
                      data-toggle="dropdown"
                    >
                      FOR STUDENTS
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdown-a">
                      <Link to="/classeightnine">Class 8-9 </Link>
                      <br></br>

                      <Link to="/classtentwelve">Class 10-12 </Link>
                      <br></br>

                      <Link to="/graduate">Graduates </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown-a"
                      data-toggle="dropdown"
                    >
                      Resources{" "}
                    </a>
                    <div
                      className="dropdown-menu "
                      style={{ minWidth: `80rem` }}
                      aria-labelledby="dropdown-a"
                    >
                      <div className="col-md-12 row ">
                        <div className="col-md-2">
                          <Link to="/actuarialsciences">
                            Actuarial Sciences{" "}
                          </Link>
                          <br></br>
                          <Link to="/animationgraphics">
                            {" "}
                            Animation & Graphics{" "}
                          </Link>
                          <br></br>

                          <Link to="/appliedarts"> Applied Arts </Link>
                          <br></br>
                          <Link to="/aviation">Architecture</Link>
                          <br></br>
                          <Link to="/cabincrew">Cabin Crew</Link>
                          <br></br>
                          <Link to="/civilservices"> Civil Services </Link>

                          <br></br>
                          <Link to="/commerceaccounts">
                            Commerce & Accounts
                          </Link>
                          <br></br>
                          <Link to="/commerceaccounts">
                            Commerce & Accounts
                          </Link>
                          <br></br>
                          <Link to="/computerapplicationit">
                            Computer Application & IT
                          </Link>
                          <br></br>
                          <Link to="/defense">Defense</Link>
                          <br></br>
                          <Link to="/design">Design</Link>
                          <br></br>
                          <Link to="/distributionlogistics">
                            Distribution & Logistics
                          </Link>
                          <br></br>
                          <Link to="/economics">Economics</Link>
                          <br></br>
                          <Link to="/educationtraining">
                            Education & Training
                          </Link>
                          <br></br>
                          <Link to="/entrepreneurship">Entrepreneurship</Link>
                          <br></br>
                          <Link to="/ethicalhacking"> Ethical Hacking</Link>
                          <br></br>
                          <Link to="/financebanking"> Finance & Banking</Link>
                        </div>
                        <div className="col-md-2">
                          <br></br>
                          <Link to="/foodagriculture"> Food & Agriculture</Link>

                          <br></br>
                          <Link to="/hotelmanagement"> Hotel Management</Link>
                          <br></br>
                          <Link to="/law"> Law</Link>

                          <br></br>
                          <Link to="/management"> Management</Link>
                          <br></br>
                          <Link to="/markettingmanagement"> Marketting & Advertising</Link>
                          <br></br>
                          <Link to="/mathstatistics"> Maths & Statistics</Link>
                          <br></br>
                          <Link to="/medicine"> Medicine</Link>
                          <br></br>
                          <Link to="/marchantnavy"> Marchant Navy</Link>
                          
                          <br></br>
                          <Link to="/nutritionfitness">Nutrition & Fitness</Link>
                          <br></br>
                          <Link to="/performingarts">Performing Arts{" "}</Link>
                          <br></br>
                          <Link to="/physicalscience">Physical Science</Link>
                          <br></br>
                          <Link to="/sales">Sales{" "}</Link>
                          <br></br>
                          <Link to="/socialscienceshumanities">SocialSciencesHumanities{" "}</Link>
                          <br></br>
                          <Link to="/social services">Social Services{" "}</Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown-a"
                      data-toggle="dropdown"
                    >
                      TEAM{" "}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdown-a">
                      <Link to="/team  "> Team </Link>
                      <br></br>
                      <Link to="/applyforjob"> Apply for Job </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/contactus">
                      Contact US
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    {
                      /* <a
                      className="hover-btn-new log orange"
                      href="#"
                      data-toggle="modal"
                      data-target="#login"
                    >
                      <span>Login</span>
                    </a> */
                      <Modal></Modal>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Outlet></Outlet>
      </>
    );
  }
}

export default Header;
