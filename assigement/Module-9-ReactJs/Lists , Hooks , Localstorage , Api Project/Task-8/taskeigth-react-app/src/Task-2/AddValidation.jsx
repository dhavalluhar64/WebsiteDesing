import React from "react";
import { useState } from "react";

// Task 2:
// • Add validation to the form created above. For example, ensure that the email input
// contains a valid email address.

function AddValidation() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, seterror] = useState({ email: "" });

  const EmailValidation = (email) => {
    let reg_ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return reg_ex.test(email);
  };

  const handleChages = (e) => {
    const { name, value } = e.target;

    setFromData({ ...formData, [name]: value });

    if (name === "email") {
      seterror({
        ...errors,
        email: EmailValidation(value) ? "" : "invalid email address",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EmailValidation(formData.email)) {
      alert("please enter a valid email address.");
      return;
    }

    alert(
      `Name :  ${formData.name}\n Email: ${formData.email} \n Password : ${formData.password} `
    );
  };

  return (
    <>
      <div className="container">
        <h1>Controlled Form Add Validation</h1>
        <form
          onSubmit={handleSubmit}
          className="col-md-4 m-auto"
          style={{ border: "1px solid", padding: "10px 30px" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword2"
              name="name"
              value={formData.name}
              onChange={handleChages}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={formData.email}
              onChange={handleChages}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={formData.password}
              onChange={handleChages}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddValidation;
