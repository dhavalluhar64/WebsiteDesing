import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Admin_Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("/adminlogin");
      // toast.info(`Please Login first`);
      toast("🔒 Please Login first!", {
        position: "top-right",
        className: "toast-message",
      });
    }
  }, [navigate]);

  const LogOutData = () => {
    console.log("logout");

    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    console.log("Logout successful");
    toast.success("Logout successful");

    navigate("/adminlogin");
  };

  return (
    <>
      <div>
        {/* Topbar Start */}

        <div className="container-fluid bg-warning bg-gradient text-dark py-3 px-lg-5 d-none d-lg-block">
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
              <a href className="navbar-brand">
                <h1 className="text-uppercase text-primary mb-1">Dashboard</h1>
              </a>
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
                  <NavLink to="/DashBorde" className="nav-item nav-link">
                    Home
                  </NavLink>

                  <NavLink to="/usermanage" className="nav-item nav-link">
                    UserManage
                  </NavLink>

                  <NavLink to="/carbookingMng" className="nav-item nav-link">
                    CarBookingMNG
                  </NavLink>

                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Service
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <NavLink to="/serviceMNG" className="nav-item nav-link">
                        Service MNG
                      </NavLink>

                      <NavLink to="/AdserviceAdd" className="nav-item nav-link">
                        Service Add
                      </NavLink>
                    </div>
                  </div>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Car Listing
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <NavLink to="/AdCarlistingMNG" className="dropdown-item">
                        Car Listing manage
                      </NavLink>

                      <NavLink to="/AdCarlistingAdd" className="dropdown-item">
                        Car Listing Add
                      </NavLink>
                    </div>
                  </div>

                  {(() => {
                    if (localStorage.getItem("userId")) {
                      return (
                        <>
                          <NavLink className="nav-item nav-link">
                            Welcome.{localStorage.getItem("userName")}
                          </NavLink>
                        </>
                      );
                    }
                  })()}

                  {(() => {
                    if (localStorage.getItem("userId")) {
                      return (
                        <NavLink
                          to="/adminlogin"
                          className="nav-item nav-link"
                          onClick={LogOutData}
                        >
                          Logout
                        </NavLink>
                      );
                    } else {
                      return (
                        <NavLink to="/adminlogin" className="nav-item nav-link">
                          Login
                        </NavLink>
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
    </>
  );
};

export default Admin_Header;
