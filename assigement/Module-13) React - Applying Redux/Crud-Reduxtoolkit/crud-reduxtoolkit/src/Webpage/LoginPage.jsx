import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "../Webpage/login.module.css";
import Header from "./Comman/Header";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Store/Slice/registrationSlice";
import { toast } from "react-toastify";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handlechange = (e) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLoagin = async (e) => {
    e.preventDefault();

    try {
      const preData = await dispatch(loginSuccess(loginData.email));

      if (!preData.payload || preData.payload.length === 0) {
        toast.error("Email dose not match");
        return;
      }

      const pass = preData.payload[0];

      if (pass.password !== loginData.password) {
        toast.error("password dose not match");
        return;
      }

      // session start

      localStorage.setItem("loginID", JSON.stringify(pass.id));
      localStorage.setItem("loginName", JSON.stringify(pass.name));
      localStorage.setItem("loginImage", JSON.stringify(pass.image));

      toast.success("Login sucessfully");
      navigate("/");
      setLoginData({ email: "", password: "" });
    } catch (error) {
      console.log("Some One API Error in User Login");
    }
  };

  return (
    <>
      <Header />
      <MDBContainer
        fluid
        className={`p-4 ${styles["background-radial-gradient"]} overflow-hidden`}
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Crud Opration <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>Redux Toolkit</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id={`${styles["radius-shape-1"]}`}
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id={`${styles["radius-shape-2"]}`}
              className="position-absolute shadow-5-strong"
            ></div>
            <form onSubmit={handleSubmitLoagin}>
              <MDBCard className={`my-5 ${styles["bg-glass"]}`}>
                <MDBCardBody className="p-5">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handlechange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form4"
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handlechange}
                  />

                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>

                  <div className="text-center">
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <NavLink
                        to="/RegistrationPage"
                        className="text-white-50 fw-bold"
                      >
                        Sign Up
                      </NavLink>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LoginPage;
