import React, { useState } from "react";
import AdminHead from "./AdminHead";
import { useDispatch } from "react-redux";
import { CreateData } from "../Webpage/Store/Slice/productsSlice";
import { useNavigate } from "react-router-dom";

function AdminCreate() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateData(formData));
    navigate("/");
    setformData({ id: "", title: "", price: "", description: "", image: "" });
  };

  return (
    <>
      <AdminHead />
      <form className="my-5 col-md-4 m-auto" onSubmit={handleSubmit}>
        <h3 className="text-center">Create Product</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword3" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword3"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword4" className="form-label">
            Image
          </label>
          <input
            type="url"
            className="form-control"
            id="exampleInputPassword4"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AdminCreate;
