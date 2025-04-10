import React, { useEffect, useState } from "react";

import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import { MDBContainer } from "mdb-react-ui-kit";
import axios from "axios";
import Admin_Header from "../AdminComman/Admin_Header";

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const AdServiceMng = () => {
  const [getServiceMNG, setServiceMNG] = useState([]);

  const [viewSeviceData, seteViewServiceData] = useState(null);

  // view Data modal state
  const [basicModal, setBasicModal] = useState(false);

  // Edit Data model State

  const [EditeModal, setEditModal] = useState(false);

  const [EditServiceData, setEditServiceData] = useState({
    id: "",
    provideTitle: "",
    serviceIcon: "",
    serviceProvide: "",
  });

  useEffect(() => {
    serviceMNGData();
  }, []);

  // Get methods
  const serviceMNGData = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/carService`);

      setServiceMNG(res.data);
    } catch (error) {
      console.log("some erroe Get ", error);
    }
  };

  // Delete Service
  const ServiceDelete = async (id) => {
    try {
      const resDelete = await axios.delete(
        `http://localhost:3000/carService/${id}`
      );

      serviceMNGData();
    } catch (error) {
      console.log("some erroe Delete ", error);
    }
  };

  // ViewService

  const handleViewService = (id) => {
    const service = getServiceMNG.find((service) => service.id == id);

    seteViewServiceData(service);
    setBasicModal(true);
  };

  //  service view modal
  const toggleOpen = () => setBasicModal(!basicModal);

  // Edite data Modal

  const EditeMdoalToggle = () => setEditModal(false);

  // Edit btn triger
  const handleSaveService = (serviceData) => {
    setEditServiceData(serviceData);
    setEditModal(true);
  };

  // const handleChangePut = (event) => {
  //   const { name, value } = event.target;

  //   setEditServiceData({ ...EditServiceData, [name]: value });
  // };

  const handleEditdata = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/carService/${EditServiceData.id}`,
        EditServiceData
      );

      serviceMNGData();
    } catch (error) {
      console.log(`Edit Service Error ${error.message}`);
    }
  };

  return (
    <>
      <Admin_Header />
      <MDBContainer breakpoint="xll">
        {/* service view modal */}
        <MDBModal
          open={basicModal}
          onClose={() => setBasicModal(false)}
          tabIndex="-1"
        >
          <MDBModalDialog className="modal-dialog-centered modal-lg">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Service Details</MDBModalTitle>

                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleOpen}
                ></button>
              </MDBModalHeader>
              <MDBModalBody>
                {viewSeviceData ? (
                  <MDBTable responsive bordered borderColor="primary">
                    <MDBTableHead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col" className="text-center">
                          ProvideTitle
                        </th>
                        <th scope="col" className="text-center">
                          ServiceProvide
                        </th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope="row">{viewSeviceData.id}</th>
                        <td>{viewSeviceData.provideTitle}</td>
                        <td>{viewSeviceData.serviceProvide}</td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                ) : (
                  <p>No Service Found</p>
                )}
              </MDBModalBody>

              <MDBModalFooter>
                <button
                  type="button"
                  onClick={toggleOpen}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        {/* Edit service modal */}

        <MDBModal open={EditeModal} onClose={EditeMdoalToggle} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Service Details</MDBModalTitle>

                <button
                  type="button"
                  className="btn-close"
                  onClick={EditeMdoalToggle}
                ></button>
              </MDBModalHeader>
              <MDBModalBody>
                <form onSubmit={handleEditdata}>
                  <div className="row">
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Enter Title"
                        name="provideTitle"
                        value={EditServiceData.provideTitle}
                        //  onChange={handleChangePut}
                        onChange={(e) =>
                          setEditServiceData({
                            ...EditServiceData,
                            provideTitle: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="url"
                        className="form-control p-4"
                        placeholder="Enter serviceIcon URL"
                        name="serviceIcon"
                        value={EditServiceData.serviceIcon}
                        // onChange={handleChangePut}
                        onChange={(e) =>
                          setEditServiceData({
                            ...EditServiceData,
                            serviceIcon: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Enter serviceProvide"
                      name="serviceProvide"
                      value={EditServiceData.serviceProvide}
                      // onChange={handleChangePut}
                      onChange={(e) =>
                        setEditServiceData({
                          ...EditServiceData,
                          serviceProvide: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Service Update
                    </button>
                  </div>
                </form>
              </MDBModalBody>

              <MDBModalFooter>
                <button
                  type="button"
                  onClick={EditeMdoalToggle}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        <MDBTable align="middle" bordered>
          <MDBTableHead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">ProvideTitle</th>
              <th scope="col" className="text-center">
                ServiceProvide
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {getServiceMNG &&
              getServiceMNG.map((serviceMNG, idx) => {
                const { id, provideTitle, serviceProvide } = serviceMNG;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{provideTitle}</td>
                    <td>{serviceProvide}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => handleViewService(id)}
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="btn btn-success btn-sm m-2"
                        onClick={() => handleSaveService(serviceMNG)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => ServiceDelete(id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
};

export default AdServiceMng;

{
  /* <tr key={id}>
                    <td>
                      <p className="fw-normal mb-1">{id}</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={serviceIcon}
                          alt="loading..carlistingMNG"
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{provideTitle}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{serviceProvide}</p>
                    </td>
                    <td className="text-center">
                      <MDBBtn color="info" size="sm" rounded>
                        View
                      </MDBBtn>
                      <MDBBtn
                        color="success"
                        size="sm"
                        className="mx-1"
                        rounded
                      >
                        Edit
                      </MDBBtn>
                      <MDBBtn
                        color="danger"
                        size="sm"
                        rounded
                        onClick={() => ServiceDelete(serviceMNG.id)}
                      >
                        Delete
                      </MDBBtn>
                    </td>
                  </tr> */
}
