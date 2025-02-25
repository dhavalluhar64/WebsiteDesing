import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fireDB } from "../Task-2/Firebase/Firebase";
import Header from "../Task-2/Authentication/Header";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMsg from "./ErrorMsg";

// Task 3:
// • Implement error handling and loading states for the API call. Display a loading
// spinner while the data is being fetched.

function ErrorLoading() {
  const [getData, setData] = useState([]);
  const [SeenData, setSeenData] = useState(null);
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState("");

  const navigate = useNavigate();

  const [PostData, setPostData] = useState({
    id: "",
    name: "",
    email: "",
    mobileno: "",
    password: "",
  });

  const [PutData, setPutData] = useState({
    id: "",
    name: "",
    email: "",
    mobileno: "",
    password: "",
  });

  useEffect(() => {
    setloading(true);
    seterrors("");
    setTimeout(() => {
      const GetFetchingData = async () => {
        try {
          const res = query(collection(fireDB, "user"));
          setloading(true);

          const data = onSnapshot(res, (querySnapshot) => {
            let userArray = [];
            querySnapshot.forEach((doc) => {
              userArray.push({ ...doc.data(), id: doc.id });
            });
            setData(userArray);
            setloading(false);
          });

          return () => data();
        } catch (error) {
          console.log(error.message);
          seterrors("Something went wrong while fetching data.");
          setloading(false);
        }
      };

      GetFetchingData();
    }, 4000);
  }, []);

  // get Data

  // viewData

  const viewData = (id) => {
    const findData = getData.find((users) => users.id === id);
    setSeenData(findData);
  };

  //Post Data

  const handlechages = (e) => {
    const { name, value } = e.target;
    setPostData({ ...PostData, [name]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();

    if (
      !PostData.name.trim() ||
      !PostData.email.trim() ||
      !PostData.mobileno.trim() ||
      !PostData.password.trim()
    ) {
      alert("Please all field fillup then submiting");

      return;
    }

    // collection Add

    const userAdd = collection(fireDB, "user");

    try {
      const addData = await addDoc(userAdd, PostData);

      console.log(addData);
      GetFetchingData();
      alert("Registration successfully");
      setTimeout(() => {
        navigate("/");
      }, 800);
      setPostData("");
    } catch (error) {
      alert(error.message);
    }
  };

  // update Data
  const handleChangesUpdate = (e) => {
    const { name, value } = e.target;
    setPutData({ ...PutData, [name]: value });
  };

  const handleUpdate = (userData) => {
    setPutData(userData);
  };

  const UpadatePutData = async (e) => {
    e.preventDefault();
    try {
      const postupdate = await setDoc(doc(fireDB, "user", PutData.id), PutData);
      console.log(postupdate);
      GetFetchingData();
      alert("Update user Successful");
      setTimeout(() => {
        navigate("/");
      }, 800);
      setPutData("");
    } catch (error) {
      alert(error.message);
    }
  };

  // Delete Data

  const DeletedData = async (usersID) => {
    try {
      const deleteData = await deleteDoc(doc(fireDB, "user", usersID));
      GetFetchingData();
      alert("Delete data successFul");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />
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
                        <th>Email</th>
                        <th>Mobile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SeenData ? (
                        <tr key={SeenData.id}>
                          <td>{SeenData.id}</td>
                          <td>{SeenData.name}</td>
                          <td>{SeenData.email}</td>
                          <td>{SeenData.mobileno}</td>
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
                <form onSubmit={addUser}>
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
                      value={PostData.name}
                      onChange={handlechages}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword2"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="eamil"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      value={PostData.email}
                      id="exampleInputPassword2"
                      onChange={handlechages}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword3"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      name="password"
                      value={PostData.password}
                      id="exampleInputPassword3"
                      onChange={handlechages}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword4"
                      className="form-label"
                    >
                      Mobile No
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter your Mobile No"
                      name="mobileno"
                      maxLength={10}
                      value={PostData.mobileno}
                      id="exampleInputPassword4"
                      onChange={handlechages}
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
                <form onSubmit={UpadatePutData}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword5"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      id="exampleInputPassword5"
                      name="name"
                      value={PutData.name}
                      onChange={handleChangesUpdate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword6"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="eamil"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      value={PutData.email}
                      id="exampleInputPassword6"
                      onChange={handleChangesUpdate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword7"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      name="password"
                      value={PutData.password}
                      id="exampleInputPassword7"
                      onChange={handleChangesUpdate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword8"
                      className="form-label"
                    >
                      Mobile No
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter your Mobile No"
                      name="mobileno"
                      maxLength={10}
                      value={PutData.mobileno}
                      id="exampleInputPassword8"
                      onChange={handleChangesUpdate}
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

        <h2 className="text-center mb-4">Firebase Crud Opration</h2>

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
                <th>Email</th>
                <th>Mobile No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>
                    <LoadingSpinner />
                  </td>
                </tr>
              ) : errors ? (
                <tr>
                  <td>
                    {" "}
                    <ErrorMsg msg={errors} />
                  </td>
                </tr>
              ) : getData.length > 0 ? (
                getData.map((user, id) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileno}</td>
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
                          onClick={() => DeletedData(user.id)}
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

export default ErrorLoading;
