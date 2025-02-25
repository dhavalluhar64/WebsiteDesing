import React, { useContext, useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { CartContext } from "./Store/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserRagestration() {
  const { RegistartionPage } = useContext(CartContext);

  const redirect = useNavigate();

  const [regestartion, setRegestartion] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    userImg: "",
    mobileNo: "",
    status: "",
  });

  const handlechnages = (e) => {
    const { name, value } = e.target;

    setRegestartion({
      ...regestartion,
      id: new Date().getTime().toString(),
      loginattempt: 0,
      status: "unblock",
      [name]: value,
    });
  };

  const passwordValidationRagi = () => {
    let reg_ex_pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;

    if (!regestartion.password.match(reg_ex_pass)) {
      console.log("Enter Proper password");
      toast.error(
        "Password must be 8-12 characters long, with at least one uppercase, lowercase, digit, and special character."
      );

      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordValidationRagi()) {
      return;
    }

    if (
      !regestartion.name.trim() ||
      !regestartion.email.trim() ||
      !regestartion.password.trim() ||
      !regestartion.userImg.trim() ||
      Number(regestartion.mobileNo) <= 10
    ) {
      toast.error("Please fill all form fields before submitting.");

      return;
    }

    try {
      const res = await RegistartionPage(regestartion);

      // console.log(res.data);

      setRegestartion({
        name: "",
        email: "",
        password: "",
        userImg: "",
        mobileNo: "",
        status: "",
      });

      redirect("/userlogin");
    } catch (error) {
      console.error("Error Occurred:", error.message);
    }
  };
  return (
    <>
      <MDBContainer
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100 userlogin2"
      >
        <MDBCard
          className="p-4 shadow-5 w-100"
          style={{
            maxWidth: "600px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <MDBCardBody className="text-center">
              <h2 className="fw-bold mb-4">Sign Up Now</h2>

              <MDBRow className="g-3">
                <MDBCol md="6">
                  <MDBInput
                    label="Name"
                    id="form1"
                    type="text"
                    value={regestartion.name}
                    name="name"
                    onChange={handlechnages}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Email"
                    id="form2"
                    type="email"
                    value={regestartion.email}
                    name="email"
                    onChange={handlechnages}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                className="my-3"
                label="Password"
                id="form3"
                type="password"
                onBlur={passwordValidationRagi}
                value={regestartion.password}
                name="password"
                onChange={handlechnages}
              />
              <MDBInput
                className="mb-3"
                label="User Image URL"
                id="form4"
                type="url"
                value={regestartion.userImg}
                name="userImg"
                onChange={handlechnages}
              />
              <MDBInput
                className="mb-3"
                label="Mobile No"
                id="form5"
                type="tel"
                maxLength={10}
                value={regestartion.mobileNo}
                name="mobileNo"
                onChange={handlechnages}
              />

              <div className="d-flex justify-content-center mb-3">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <button className="w-100 mb-3 p-2 rounded bg-primary">
                Sign Up
              </button>

              <p className="mb-2">or sign up with:</p>
              <div className="d-flex justify-content-center gap-3">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="p-2"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="p-2"
                  style={{ color: "#1DA1F2" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="p-2"
                  style={{ color: "#DB4437" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="p-2"
                  style={{ color: "#000" }}
                >
                  <MDBIcon fab icon="github" size="lg" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </form>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default UserRagestration;
