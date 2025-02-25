import React, { useContext, useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { CartContext } from "./Store/CartContext";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserLoginpage() {
  const { UserLogin } = useContext(CartContext);

  const redirect = useNavigate();

  const [userlogin, setUserlogin] = useState({
    email: "",
    password: "",
  });

  const handlechanges = (e) => {
    const { name, value } = e.target;

    setUserlogin({ ...userlogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userlogin.email.trim() || !userlogin.password.trim()) {
      toast.error(`Please fill in all fields`);

      return;
    }

    try {
      const res = await UserLogin(userlogin.email);

      console.log(res.data);

      if (res.data.length === 0) {
        toast.error("Email dose not exits");
        return;
      }

      const Login = res.data[0];

      if (Login.status === "block") {
        toast.error("Your Account has been Blocked. Please contact support.");

        return;
      }

      if (Login.password !== userlogin.password) {
        const newAttempt = Login.loginattempt + 1;

        await axios.patch(`http://localhost:3000/users/${Login.id}`, {
          loginattempt: newAttempt,
          status: newAttempt >= 3 ? "block" : "unblock",
        });

        if (newAttempt >= 3) {
          toast.error("Account blocked after 3 failed attempts.");
        } else {
          toast.error(`Incorrect password. Attempt ${newAttempt}/3`);
        }

        return;
      }

      localStorage.setItem("RageuserId", Login.id);
      localStorage.setItem("RageuserName", Login.name);
      localStorage.setItem("RageuserPro", Login.userImg);
      toast.success("Login successfull");
      redirect("/");
      setUserlogin({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(`Error userlogin page : ${error.message}`);
    }
  };
  return (
    <>
      <MDBContainer fluid className="userlogin">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <form onSubmit={handleSubmit}>
                <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                  <h2 className="text-info fw-bold mb-2 text-uppercase">
                    Login
                  </h2>
                  <p className="text-info-50 mb-5">
                    Please enter your email and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Email address"
                    id="formControlLg1"
                    type="email"
                    size="lg"
                    name="email"
                    value={userlogin.email}
                    onChange={handlechanges}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Password"
                    id="formControlLg2"
                    type="password"
                    size="lg"
                    name="password"
                    value={userlogin.password}
                    onChange={handlechanges}
                  />

                  <button
                    className="btn btn btn-outline-info mx-2 px-5 fs-4"
                    color="info"
                    size="lg"
                  >
                    Login
                  </button>

                  <div>
                    <p className="mb-0 my-3">
                      Don't have an account?{" "}
                      <Link
                        to="/userRegistartion"
                        class="text-white-50 fw-bold"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </MDBCardBody>
              </form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default UserLoginpage;
