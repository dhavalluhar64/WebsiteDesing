import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

import AdminHeader from "./AdminHeader";
import { CartContext } from "../Website/Layout/Store/CartContext";
import { toast } from "react-toastify";

function AdminFruiteVegMng() {
  const { allproducts, AdminFruitMNGDelete, AdminFruitMNGUpdate } =
    useContext(CartContext);

  const [update, setUpadate] = useState({
    id: "",
    name: "",
    bages: "",
    details: "",
    images: "",
    price: "",
    kg: "",
    quantity: "",
  });

  const [viewData, setViewData] = useState(null);

  const [modal, setmodal] = useState(false); // view modal

  const [Updatemodal, setUpdatemodal] = useState(false); // update modal

  const openModal = () => setmodal(false); // // view modal

  const openUpdateModal = () => setUpdatemodal(false); // //  update modal

  // view Data
  const handleViewData = (ViewId) => {
    const Data = allproducts.find((items) => items.id === ViewId);

    setViewData(Data);
    setmodal(true);
  };

  // Update Data

  const handleUpadateData = (updateID) => {
    setUpadate({
      id: updateID.id,
      name: updateID.fruitsname || updateID.vegetablesname,
      bages: updateID.bages,
      details: updateID.fruitedetials || updateID.vegetabledetials,
      images: updateID.fruitsImg || updateID.vegetableImg,
      price: updateID.price,
      kg: updateID.kg,
      quantity: updateID.quantity,
    });
    setUpdatemodal(true);
  };

  const handleUpdateChang = (e) => {
    const { name, value } = e.target;
    setUpadate({ ...update, [name]: value });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    try {
      const URL = `http://localhost:3000/allproducts/${update.id}`;

      const payload =
        update.bages === "Fruits"
          ? {
              fruitsname: update.name,
              bages: update.bages,
              fruitedetials: update.details,
              fruitsImg: update.images,
              price: update.price,
              kg: update.kg,
              quantity: update.quantity,
            }
          : {
              vegetablesname: update.name,
              bages: update.bages,
              vegetabledetials: update.details,
              vegetableImg: update.images,
              price: update.price,
              kg: update.kg,
              quantity: update.quantity,
            };

      AdminFruitMNGUpdate(URL, payload);

      toast.success(`Update Data Successfull`);
    } catch (error) {
      console.log(`Error Update itesm : ${error.message}`);
    }
  };
  return (
    <>
      <AdminHeader />
      {/* View Modal Start */}

      <MDBModal tabIndex="-1" open={modal} onClose={openModal}>
        <MDBModalDialog className="modal-dialog-centered modal-lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Fruit&Veg Details</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={openModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {viewData ? (
                <MDBTable responsive bordered borderColor="primary">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col" className="text-center">
                        Name
                      </th>
                      <th scope="col">Bages</th>
                      <th scope="col" className="text-center">
                        Details
                      </th>
                      <th scope="col">Price</th>
                      <th scope="col">Kg</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope="row">{viewData.id}</th>
                      <td>{viewData.fruitsname || viewData.vegetablesname}</td>
                      <td>{viewData.bages}</td>
                      <td>
                        {viewData.fruitedetials || viewData.vegetabledetials}
                      </td>

                      <td>${viewData.price}</td>
                      <td>{viewData.kg}</td>
                      <td>{viewData.quantity}</td>
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
                className="btn btn-secondary "
                onClick={openModal}
              >
                Close
              </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* View Modal End */}

      {/* Update Modal start */}

      <MDBModal tabIndex="-1" open={Updatemodal} onClose={openUpdateModal}>
        <MDBModalDialog className="modal-dialog-centered modal-lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Fruit&Veg Update</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={openUpdateModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={handleSubmitEdit}>
                <div className="row">
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Enter Name"
                      name="name"
                      value={update.name}
                      onChange={handleUpdateChang}
                    />
                  </div>
                  <div className="col-12 form-group my-2">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Enter Details"
                      name="details"
                      value={update.details}
                      onChange={handleUpdateChang}
                    />
                  </div>
                </div>
                <div className="form-group my-2">
                  <input
                    type="url"
                    className="form-control p-3"
                    placeholder="Enter Image url"
                    name="images"
                    value={update.images}
                    onChange={handleUpdateChang}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Enter Price"
                    name="price"
                    value={update.price}
                    onChange={handleUpdateChang}
                  />
                </div>

                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Enter Weigth (kg)"
                    name="kg"
                    value={update.kg}
                    onChange={handleUpdateChang}
                  />
                </div>

                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Enter Quantity"
                    name="quantity"
                    value={update.quantity}
                    onChange={handleUpdateChang}
                  />
                </div>

                <div className="form-group">
                  <select
                    disabled
                    className="form-select p-3"
                    name="bages"
                    value={update.bages}
                    onChange={handleUpdateChang}
                  >
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                  </select>
                </div>

                <div>
                  <button className="btn btn-info py-3 px-5 mt-2" type="submit">
                    FRUITS-VEGETABLS UPDATE
                  </button>
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <button
                type="button"
                className="btn btn-secondary "
                onClick={openUpdateModal}
              >
                Close
              </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Update Modal end */}

      <div className="container table-responsive">
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col">Bages</th>
              <th scope="col">Price</th>
              <th scope="col">Kg</th>
              <th scope="col" className="text-center">
                Quantity
              </th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {allproducts.length > 0 ? (
              allproducts.map((item, idx) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.fruitsImg || item.vegetableImg}
                          alt="LoadingImg..."
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">
                            {item.fruitsname || item.vegetablesname}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.bages}</p>
                    </td>

                    <td>$ {item.price}</td>
                    <td>{item.kg}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleViewData(item.id)}
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="btn btn-info mx-1"
                        onClick={() => handleUpadateData(item)}
                      >
                        Update
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => AdminFruitMNGDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Data Found</td>
              </tr>
            )}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}

export default AdminFruiteVegMng;
