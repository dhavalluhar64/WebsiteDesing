import axios from "axios";
import React, { useEffect, useState } from "react";

function CrudJson() {
  const [Data, setData] = useState([]);

  const [create, setCreate] = useState({
    id: "",
    name: "",
    lastname: "",
    mobileNo: "",
    course: "",
  });

  const [update, setUpdate] = useState({
    id: "",
    name: "",
    lastname: "",
    mobileNo: "",
    course: "",
  });

  const [seenData, setseenData] = useState(null);

  useEffect(() => {
    fetching();
  }, []);

  // GET
  const fetching = async () => {
    const res = await axios.get("http://localhost:3000/userdata");
    setData(res.data);
  };

  const viewData = (id) => {
    const findData = Data.find((user) => user.id === id);
    setseenData(findData);
  };

  // POST Formhandle
  const handleFormCreate = (e) => {
    const { name, value } = e.target;

    setCreate({
      ...create,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };

  // POST
  const CreateData = async (e) => {
    e.preventDefault();
    const { id, name, lastname, mobileNo, course } = create;

    if (
      !name.trim() ||
      !lastname.trim() ||
      Number(mobileNo.length) <= 0 ||
      !course.trim()
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:3000/userdata`, create);
      fetching();

      setCreate({ name: "", lastname: "", mobileNo: "", course: "" });
    } catch (error) {
      console.log(`Some one errer for Create ${error.message}`);
    }
  };

  // Update

  const handleUpdate = (UpdateData) => {
    setUpdate(UpdateData);
  };

  const handleFormUpdate = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  const UpdateData = async () => {
    const { id, name, lastname, mobileNo, course } = update;

    try {
      const res = await axios.put(
        `http://localhost:3000/userdata/${id}`,
        update
      );
      fetching();
      console.log(res.data);
    } catch (error) {
      console.log(`some one error ${error.message}`);
    }
  };

  // DELETE
  const DeleteData = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/userdata/${id}`);

      fetching();
    } catch (error) {
      console.log(`Some one errer delete ${error.message}`);
    }
  };

  return (
    <>
      <div className="container my-4">
        {/* view modal start */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  User Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <table className="table table-striped table-hover border">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Mobile</th>
                        <th>Course</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seenData ? (
                        <tr key={seenData.id}>
                          <td>{seenData.id}</td>
                          <td>{seenData.name}</td>
                          <td>{seenData.lastname}</td>
                          <td>{seenData.mobileNo}</td>
                          <td>{seenData.course}</td>
                        </tr>
                      ) : (
                        <tr>
                          <td>No Data Found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* view modal close */}

        {/* Create modal start */}
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Registration Page
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form onSubmit={CreateData}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      id="exampleInputPassword1"
                      name="name"
                      value={create.name}
                      onChange={handleFormCreate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword2"
                      className="form-label"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your lastname"
                      name="lastname"
                      value={create.lastname}
                      id="exampleInputPassword2"
                      onChange={handleFormCreate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword3"
                      className="form-label"
                    >
                      Mobile No
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter your Mobile no"
                      name="mobileNo"
                      maxLength={10}
                      value={create.mobileNo}
                      id="exampleInputPassword3"
                      onChange={handleFormCreate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword4"
                      className="form-label"
                    >
                      Course
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Course"
                      name="course"
                      value={create.course}
                      id="exampleInputPassword4"
                      onChange={handleFormCreate}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* create modal close */}

        {/* Update modal start */}
        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  User Update
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form onSubmit={UpdateData}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword8"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      id="exampleInputPassword8"
                      name="name"
                      value={update.name}
                      onChange={handleFormUpdate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword5"
                      className="form-label"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your lastname"
                      name="lastname"
                      value={update.lastname}
                      id="exampleInputPassword5"
                      onChange={handleFormUpdate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword6"
                      className="form-label"
                    >
                      Mobile No
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter your Mobile no"
                      name="mobileNo"
                      maxLength={10}
                      value={update.mobileNo}
                      id="exampleInputPassword6"
                      onChange={handleFormUpdate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword7"
                      className="form-label"
                    >
                      Course
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Course"
                      name="course"
                      value={update.course}
                      id="exampleInputPassword7"
                      onChange={handleFormUpdate}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Update modal close */}

        <h2 className="text-center mb-4">Fetches Data Table</h2>

        <button
          type="button"
          className="btn btn-primary btn-md"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Registration
        </button>

        <div className="table-responsive">
          <table className="table table-striped table-hover border">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Mobile</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.length > 0 ? (
                Data.map((user, id) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.lastname}</td>
                      <td>{user.mobileNo}</td>
                      <td>{user.course}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => viewData(user.id)}
                        >
                          View
                        </button>
                        <button
                          className="btn btn-success btn-sm mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                          onClick={() => handleUpdate(user)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => DeleteData(user.id)}
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CrudJson;
