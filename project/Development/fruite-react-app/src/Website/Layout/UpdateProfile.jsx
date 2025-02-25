import React, { useContext, useEffect, useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import Header from "../Comman/Header";
import Footer from "../Comman/Footer";
import { CartContext } from "./Store/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const { UserProfileUpdate, UserUpdateData } = useContext(CartContext);

  const navigate = useNavigate();

  const [Close, SetClose] = useState(true);

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    userImg: "",
    mobileNo: "",
  });

  useEffect(() => {
    async function UserUpdate() {
      const res = await UserProfileUpdate();
      setUserData(res);
    }

    UserUpdate();
  }, []);

  const handlechanges = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const ModelClose = () => {
    SetClose(false);
    toast.info("Action canceled. Navigating back.");
    navigate("/");
  };

  const handleSubmitdata = async (e) => {
    e.preventDefault();

    try {
      const res = await UserUpdateData(userData.id, userData);

      console.log(res.data);

      if (res.status === 200) {
        setUserData({
          id: "",
          name: "",
          email: "",
          password: "",
          userImg: "",
          mobileNo: "",
        });

        toast.success("Upadate Data Successful");
        navigate("/");
      }
    } catch (error) {
      console.log(`Error UpdateProfleUser : ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <MDBContainer
        fluid
        className="d-flex justify-content-center align-items-center updatediv"
      >
        <MDBCard
          className="p-4 shadow-5 w-100"
          style={{
            maxWidth: "600px",
            backgroundColor: "skyblue",
          }}
        >
          <form onSubmit={handleSubmitdata}>
            <MDBCardBody className="text-center">
              <h2 className="fw-bold mb-4">UPDATE PROFILE</h2>

              <MDBRow className="g-3">
                <MDBCol md="6">
                  <MDBInput
                    label="Name"
                    id="form1"
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handlechanges}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Email"
                    id="form2"
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handlechanges}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                className="my-3"
                label="Password"
                id="form3"
                type="password"
                name="password"
                value={userData.password}
                onChange={handlechanges}
              />
              <MDBInput
                className="mb-3"
                label="User Image URL"
                id="form4"
                type="url"
                name="userImg"
                value={userData.userImg}
                onChange={handlechanges}
              />
              <MDBInput
                className="mb-3"
                label="Mobile No"
                id="form5"
                type="tel"
                maxLength={10}
                name="mobileNo"
                value={userData.mobileNo}
                onChange={handlechanges}
              />

              <button className="w-25 mb-3 p-2 rounded bg-primary mx-3">
                UPDATE
              </button>

              {Close && (
                <button
                  className="w-25 mb-3 p-2 rounded bg-secondary"
                  onClick={ModelClose}
                >
                  CLOSE
                </button>
              )}
            </MDBCardBody>
          </form>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default UpdateProfile;
