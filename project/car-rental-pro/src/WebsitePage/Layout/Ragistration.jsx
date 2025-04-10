import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import styles from "../Layout/ragistrastion.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Registration = () => {
  const redirect = useNavigate();

  const [errorRegister, setErrorRegister] = useState("");

  const [fromDataLogin, setFormDataLogin] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    userImg: "",
    mobileNo: "",
    status: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;

    setFormDataLogin({
      ...fromDataLogin,
      status: "unblock",
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };

  const passwordValidationRagi = () => {
    let reg_ex_pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;

    if (!fromDataLogin.password.match(reg_ex_pass)) {
      console.log("Enter Proper password");
      toast.error(
        "Password must be 8-12 characters long, with at least one uppercase, lowercase, digit, and special character."
      );

      return false;
    }

    return true;
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (
      !fromDataLogin.name.trim() ||
      !fromDataLogin.email.trim() ||
      Number(fromDataLogin.password) <= 0 ||
      !fromDataLogin.userImg.trim() ||
      Number(fromDataLogin.mobileNo) <= 0
    ) {
      setErrorRegister("Please fill all form fields before submitting.");

      return;
    } else {
      setErrorRegister("");
    }

    if (!passwordValidationRagi()) {
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:3000/users`,
        fromDataLogin
      );

      console.log(fromDataLogin);

      if (res.status != 201) {
        throw new Error(`Some Occurred ${res.status}`);
      }

      setFormDataLogin({
        name: "",
        email: "",
        password: "",
        userImg: "",
        mobileNo: "",
      });

      redirect("/login");
    } catch (error) {
      console.error("Error Occurred:", error.message);
      toast.error("Error Occurred:", error.message);
    }
  };

  return (
    <>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`mask ${styles["gradient-custom-3"]}`}></div>
        <MDBCard
          className={`m-3 shadow ${styles["containerBody"]}`}
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <form action="" onSubmit={handleSubmitForm}>
            <MDBCardBody className="p-4">
              <h2 className="text-uppercase text-center mb-4 font-weight-bold">
                Register Account
              </h2>

              {errorRegister && (
                <div class="alert alert-danger" role="alert">
                  {errorRegister}!
                </div>
              )}
              <MDBInput
                wrapperClass="mb-3"
                label="Your Name"
                size="lg"
                id="form1"
                type="text"
                name="name"
                value={fromDataLogin.name}
                onChange={handleChangeForm}
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Your Email"
                size="lg"
                id="form2"
                type="email"
                name="email"
                value={fromDataLogin.email}
                onChange={handleChangeForm}
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Password"
                size="lg"
                id="form3"
                type="password"
                name="password"
                onBlur={passwordValidationRagi}
                value={fromDataLogin.password}
                onChange={handleChangeForm}
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Profile URL"
                size="lg"
                id="form5"
                name="userImg"
                value={fromDataLogin.userImg}
                onChange={handleChangeForm}
                type="url"
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Mobile Number"
                size="lg"
                id="form6"
                name="mobileNo"
                maxLength={10}
                value={fromDataLogin.mobileNo}
                onChange={handleChangeForm}
                type="tel"
              />

              <div className="d-flex flex-column align-items-center mb-3">
                <MDBCheckbox
                  name="terms"
                  id="terms"
                  label="I agree to all Terms of Service"
                />
                <div className="mt-2">
                  <span>Already have an account? </span>
                  <Link to="/login" className="text-primary fw-bold">
                    Login here
                  </Link>
                </div>
              </div>

              <button
                className={`w-100 ${styles["gradient-custom-4"]}`}
                size="lg"
                type="submit"
              >
                Register
              </button>
            </MDBCardBody>
          </form>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Registration;
