import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

function Header() {
  const [user, setuser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubsciber = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });

    return () => unsubsciber();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout SuccessFul");
      navigate("/Auth");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    // to="/CrudOpation"
                    to="/errorhandle"
                  >
                    UserManage
                  </NavLink>
                </li>

                {!user ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Auth">
                      Login
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-item">
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                )}
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
