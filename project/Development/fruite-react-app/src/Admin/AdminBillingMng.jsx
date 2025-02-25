import React, { useContext, useState } from "react";
import AdminHeader from "./AdminHeader";

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
import { CartContext } from "../Website/Layout/Store/CartContext";

const AdminBillingMng = () => {
  const { allproducts, cart, BillingCart } = useContext(CartContext);

  const [billing, setbilling] = useState(null);

  const [modalView, setModalview] = useState(false);

  const Closemdl = () => setModalview(false);

  const viewDataBilling = (dataId) => {
    const dataBilling = BillingCart.find((items) => items.id === dataId);

    const mapviewData = dataBilling.cart;
    console.log(mapviewData);

    setbilling(mapviewData);

    setModalview(true);
  };

  return (
    <>
      <AdminHeader />

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
                <MDBTable responsive bordered borderColor="primary">
                  <MDBTableHead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Bages</th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Kg</th>
                      <th>Quantity</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {billing &&
                      billing.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.fruitsname || item.vegetablesname}</td>
                            <td>{item.bages}</td>
                            <td>
                              {item.fruitedetials || item.vegetabledetials}
                            </td>
                            <td>{item.price}</td>
                            <td>{item.kg}</td>
                            <td>{item.quantity}</td>
                          </tr>
                        );
                      })}
                  </MDBTableBody>
                </MDBTable>
                ;
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
                Company Name
              </th>
              <th scope="col">House No Street Name</th>
              <th scope="col">Town and City</th>
              <th scope="col">Country</th>
              <th scope="col">Postcode</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Oreder Notes</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {BillingCart.length > 0 ? (
              BillingCart.map((bill) => {
                return (
                  <tr key={bill.id}>
                    <th scope="row">{bill.id}</th>
                    <td>{bill.firstname}</td>
                    <td>{bill.lastname}</td>
                    <td>{bill.companyname}</td>
                    <td>{bill.address.housenoandstreetname}</td>
                    <td>{bill.address.townandcity}</td>
                    <td>{bill.address.country}</td>
                    <td>{bill.address.postcode}</td>
                    <td>{bill.address.mobileno}</td>
                    <td>{bill.address.oredernotes}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => viewDataBilling(bill.id)}
                      >
                        ViewBuyData
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
    </>
  );
};

export default AdminBillingMng;
