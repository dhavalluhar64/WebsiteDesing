import React, { useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Header from "../ComanPage/Header";

import styles from "../Layout/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const LoginPage = () => {
  const ridirect = useNavigate();

  const [UserLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleUserlogin = (e) => {
    const { name, value } = e.target;

    setUserLogin({ ...UserLogin, [name]: value });

    // console.log(UserLogin);
  };

  const passwordValidation = () => {
    let reg_ex_pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;

    if (!UserLogin.password.match(reg_ex_pass)) {
      console.log("Enter Proper password");
      toast.error(
        "Password must be 8-12 characters long, with at least one uppercase, lowercase, digit, and special character."
      );

      return false;
    }

    return true;
  };

  const UserLoginSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = UserLogin;

    if (!email.trim() || !password.trim()) {
      console.log(`Please fill in all fields.`);

      toast.error("Please fill in all fields.");
    }

    if (!passwordValidation()) {
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3000/users?email=${email}`);

      // Email check
      if (res.data.length == 0) {
        console.log(`Email dose not match`);
        toast.error("Email Dose not Match");
        return;
      }

      // password check

      const User = res.data[0];

      if (User.status === "block") {
        console.log("Your Account has been Blocked Please contect");
        toast.error("Your Account has been Blocked. Please contact support.");
        return;
      }

      if (User.password !== password) {
        // console.log(`Password Dose not Match`);
        // toast.error(`Password Dose Not Match`);
        // return;

        const newAttempt = User.loginAttempt + 1;

        await axios.patch(`http://localhost:3000/users/${User.id}`, {
          loginAttempt: newAttempt,

          status: newAttempt >= 3 ? "block" : "unblock",
        });

        if (newAttempt >= 3) {
          toast.error(`Account blocked after 3 failed attempts.`);
        } else {
          toast.error(`Incorrect password. Attempt ${newAttempt}/3`);
        }

        return;
      }

      // await axios.patch(`http://localhost:3000/users/${User.id}`, {
      //   loginAttempt: 0,
      // });

      // Sessions Create

      localStorage.setItem("UsersLogin", User.id);
      localStorage.setItem("UsersName", User.name);
      localStorage.setItem("UsersPro", User.userImg);
      toast.success("Login successful.");
      setUserLogin({
        email: "",
        password: "",
      });

      ridirect("/");
    } catch (error) {
      toast.error(`Login failed. Please try again later.`);
      console.error("Login error: ", error.message);
    }
  };

  return (
    <>
      <Header />
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
          <form onSubmit={UserLoginSubmit}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Login an account
              </h2>

              <MDBInput
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="form2"
                name="email"
                value={UserLogin.email}
                onChange={handleUserlogin}
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="form3"
                name="password"
                onBlur={passwordValidation}
                value={UserLogin.password}
                onChange={handleUserlogin}
                type="password"
              />

              <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <Link className="px-3">Forgot password?</Link>
              </div>

              <div className="d-flex justify-content-between mx-3 mb-4">
                <p>
                  Not a member? <Link to="/ragistration">Register</Link>
                </p>
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

export default LoginPage;
