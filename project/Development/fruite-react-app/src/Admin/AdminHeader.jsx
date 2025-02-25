import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminHeader() {
  const redirect = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminId")) {
      redirect("/AdminLoginPage");
      toast("🔒 Please Login first!", {
        position: "top-right",
        className: "toast-message",
      });
    }
  }, [redirect]);

  const AdminLogout = () => {
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminName");
    toast.success("Logout successful");
    redirect("/AdminLoginPage");
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
      <div className="container-fluid position-sticky top-0 ">
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
                <NavLink
                  to="/AdminDashboard"
                  className="nav-item nav-link active"
                >
                  Home
                </NavLink>
                <NavLink to="/AdminUserMNG" className="nav-item nav-link">
                  Usermange
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
                    <NavLink to="/AddTocartAdmin" className="dropdown-item">
                      Fruit&Veg Add
                    </NavLink>
                    <NavLink to="/AdminFruiteVegMng" className="dropdown-item">
                      Fruit&VegMNG
                    </NavLink>
                    <NavLink to="/AdminBillingMNG" className="dropdown-item">
                      ChackoutMNG
                    </NavLink>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div className="d-flex m-3 me-0">
                {(() => {
                  if (localStorage.getItem("adminId")) {
                    return (
                      <NavLink className="my-auto">
                        Welcome..{localStorage.getItem("adminName")}
                      </NavLink>
                    );
                  }
                })()}

                {(() => {
                  if (localStorage.getItem("adminId")) {
                    return (
                      <NavLink
                        to="/AdminLoginPage"
                        className="my-auto m-2"
                        onClick={() => AdminLogout()}
                      >
                        <i className="fa-solid fa-right-from-bracket fa-2x" />
                      </NavLink>
                    );
                  } else {
                    <NavLink to="/AdminLoginPage" className="my-auto">
                      <i className="fas fa-user fa-2x" />
                    </NavLink>;
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

export default AdminHeader;

<i class="fa-solid fa-right-from-bracket"></i>;
