import React, { useEffect, useState } from "react";
import Header from "../ComanPage/Header";
import styles from "./ragistrastion.module.css";

import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const [Close, setClose] = useState(true);

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    userImg: "",
    mobileNo: "",
  });

  useEffect(() => {
    FetdataUser();
  }, []);

  const FetdataUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/users/${localStorage.getItem("UsersLogin")}`
      );

      setUserData(res.data);

      // console.log(res);
    } catch (error) {
      console.log(`Error Occured: ${error.message}`);
    }
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const modelClose = () => {
    setClose(false);
    toast.info("Action canceled. Navigating back.");
    navigate("/");
  };

  const UpdateUserForm = async (e) => {
    e.preventDefault();

    const { name, email, password, userImg, mobileNo } = userData;

    if (
      !name.trim() ||
      !email.trim() ||
      Number(password) <= 0 ||
      !userImg.trim() ||
      Number(mobileNo) <= 0
    ) {
      console.log("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.patch(
        `http://localhost:3000/users/${userData.id}`,
        userData
      );

      console.log(res);

      if (res.status == 200) {
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
      toast.error(`Update failed. Please try again later.`);
      console.error("Update error: ", error.message);
    }
  };

  return (
    <>
      <Header />
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
          <form onSubmit={UpdateUserForm}>
            <MDBCardBody className="p-4">
              <h2 className="text-uppercase text-center mb-4 font-weight-bold">
                Update Profile
              </h2>

              <MDBInput
                wrapperClass="mb-3"
                label="Your Name"
                size="lg"
                id="form1"
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChangeForm}
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Your Email"
                size="lg"
                id="form2"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChangeForm}
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Password"
                size="lg"
                id="form3"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChangeForm}
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Profile URL"
                size="lg"
                id="form5"
                name="userImg"
                type="url"
                value={userData.userImg}
                onChange={handleChangeForm}
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Mobile Number"
                size="lg"
                id="form6"
                name="mobileNo"
                maxLength={10}
                type="tel"
                value={userData.mobileNo}
                onChange={handleChangeForm}
              />

              <button
                className={`w-25  ${styles["gradient-custom-4"]}`}
                size="lg"
                type="submit"
              >
                Update
              </button>

              {Close && (
                <button
                  onClick={modelClose}
                  className={`w-25  ${styles["gradient-custom-5"]}`}
                  size="lg"
                  type="submit"
                >
                  Cancel
                </button>
              )}
            </MDBCardBody>
          </form>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default UpdateProfile;
