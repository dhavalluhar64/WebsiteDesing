import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleDatatable,
  GetDataTable,
  GetDataTableEdit,
} from "../Store/ReadSlice";

function AdminManag() {
  const { readData } = useSelector((state) => state.readSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    if (readData.length >= 0) {
      dispatch(GetDataTable());
    }
  }, [dispatch]);

  const [fromData, setfromData] = useState({
    user_id: "",
    name: "",
    email: "",
    number: "",
    gender: "",
  });

  const [deleteUserId, setDeleteuserId] = useState(null);

  const [erros, Seterros] = useState({});

  const handleEditData = (data) => {
    setfromData(data);
  };

  const handleChange = (e) => {
    setfromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const Validation = () => {
    const newError = {};

    if (!fromData.name.trim()) newError.name = "Name is required";
    if (!fromData.number.trim()) newError.number = "Number is required";
    else if (fromData.number.length !== 10)
      newError.number = "Must be 10 digit";
    if (!fromData.gender) newError.gender = "Gender is Required";

    Seterros(newError);

    return Object.keys(newError).length === 0;
  };

  const handleSubmitdata = async (e) => {
    e.preventDefault();

    if (!Validation()) return;

    const newPayload = new FormData();

    newPayload.append("user_id", fromData.user_id);
    newPayload.append("name", fromData.name);
    newPayload.append("email", fromData.email);
    newPayload.append("number", fromData.number);
    newPayload.append("gender", fromData.gender);

    try {
      const res = await dispatch(GetDataTableEdit(newPayload));

      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteConfirm = (id) => {
    setDeleteuserId(id);
  };

  const handleClickDelete = () => {
    try {
      const res = dispatch(DeleDatatable(deleteUserId));

      if (res.payload.success) {
        console.log("DeleteSuccessfull");

        dispatch(GetDataTable());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Edit model open */}

      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="col-md-4 m-auto" onSubmit={handleSubmitdata}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="name"
                      value={fromData.name}
                      onChange={handleChange}
                    />
                    {erros.name && (
                      <small className="text-danger">{erros.name}</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword2"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={fromData.email}
                      disabled
                      className="form-control"
                      id="exampleInputPassword2"
                      aria-describedby="emailHelp"
                    />
                    {erros.email && (
                      <small className="text-danger">{erros.email}</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword3"
                      className="form-label"
                    >
                      Number
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      name="number"
                      value={fromData.number}
                      onChange={handleChange}
                      className="form-control"
                      id="exampleInputPassword3"
                      aria-describedby="emailHelp"
                    />
                    {erros.number && (
                      <small className="text-danger">{erros.number}</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label>
                      <strong>Gender:</strong>
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={fromData.gender === "Female"}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={fromData.gender === "Male"}
                        onChange={handleChange}
                      />
                      Male
                    </label>{" "}
                    <br />
                    {erros.gender && (
                      <small className="text-danger">{erros.gender}</small>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary mx-2">
                    Submit
                  </button>

                  <button className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit model Close */}

      {/* DeleteData open */}

      {/* Delete Confirmation Modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Delete</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Are you sure you want to delete the user?
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleClickDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DeleteData close */}

      <AdminHeader />
      <div className="container">
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Is_admin</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {readData &&
                readData.map((dataa, idx) => {
                  return (
                    <tr>
                      <th scope="row">{dataa.id}</th>
                      <td>{dataa.name}</td>
                      <td>{dataa.email}</td>
                      <td>{dataa.number}</td>
                      <td>{dataa.gender}</td>
                      <td>{dataa.is_admin}</td>
                      <td className="d-flex">
                        <button
                          className="btn btn-primary mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => handleEditData(dataa)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          onClick={() => handleDeleteConfirm(dataa.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminManag;
