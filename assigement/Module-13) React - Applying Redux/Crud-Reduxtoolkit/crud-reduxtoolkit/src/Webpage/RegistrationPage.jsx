import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Registrastion } from "./Store/Slice/registrationSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegistrationPage() {
  const { login } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [fromData, setformData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    image: "",
    mobileno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...fromData,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(Registrastion(fromData));
    toast.success("Registration Successfully");
    navigate("/Loginpage");
    setformData({
      id: "",
      name: "",
      email: "",
      password: "",
      image: "",
      mobileno: "",
    });
  };

  return (
    <>
      <MDBContainer fluid className="my-5">
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <form onSubmit={handleForm}>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      name="name"
                      value={fromData.name}
                      className="w-100"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      type="email"
                      name="email"
                      value={fromData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="form3"
                      type="password"
                      name="password"
                      value={fromData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="image me-3" size="lg" />
                    <MDBInput
                      label="Image URL"
                      id="form5"
                      type="url"
                      name="image"
                      value={fromData.image}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="mobile me-3" size="lg" />
                    <MDBInput
                      label="Mobile No"
                      id="form4"
                      type="tel"
                      name="mobileno"
                      maxLength={10}
                      value={fromData.mobileno}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                      required
                    />
                  </div>

                  <MDBBtn className="mb-4" size="lg">
                    Register
                  </MDBBtn>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default RegistrationPage;
