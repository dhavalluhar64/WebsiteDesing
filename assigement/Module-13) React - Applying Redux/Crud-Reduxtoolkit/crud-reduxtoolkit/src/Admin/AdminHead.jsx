import React from "react";
import { NavLink } from "react-router-dom";

function AdminHead() {
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
                <NavLink
                  to={"/Admindashbord"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AdminMNG">
                  ProductMNG
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Admincreate">
                  CreatePost
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input type="search" className="rounde mx-2" />

              <button className="btn btn-outline-success">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AdminHead;
