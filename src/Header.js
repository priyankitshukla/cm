import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="top-navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
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
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbars-host">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
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
                      <a className="dropdown-item" href="course-grid-2.html">
                        className 8-9{" "}
                      </a>
                      <a className="dropdown-item" href="course-grid-3.html">
                        className 10-12{" "}
                      </a>
                      <a className="dropdown-item" href="course-grid-4.html">
                        Graduates{" "}
                      </a>
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
                      <a className="dropdown-item" href="course-grid-2.html">
                        Team{" "}
                      </a>
                      <a className="dropdown-item" href="course-grid-3.html">
                        Apply for Job{" "}
                      </a>
                      <a className="dropdown-item" href="course-grid-4.html">
                        Course Grid 4{" "}
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown-a"
                      data-toggle="dropdown"
                    >
                      Resources{" "}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdown-a">
                      <a className="dropdown-item" href="blog.html">
                        Actuarial Sciences{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Animation & Graphics{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Applied Arts{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Architecture{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Aviation{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Cabin Crew{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Civil Services{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Commerce & Accounts{" "}
                      </a>

                      <a className="dropdown-item" href="blog.html">
                        Computer Application & IT{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Defense{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Design{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Distribution & Logistics{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Economics{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Education & Training
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Entrepreneurship{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Ethical Hacking
                      </a>

                      <a className="dropdown-item" href="blog.html">
                        Finance & Banking{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Food & Agriculture{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Hotel Management{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Law{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Life Science & Environment{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Management
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Marketing & Advertising{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Maths & Statistics
                      </a>

                      <a className="dropdown-item" href="blog.html">
                        Media & Communication{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Medicine{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Merchant Navy{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Nutrition & Fitness{" "}
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Performing Arts{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Physical Science
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Sales{" "}
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Social Sciences & Humanities
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Social Services
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="teachers.html">
                      Teachers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact US
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a
                      className="hover-btn-new log orange"
                      href="#"
                      data-toggle="modal"
                      data-target="#login"
                    >
                      <span>Login</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;