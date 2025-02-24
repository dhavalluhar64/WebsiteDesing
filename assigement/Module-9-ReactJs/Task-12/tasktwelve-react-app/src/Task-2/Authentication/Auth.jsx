import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

// Task 2:
// • Implement google Authentication with firebase API.

function Auth() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [users, setusers] = useState(null);

  const navigate = useNavigate();

  const handlechages = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // signup function
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const userCredental = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setusers(userCredental.user);
      alert("Signup Successful");
      setFormData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // login function
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredental = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      alert("password is curect");
      alert("Login successful");
      setFormData({ email: "", password: "" });
      setusers(userCredental.user);
      navigate("/");
    } catch (error) {
      alert("incorrect password ");
      alert(error.message);
    }
  };

  //
  const handleLoginGoogle = async () => {
    try {
      const userCredental = await signInWithPopup(auth, googleProvider);
      setusers(userCredental.user);
      alert("google Login successful");
      setFormData({ email: "", password: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="text-center mb-5">Login / Signup</h1>
        <form className="col-md-4 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handlechages}
              className="form-control"
              id="exampleInputEmail1"
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
              onChange={handlechages}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary me-2"
            onClick={handleSignUp}
          >
            SignUp
          </button>
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={handleLogin}
          >
            Login
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleLoginGoogle}
          >
            Login with Google
          </button>
        </form>
      </div>
    </>
  );
}

export default Auth;
