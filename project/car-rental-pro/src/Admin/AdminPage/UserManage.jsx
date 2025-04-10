import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import Admin_Header from "../AdminComman/Admin_Header";
import { toast } from "react-toastify";

const UserManage = () => {
  const [userDetails, setUserDetails] = useState([]);

  const [userModal, setUserModal] = useState(false);

  const [userView, setUserView] = useState(null);

  useEffect(() => {
    handleUserData();
  }, []);

  const handleUserData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users`);

      setUserDetails(res.data);

      // console.log(res.data);
    } catch (error) {
      console.log(`Some one error UserManage ${error.message}`);
    }
  };

  // viewData Modal

  const CloseviewModel = () => setUserModal(false);

  const handleViewModal = (id) => {
    const UserView = userDetails.find((user) => user.id === id);

    setUserView(UserView);
    // console.log(UserView);
    setUserModal(true);
  };

  // Delete User

  const handleDeleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/users/${id}`);
      toast.success("User deleted successfully.");
      handleUserData();
      // console.log(res.data);
    } catch (error) {
      console.log(`Some Error User Delete ${error.message}`);
      toast.error(`Failed to delete user: ${error.message}`);
    }
  };

  const StatusHandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);

    const userstatus = res.data.status;

    try {
      if (userstatus === "block") {
        const datafetch = await axios.patch(
          `http://localhost:3000/users/${id}`,
          {
            status: "unblock",
            loginAttempt: 0,
          }
        );

        // console.log(datafetch.data);

        {
          if (res.status == 200) {
            toast.success("Unblock Successfull");
            handleUserData();
          }
        }
      } else if (userstatus === "unblock") {
        const res = await axios.patch(`http://localhost:3000/users/${id}`, {
          status: "block",
        });

        // console.log(res.data);

        {
          if (res.status == 200) {
            toast.success("Account has been Blocked");

            handleUserData();
          }
        }
      }
    } catch (error) {
      console.log("Api Data was not show ", error.message);
    }
  };

  return (
    <>
      <Admin_Header />
      <MDBContainer breakpoint="xl">
        {/* viewModal */}

        <MDBModal open={userModal} onClose={CloseviewModel} tabIndex="-1">
          <MDBModalDialog className="modal-dialog-centered modal-lg">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Modal title</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={CloseviewModel}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                {userView ? (
                  <MDBTable responsive bordered borderColor="primary">
                    <MDBTableHead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile No</th>
                        <th scope="col">Status</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td>{userView.id}</td>
                        <td>{userView.name}</td>
                        <td>{userView.email}</td>
                        <td>{userView.mobileNo}</td>
                        <td>{userView.status}</td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                ) : (
                  <p>No User Selected</p>
                )}
              </MDBModalBody>

              <MDBModalFooter>
                <button
                  type="button"
                  className="btn btn-secondary mx-1"
                  onClick={CloseviewModel}
                >
                  Close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        {/* Car Listing Table */}
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>email</th>
              <th>mobileNo</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {userDetails.length > 0 ? (
              userDetails.map((userData) => {
                const { id, name, email, mobileNo, status } = userData;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{mobileNo}</td>
                    <td>{status}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-success"
                        onClick={() => StatusHandle(id)}
                      >
                        {status === "block" ? "Unblock" : "Block"}
                      </button>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={() => handleViewModal(id)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users available.
                </td>
              </tr>
            )}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
};

export default UserManage;
