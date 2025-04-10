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
import axios from "axios";
import Admin_Header from "../AdminComman/Admin_Header";

function AdCarlistingMng() {
  const [carData, setCarData] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  // car view modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // car editing state

  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const [carListingEdit, setCarListingEdit] = useState({
    id: "",
    title: "",
    carImg: "",
    mfg: "",
    type: "",
    km: "",
    price: "",
  });

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/carListing");
      setCarData(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/carListing/${id}`);
      fetchCarData();
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const handleViewCar = (id) => {
    const car = carData.find((car) => car.id === id);
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  // car view modal
  const closeModal = () => setIsModalOpen(false);

  // car edit modal

  const closeModalEdite = () => setIsModalOpenEdit(false);

  // put methods start

  const EditeDataset = (userData) => {
    setCarListingEdit(userData);
    setIsModalOpenEdit(true);
  };

  const handleChangePut = (event) => {
    const { name, value } = event.target;

    setCarListingEdit({ ...carListingEdit, [name]: value });
  };

  const handleSubmitPut = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/carListing/${carListingEdit.id}`,
        carListingEdit
      );

      fetchCarData();
    } catch (error) {
      console.log(`Edit put Error ${error.message}`);
    }
  };

  return (
    <>
      <Admin_Header />
      <MDBContainer breakpoint="xl">
        {/* Car Details Modal */}

        <MDBModal open={isModalOpen} onClose={closeModal} tabIndex="-1">
          <MDBModalDialog className="modal-dialog-centered modal-lg">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Car Details</MDBModalTitle>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </MDBModalHeader>
              <MDBModalBody>

                {selectedCar ? (
                  <MDBTable responsive bordered borderColor="primary">
                    <MDBTableHead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>MFG</th>
                        <th>Type</th>
                        <th>Km</th>
                        <th>Price</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td>{selectedCar.id}</td>
                        <td>{selectedCar.title}</td>
                        <td>{selectedCar.mfg}</td>
                        <td>{selectedCar.type}</td>
                        <td>{selectedCar.km}</td>
                        <td>{selectedCar.price}</td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                ) : (
                  <p>No Car Selected</p>
                )}
                
              </MDBModalBody>
              <MDBModalFooter>
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        {/* Car Edit Modal */}
        <MDBModal
          open={isModalOpenEdit}
          onClose={closeModalEdite}
          tabIndex="-1"
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>CarListing Edit</MDBModalTitle>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModalEdite}
                ></button>
              </MDBModalHeader>
              <MDBModalBody>
                <form onSubmit={handleSubmitPut}>
                  <div className="row">
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Enter Car Name"
                        name="title"
                        value={carListingEdit.title}
                        onChange={handleChangePut}
                        // onChange={(e) =>
                        //   setCarListingEdit({
                        //     ...carListingEdit,
                        //     title: e.target.value,
                        //   })
                        // }
                      />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="url"
                        className="form-control p-4"
                        placeholder="Enter Car URL"
                        name="carImg"
                        value={carListingEdit.carImg}
                        onChange={handleChangePut}
                        // onChange={(e) =>
                        //   setCarListingEdit({
                        //     ...carListingEdit,
                        //     carImg: e.target.value,
                        //   })
                        // }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control p-4"
                      placeholder="Enter MFG"
                      name="mfg"
                      value={carListingEdit.mfg}
                      onChange={handleChangePut}
                      // onChange={(e) =>
                      //   setCarListingEdit({
                      //     ...carListingEdit,
                      //     mfg: e.target.value,
                      //   })
                      // }
                    />
                  </div>

                  <div className="form-group">
                    <select
                      className="custom-select px-4 "
                      name="type"
                      value={carListingEdit.type}
                      onChange={handleChangePut}
                      // onChange={(e) =>
                      //   setCarListingEdit({
                      //     ...carListingEdit,
                      //     type: e.target.value,
                      //   })
                      // }
                    >
                      <option hidden value="">
                        Select Type
                      </option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>

                  <div className="form-group ">
                    <input
                      type="number"
                      className="form-control p-4"
                      placeholder="Km"
                      name="km"
                      value={carListingEdit.km}
                      onChange={handleChangePut}
                      // onChange={(e) =>
                      //   setIsModalOpenEdit({
                      //     ...carListingEdit,
                      //     km: e.target.value,
                      //   })
                      // }
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control p-4"
                      placeholder="Enter Price"
                      name="price"
                      value={carListingEdit.price}
                      onChange={handleChangePut}
                      // onChange={(e) =>
                      //   setCarListingEdit({
                      //     ...carListingEdit,
                      //     price: e.target.value,
                      //   })
                      // }
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      CarListing Update
                    </button>
                  </div>
                </form>
              </MDBModalBody>
              <MDBModalFooter>
                <button
                  type="button"
                  onClick={closeModalEdite}
                  className="btn btn-secondary"
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
              <th>Title</th>
              <th>MFG</th>
              <th>Type</th>
              <th>KM</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {carData.map((userData) => {
              const { id, title, carImg, mfg, type, km, price } = userData;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={carImg}
                        alt="Car"
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{title}</p>
                      </div>
                    </div>
                  </td>
                  <td>{mfg}</td>
                  <td>{type}</td>
                  <td>{km}</td>
                  <td>{price}</td>
                  <td className="text-center">
                    <button
                      type="button"
                      onClick={() => handleViewCar(id)}
                      className="btn btn-primary"
                    >
                      View
                    </button>

                    <button
                      type="button"
                      className="btn btn-success m-2"
                      onClick={() => EditeDataset(userData)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteCar(id)}
                      className="btn btn-danger"
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
}

export default AdCarlistingMng;
