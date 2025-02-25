import React from "react";
import { useState } from "react";

// Task 1:
// • Create a form with inputs for name, email, and password. Use state to control the
// form and display the form data when the user submits it.

function FormSubmitData() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChages = (e) => {
    const { name, value } = e.target;

    setFromData({ ...formData, [name]: value });

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name :  ${formData.name}\n Email: ${formData.email} \n Password : ${formData.password} `
    );
  };

  return (
    <div>
      <div className="container">
        <h1>Controlled Form</h1>
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
              required
            />
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
    </div>
  );
}

export default FormSubmitData;
