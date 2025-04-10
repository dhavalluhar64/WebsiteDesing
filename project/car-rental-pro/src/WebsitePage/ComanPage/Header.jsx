import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const ridirect = useNavigate();

  const LogoutUser = () => {
    localStorage.removeItem("UsersLogin");
    localStorage.removeItem("UsersName");
    localStorage.removeItem("UsersPro");
    toast.success("Logout Successfull");
    ridirect("/");
  };

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-body pr-3" href>
                <i className="fa fa-phone-alt mr-2" />
                +012 345 6789
              </a>
              <span className="text-body">|</span>
              <a className="text-body px-3" href>
                <i className="fa fa-envelope mr-2" />
                info@example.com
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-body px-3" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-body px-3" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="text-body px-3" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-body px-3" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="text-body pl-3" href>
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="position-relative px-lg-5" style={{ zIndex: 9 }}>
          <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
            <NavLink to="/" className="navbar-brand">
              <h1 className="text-uppercase text-primary mb-1">Royal Cars</h1>
            </NavLink>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  About
                </NavLink>
                <NavLink to="/service" className="nav-item nav-link">
                  Service
                </NavLink>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Cars
                  </a>

                  <div className="dropdown-menu rounded-0 m-0">
                    <NavLink to="/carlisting" className="dropdown-item">
                      Car Listing
                    </NavLink>
                    <NavLink to="/cardetails" className="dropdown-item">
                      Car Detail
                    </NavLink>
                    <NavLink to="/carbooking" className="dropdown-item">
                      Car Booking
                    </NavLink>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <NavLink to="/Theteam" className="dropdown-item">
                      The Team
                    </NavLink>
                    <NavLink to="/Tstimonial" className="dropdown-item">
                      Testimonial
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/contactUs" className="nav-item nav-link">
                  Contact
                </NavLink>

                {(() => {
                  if (localStorage.getItem("UsersLogin")) {
                    return (
                      <>
                        <NavLink className="nav-item nav-link">
                          <img
                            className="userLoginPro"
                            src={localStorage.getItem("UsersPro")}
                            alt="userLogin"
                          />
                        </NavLink>
                      </>
                    );
                  }
                })()}

                {(() => {
                  if (localStorage.getItem("UsersLogin")) {
                    return (
                      <>
                        <NavLink to="/update" className="nav-item nav-link">
                          ..{localStorage.getItem("UsersName")}
                        </NavLink>
                      </>
                    );
                  }
                })()}

                {(() => {
                  if (localStorage.getItem("UsersLogin")) {
                    return (
                      <>
                        <NavLink
                          to="/"
                          className="nav-item nav-link"
                          onClick={LogoutUser}
                        >
                          Logout
                        </NavLink>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <NavLink to="/login" className="nav-item nav-link">
                          Login
                        </NavLink>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
}

export default Header;
