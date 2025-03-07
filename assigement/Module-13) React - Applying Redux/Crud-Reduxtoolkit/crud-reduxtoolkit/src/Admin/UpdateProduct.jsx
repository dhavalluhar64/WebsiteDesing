import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AdminHead from "./AdminHead";
import { toast } from "react-toastify";
import { Updateproduct } from "../Webpage/Store/Slice/productsSlice";

function UpdateProduct() {
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.product);

  const { updateId } = useParams();

  const dispatch = useDispatch();

  const [Updata, setUpdate] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setUpdate({ ...Updata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const updateData =
      products.find((dataUp) => Number(dataUp.id) === Number(updateId)) || null;
    setUpdate(updateData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Updateproduct({ EditId: Updata.id, Edit: Updata }));
    toast.success(`Update SuccessFull`);
    navigate("/AdminMNG");
  };

  return (
    <>
      <AdminHead />
      <form className="my-5 col-md-4 m-auto" onSubmit={handleSubmit}>
        <h3 className="text-center"> Update Product</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="title"
            value={Updata.title}
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
            value={Updata.description}
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
            value={Updata.price}
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
            value={Updata.image}
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

export default UpdateProduct;
