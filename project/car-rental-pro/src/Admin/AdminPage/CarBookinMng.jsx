import React, { useEffect, useState } from "react";
import Admin_Header from "../AdminComman/Admin_Header";
import Footer from "../../WebsitePage/ComanPage/Footer";
import axios from "axios";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const CarBookingMng = () => {
  const [carBook, setCarbook] = useState([]);

  const [modalView, setModalview] = useState(false);

  const [Viewdata, setViewData] = useState(null);

  useEffect(() => {
    DataCarbooking();
  }, []);

  const DataCarbooking = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/Booking`);
      // console.log(res.data);
      setCarbook(res.data);
    } catch (error) {
      console.log(`Error Occured: ${error.message}`);
    }
  };

  const Closemdl = () => setModalview(false);

  const handleviewData = async (id) => {
    const findata = carBook.find((carData) => carData.id === id);
    setViewData(findata);
    setModalview(true);
  };

  return (
    <>
      <Admin_Header />
      <MDBContainer breakpoint="xl">
        {/* ViewModal */}
        <MDBModal open={modalView} onClose={Closemdl} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Modal title</MDBModalTitle>

                <button
                  type="button"
                  className="btn-close"
                  onClick={Closemdl}
                ></button>
              </MDBModalHeader>
              <MDBModalBody>
                {Viewdata ? (
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
                        <td>{Viewdata.carData.id}</td>
                        <td>{Viewdata.carData.title}</td>
                        <td>{Viewdata.carData.mfg}</td>
                        <td>{Viewdata.carData.type}</td>
                        <td>{Viewdata.carData.km}</td>
                        <td>{Viewdata.carData.price}</td>
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
                  onClick={Closemdl}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        {/* close view modal */}

        <MDBTable responsive bordered borderColor="primary">
          <MDBTableHead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col" className="text-center">
                Email
              </th>
              <th scope="col">MobileNumber</th>
              <th scope="col">PickupLocation</th>
              <th scope="col">DropLocation</th>
              <th scope="col">PickupDate</th>
              <th scope="col">PickupTime</th>
              <th scope="col">Adults</th>
              <th scope="col">Children</th>
              <th scope="col">SpecialRequest</th>
              <th scope="col">PaymentMethod</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {carBook.length > 0 ? (
              carBook.map((booking) => {
                const {
                  id,
                  firstName,
                  lastName,
                  email,
                  mobileNumber,
                  pickupLocation,
                  dropLocation,
                  pickupDate,
                  pickupTime,
                  adults,
                  children,
                  specialRequest,
                  paymentMethod,
                } = booking;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{mobileNumber}</td>
                    <td>{pickupLocation}</td>
                    <td>{dropLocation}</td>
                    <td>{pickupDate}</td>
                    <td>{pickupTime}</td>
                    <td>{adults}</td>
                    <td>{children}</td>
                    <td>{specialRequest}</td>
                    <td>{paymentMethod}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => handleviewData(id)}
                      >
                        ViewCar
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={8}>No Data Found</td>
              </tr>
            )}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default CarBookingMng;
