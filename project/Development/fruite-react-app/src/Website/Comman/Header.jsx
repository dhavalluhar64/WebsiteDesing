import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../Layout/Store/CartContext";
import { toast } from "react-toastify";

function Header() {
  const { cart } = useContext(CartContext);

  const redirect = useNavigate();

  const UserLogout = () => {
    localStorage.removeItem("RageuserId");
    localStorage.removeItem("RageuserName");
    localStorage.removeItem("RageuserPro");
    toast.success("Logout Successfull");
    redirect("/");
  };

  return (
    <>
      {/*Spinner Start 
      <div
        id="spinner"
        className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status" />
      </div>
      {/* Spinner End /*}

      {/* Navbar start */}
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                <a href="#" className="text-white">
                  123 Street, New York
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary" />
                <a href="#" className="text-white">
                  Email@Example.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </a>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary" />
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <NavLink to="/" className="nav-item nav-link active">
                  Home
                </NavLink>
                <NavLink to="/shop" className="nav-item nav-link">
                  Shop
                </NavLink>
                <NavLink to="/shopdetail" className="nav-item nav-link">
                  Shop Detail
                </NavLink>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <NavLink to="/cart" className="dropdown-item">
                      Cart
                    </NavLink>
                    <NavLink to="/Checkoutrt" className="dropdown-item">
                      Chackout
                    </NavLink>
                    <NavLink to="/Testimonial" className="dropdown-item">
                      Testimonial
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/ContactusForm" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
              <div className="d-flex m-3 me-0">
                <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary" />
                </button>

                {(() => {
                  if (localStorage.getItem("RageuserId")) {
                    return (
                      <>
                        <NavLink className="nav-item nav-link">
                          <img
                            className="userLoginPro"
                            src={localStorage.getItem("RageuserPro")}
                            alt="userLogin"
                          />
                        </NavLink>
                      </>
                    );
                  }
                })()}

                {(() => {
                  if (localStorage.getItem("RageuserId")) {
                    return (
                      <>
                        <NavLink
                          to="/updateProfile"
                          className="nav-item nav-link"
                        >
                          ..{localStorage.getItem("RageuserName")}
                        </NavLink>
                      </>
                    );
                  }
                })()}

                <NavLink to="/cart" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x" />
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                  >
                    {cart.length}
                  </span>
                </NavLink>

                {(() => {
                  if (localStorage.getItem("RageuserId")) {
                    return (
                      <NavLink
                        to="/"
                        className="my-auto m-2"
                        onClick={() => UserLogout()}
                      >
                        <i className="fa-solid fa-right-from-bracket fa-2x" />
                      </NavLink>
                    );
                  } else {
                    return (
                      <NavLink to="userlogin" className="my-auto">
                        <i className="fas fa-user fa-2x" />
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
    </>
  );
}

export default Header;
