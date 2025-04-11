import React, { useState } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { Ragistration } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [fromData, setfromData] = useState({
    name: "",
    email: "",
    number: "",
    gender: "",
    password: "",
    confirm_password: "",
    is_admin: "",
  });

  const [erros, Seterros] = useState({});

  const Validation = () => {
    let newError = {};

    if (!fromData.name.trim()) newError.name = "Name is required";
    if (!fromData.email.trim()) newError.email = "email is required";
    else if (!/\S+@\S+\.\S+/.test(fromData.email))
      newError.email = "Email is invalid";
    if (!fromData.number.trim()) newError.number = "Name is required";
    else if (fromData.number.length !== 10)
      newError.number = "Number must be 10 digits";

    if (!fromData.gender) newError.gender = "Gender is required";
    if (!fromData.is_admin) newError.is_admin = "Role is required";
    if (!fromData.password || fromData.password.length < 6)
      newError.password = "Password must be at least 6 characters";

    if (!fromData.confirm_password || fromData.confirm_password.length < 6)
      newError.confirm_password =
        "Confirm Password must be at least 6 characters";

    if (fromData.password !== fromData.confirm_password)
      newError.confirm_password = "Passwords do not match";

    Seterros(newError);

    return Object.keys(newError).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfromData({
      ...fromData,
      [name]: value,
    });
  };

  const handleSubmitdata = async (e) => {
    e.preventDefault();

    if (!Validation()) return;

    const fromDataa = new FormData();

    fromDataa.append("name", fromData.name);
    fromDataa.append("email", fromData.email);
    fromDataa.append("number", fromData.number);
    fromDataa.append("gender", fromData.gender);
    fromDataa.append("password", fromData.password);
    fromDataa.append("confirm_password", fromData.confirm_password);
    fromDataa.append("is_admin", fromData.is_admin === "Admin" ? true : false);

    try {
      const datata = await dispatch(Ragistration(fromDataa)).unwrap();

      if (datata.success) {
        alert("User registered successfully");

        navigate("/loginpage");
      }

      console.log(datata);
    } catch (error) {
      console.log("Registration failed :", error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <p className="text-center mt-2">Registration Page</p>
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
            {erros.name && <small className="text-danger">{erros.name}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={fromData.email}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword2"
              aria-describedby="emailHelp"
            />
            {erros.email && (
              <small className="text-danger">{erros.email}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword3" className="form-label">
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

          <div className="mb-3">
            <label htmlFor="exampleInputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              maxLength={6}
              value={fromData.password}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword4"
            />
            {erros.password && (
              <small className="text-danger">{erros.password}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              confirm_password
            </label>
            <input
              type="password"
              name="confirm_password"
              maxLength={6}
              value={fromData.confirm_password}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
            {erros.confirm_password && (
              <small className="text-danger">{erros.confirm_password}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              class="form-select mb-3"
              name="is_admin"
              value={fromData.is_admin}
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option value={""}>Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            {erros.is_admin && (
              <small className="text-danger">{erros.is_admin}</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default RegistrationPage;
