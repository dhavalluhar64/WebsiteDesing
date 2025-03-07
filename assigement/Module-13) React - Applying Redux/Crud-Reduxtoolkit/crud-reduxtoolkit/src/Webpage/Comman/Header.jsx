import React, { useEffect } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("loginID");
    localStorage.removeItem("loginName");
    localStorage.removeItem("loginImage");

    toast.success("Logout Successfull");
    redirect("/");
    return;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Redux-Toolkit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/RegistrationPage">
                  Link
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {(() => {
                if (JSON.parse(localStorage.getItem("loginName"))) {
                  return (
                    <>
                      <NavLink
                        className="nav-item nav-link"
                        style={{
                          height: "50px",
                          marginTop: "10px",
                          marginRight: "5px",
                        }}
                      >
                        hello..{JSON.parse(localStorage.getItem("loginName"))}
                      </NavLink>
                    </>
                  );
                }
              })()}

              {(() => {
                if (JSON.parse(localStorage.getItem("loginImage"))) {
                  return (
                    <>
                      <NavLink className="nav-item nav-link" to="/UserUpDate">
                        <img
                          className="userLoginPro"
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50px",
                          }}
                          src={JSON.parse(localStorage.getItem("loginImage"))}
                          alt="userLogin"
                        />
                      </NavLink>
                    </>
                  );
                }
              })()}

              {(() => {
                if (JSON.parse(localStorage.getItem("loginID"))) {
                  return (
                    <NavLink
                      to="/"
                      className="btn btn-primary my-auto m-2"
                      onClick={() => logoutUser()}
                    >
                      Logout
                    </NavLink>
                  );
                } else {
                  return (
                    // <NavLink
                    //   to="/Loginpage"
                    //   className="btn btn-primary"
                    //   type="submit"
                    // >
                    //   Login
                    // </NavLink>

                    <NavLink
                      to="/Loginpage"
                      className="btn btn-primary my-auto"
                    >
                      Login
                    </NavLink>
                  );
                }
              })()}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
