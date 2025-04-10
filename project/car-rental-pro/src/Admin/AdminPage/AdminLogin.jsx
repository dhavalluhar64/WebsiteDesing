import React, { useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import styles from "../AdminComman/AdminLogin.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [aemail, setAEmail] = useState({
    email: "",
    password: "",
  });

  const ridirect = useNavigate();

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setAEmail({ ...aemail, [name]: value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const { email, password } = aemail;

    if (!email.trim() || !password.trim()) {
      console.log(`Please fill in all fields.`);

      toast.error("Please fill in all fields.");

      return false;
    }

    try {
      const res = await axios.get(`http://localhost:3000/admin?email=${email}`);

      // console.log(res.data)

      //  Email validation;

      if (res.data.length == 0) {
        console.log(`Email dose not exits`);

        toast.error("Email does not exist.");

        return;
      }

      // password cheack

      let pass = res.data[0];

      if (pass.password != password) {
        console.log("Password dose not match");
        toast.error(`Password dose not match`);
        return;
      }

      // Session create

      localStorage.setItem("userId", pass.id);
      localStorage.setItem("userName", pass.name);
      toast.success("Login successful.");
      setAEmail({
        email: "",
        password: "",
      });

      ridirect("/DashBorde");
    } catch (error) {
      toast.error(`Login failed. Please try again later.`);
      console.error("Login error: ", error.message);
    }
  };

  return (
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        }}
      >
        <div className={`mask ${styles["gradient-custom-3"]}`}></div>
        <MDBCard
          className={`m-5 ${styles["ContainerBody"]}`}
          style={{ maxWidth: "600px" }}
        >
          <form action="" onSubmit={handleSubmitLogin}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">Admin Login</h2>

              <MDBInput
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="form2"
                name="email"
                value={aemail.eamil}
                type="email"
                onChange={handleChangeForm}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="form3"
                name="password"
                value={aemail.password}
                onChange={handleChangeForm}
                type="password"
              />

              <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#" className="px-3">
                  Forgot password?
                </a>
              </div>

              <button
                className={`mb-4 w-100 py-2 ${styles["gradient-custom-4"]}`}
                size="lg"
              >
                Login
              </button>
            </MDBCardBody>
          </form>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default AdminLogin;
