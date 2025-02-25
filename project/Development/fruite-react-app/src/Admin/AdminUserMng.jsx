import React, { useContext, useState } from "react";

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
import AdminHeader from "./AdminHeader";
import { CartContext } from "../Website/Layout/Store/CartContext";
import axios from "axios";
import { toast } from "react-toastify";

function AdminUserMng() {
  const { UserManage, userMangeData, UserManageDelete } =
    useContext(CartContext);

  const [viewData, setviewData] = useState(null);

  const [userModal, setUsermodel] = useState(false);

  const CloseviewModel = () => setUsermodel(false);

  const handleViewModal = (dataView) => {
    const DataView = userMangeData.find((itesm) => itesm.id === dataView);

    setviewData(DataView);

    setUsermodel(true);
  };

  // Status

  const UserStatus = async (id) => {
    const DataStatus = await axios.get(`http://localhost:3000/users/${id}`);


    const statusUpdate = DataStatus.data.status;

    try {
      if (statusUpdate === "block") {
        let dataFetching = await axios.patch(
          `http://localhost:3000/users/${id}`,
          {
            status: "unblock",
            loginattempt: 0,
          }
        );

        {
          if (dataFetching.status === 200) {
            toast.success("Unblock Successfull");
            UserManage();
          }
        }
      } else if (statusUpdate === "unblock") {
        let dataFetching1 = await axios.patch(
          `http://localhost:3000/users/${id}`,
          {
            status: "block",
          }
        );

        {
          if (dataFetching1.status === 200) {
            toast.error("Account has been Blocked");
            UserManage();
          }
        }
      }
    } catch (error) {
      console.log(`Api data was not show : ${error.message}`);
    }
  };

  return (
    <>
      <AdminHeader />
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
                {viewData ? (
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
                        <td>{viewData.id}</td>
                        <td>{viewData.name}</td>
                        <td>{viewData.email}</td>
                        <td>{viewData.mobileNo}</td>
                        <td>{viewData.status}</td>
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
            {userMangeData.length > 0 ? (
              userMangeData.map((userData) => {
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
                        onClick={() => UserStatus(id)}
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
                        onClick={() => UserManageDelete(id)}
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
}

export default AdminUserMng;
