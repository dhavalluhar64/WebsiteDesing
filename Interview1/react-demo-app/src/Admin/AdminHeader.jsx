import React from "react";
import { NavLink } from "react-router-dom";

function AdminHeader() {
  return (
    <>
      <div classname="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/admindash">
              AdminSide
            </NavLink>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/admindash"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/adminmanage">
                    AdminManage
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <NavLink to={"#"} className="btn btn-success mx-1">
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default AdminHeader;
