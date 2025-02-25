import React, { useContext, useState } from "react";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import styles from "../Admin/cssmodule/adminlogin.module.css";
import { CartContext } from "../Website/Layout/Store/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const { AdminLogin } = useContext(CartContext);

  const redirect = useNavigate();

  const [admilogin, setAdminlogin] = useState({
    email: "",
    password: "",
  });

  const handleAdminChang = async (e) => {
    const { name, value } = e.target;

    setAdminlogin({ ...admilogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!admilogin.email.trim() || !admilogin.password.trim()) {
      toast.error(`Please fill in all fields`);

      return;
    }

    try {
      const res = await AdminLogin(admilogin.email);

      console.log(res.data);

      // Email match
      if (res.data.length === 0) {
        toast.error(`Email does not exist.`);
        return;
      }

      // password match
      const admin = res.data[0];

      if (admin.password !== admilogin.password) {
        toast.error(`Password dose not exist.`);
        return;
      }

      localStorage.setItem("adminId", admin.id);
      localStorage.setItem("adminName", admin.name);
      toast.success("Admin Login successful");
      setAdminlogin({
        email: "",
        password: "",
      });

      redirect("/AdminDashboard");
    } catch (error) {
      console.log(`Error Adminlogin Page : ${error.message}`);
    }
  };

  return (
    <>
      <MDBContainer className={`my-5 ${styles["gradient-form"]}`}>
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column ms-5">
                <div className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: "185px" }}
                    alt="logo"
                  />
                  <h4 className="mt-1 mb-5 pb-1">Admin login</h4>
                </div>

                <p>Please login to your account</p>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                  name="email"
                  value={admilogin.email}
                  onChange={handleAdminChang}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  name="password"
                  value={admilogin.password}
                  onChange={handleAdminChang}
                />

                <div className="text-center pt-1 mb-5 pb-1">
                  <button
                    type="submit"
                    className={`mb-4 w-100 ${styles["gradient-custom-2"]}`}
                  >
                    Sign in
                  </button>
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>

                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Don't have an account?</p>
                  <MDBBtn outline className="mx-2" color="danger">
                    Danger
                  </MDBBtn>
                </div>
              </div>
            </form>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div
              className={`d-flex flex-column  justify-content-center ${styles["gradient-custom-2"]} h-100 mb-4`}
            >
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default AdminLoginPage;
