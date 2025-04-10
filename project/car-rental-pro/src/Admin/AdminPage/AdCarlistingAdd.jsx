import React, { useState } from "react";

import Admin_Header from "../AdminComman/Admin_Header";
import axios from "axios";

const AdCarlistingAdd = () => {
  const [errorMsg, seterrorMsg] = useState("");
  const [postFormData, setPostFormData] = useState({
    id: "",
    title: "",
    carImg: "",
    mfg: "",
    type: "",
    km: "",
    price: "",
  });

  const handleChangePost = (event) => {
    const { name, value } = event.target;

    setPostFormData({
      ...postFormData,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };

  const handleSubmitPost = async (event) => {
    event.preventDefault();

    const { title, carImg, mfg, type, km, price } = postFormData;

    if (
      !title.trim() ||
      !carImg.trim() ||
      !mfg.trim() ||
      !type.trim() ||
      km <= 0 ||
      price <= 0
    ) {
      seterrorMsg(`Please fill all form fields before submitting.`);
      return;
    } else {
      seterrorMsg("");
    }

    console.log(postFormData);

    try {
      const res = await axios.post(
        `http://localhost:3000/carListing`,
        postFormData
      );

      console.log(res.data);

      setPostFormData({...postFormData,
        title: "",
        carImg: "",
        mfg: "",
        type: "",
        km: "",
        price: "",
      });

      seterrorMsg("");
    } catch (error) {
      alert(`Failed to send data. Error: ${error.message}`);
    }
  };

  return (
    <>
      <Admin_Header />
      <div className="container py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            CarListing Added
          </h1>

          <div className="row">
            <div className="col-lg-12 mb-2">
              <div
                className="contact-form bg-light mb-4"
                style={{ padding: 30 }}
              >
                {errorMsg && (
                  <div className="alert alert-danger" role="alert">
                    {errorMsg}!
                  </div>
                )}

                <form onSubmit={handleSubmitPost}>
                  <div className="row">
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Enter Car Name"
                        name="title"
                        value={postFormData.title}
                        onChange={handleChangePost}
                      />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="url"
                        className="form-control p-4"
                        placeholder="Enter Car URL"
                        name="carImg"
                        value={postFormData.carImg}
                        onChange={handleChangePost}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control p-4"
                      placeholder="Enter MFG"
                      name="mfg"
                      value={postFormData.mfg}
                      onChange={handleChangePost}
                    />
                  </div>

                  <div className="form-group">
                    <select
                      className="custom-select px-4 "
                      name="type"
                      value={postFormData.type}
                      onChange={handleChangePost}
                    >
                      <option hidden value="">
                        Select Type
                      </option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>

                  <div className="form-group ">
                    <input
                      type="number"
                      className="form-control p-4"
                      placeholder="Km"
                      name="km"
                      value={postFormData.km}
                      onChange={handleChangePost}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control p-4"
                      placeholder="Enter Price"
                      name="price"
                      value={postFormData.price}
                      onChange={handleChangePost}
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      CarListing Add
                    </button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdCarlistingAdd;
