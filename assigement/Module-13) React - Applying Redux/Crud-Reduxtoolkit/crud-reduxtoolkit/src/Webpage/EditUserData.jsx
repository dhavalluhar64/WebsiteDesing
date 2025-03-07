import React, { useEffect, useState } from "react";

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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { EditProfile } from "./Store/Slice/registrationSlice";
import Header from "./Comman/Header";
import { redirect, useNavigate } from "react-router-dom";

const EditUserData = () => {
  const { login } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loginUpdate, setloginUpdate] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    image: "",
    mobileno: "",
  });

  useEffect(() => {
    async function GetUserData() {
      const loginID = JSON.parse(localStorage.getItem("loginID"));

      if (!loginID) {
        toast.error("No user found please login again ");

        redirect("/Loginpage");

        return;
      }

      try {
        const res = await axios.get(`http://localhost:3000/users/${loginID}`);

        setloginUpdate(res.data);
      } catch (error) {
        console.log("Errro api some error : " + error.message);
      }
    }

    GetUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setloginUpdate({ ...loginUpdate, [name]: value });
  };

  const handleFromDataSubmit = async (e) => {
    e.preventDefault();

    const { id, name, email, password, image, mobileno } = loginUpdate;

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !image.trim() ||
      !mobileno.trim()
    ) {
      toast.error("Please All fillup then submit");

      return;
    }

    const collData = await dispatch(
      EditProfile({ EditId: id, EditData: loginUpdate })
    );

    console.log(collData.payload);

    toast.success("Update SuccessFully");
    navigate("/");

    setloginUpdate({
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
      <Header />
      <MDBContainer fluid className="my-5">
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <form onSubmit={handleFromDataSubmit}>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Edit Profile
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      name="name"
                      className="w-100"
                      value={loginUpdate.name}
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
                      value={loginUpdate.email}
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
                      value={loginUpdate.password}
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
                      value={loginUpdate.image}
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
                      value={loginUpdate.mobileno}
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

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBBtn className="mb-4" size="lg">
                      Update
                    </MDBBtn>

                    <MDBBtn
                      className="mb-4 mx-2"
                      size="lg"
                      color="dark"
                      onClick={() => navigate("/")}
                    >
                      Close
                    </MDBBtn>
                  </div>
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
};

export default EditUserData;
