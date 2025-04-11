import React, { useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const { loading, Errors } = useSelector((state) => state.userSlice);

  
const navigate = useNavigate()

  const dispatch = useDispatch();

  const [fromData, setfromData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setfromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmitdata = async (e) => {
    e.preventDefault();

    console.log("Payload", fromData);

    const payloadFromdata = new FormData();

    payloadFromdata.append("email", fromData.email);
    payloadFromdata.append("password", fromData.password);

    try {
      const res = await dispatch(LoginUser(payloadFromdata));

      console.log("API response", res);

      if (res.payload?.success) {
        console.log("data willi be succssefully");
      } else {
        console.log(res.payload?.message);
        setfromData({email: "",
          password: "",})
        navigate("/")
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <p className="text-center">Login</p>
        <form className="col-md-4 m-auto" onSubmit={handleSubmitdata}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={fromData.email}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={fromData.password}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {loading ? "Logging.." : "Login"}
          </button>

          {Errors && (
            <p className="text-danger mt-2">
              {typeof Errors === "string" ? Errors : JSON.stringify(Errors)}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default LoginPage;
