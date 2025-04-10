import axios, { AxiosHeaders } from "axios";
import React, { useState } from "react";
import Admin_Header from "../AdminComman/Admin_Header";

const AdServiceAdd = () => {
  const [ErrorServiceMsg, getErrorServiceMsg] = useState("");
  const [postServiceData, setPostServiceData] = useState({
    id: "",
    provideTitle: "",
    serviceIcon: "",
    serviceProvide: "",
  });

  const handleChangeServicePost = (event) => {
    const { name, value } = event.target;

    setPostServiceData({
      ...postServiceData,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };

  const handleSubmitServicePost = async (event) => {
    event.preventDefault();

    const { provideTitle, serviceIcon, serviceProvide } = postServiceData;

    if (!provideTitle.trim() || !serviceIcon.trim() || !serviceProvide.trim()) {
      getErrorServiceMsg(`Please fill all form fields before submitting.`);
      return;
    } else {
      getErrorServiceMsg("");
    }

    try {
      const res = await axios.post(
        `http://localhost:3000/carService`,
        postServiceData
      );

      console.log(postServiceData);

      setPostServiceData({
        ...postServiceData,
        provideTitle: "",
        serviceIcon: "",
        serviceProvide: "",
      });

      getErrorServiceMsg("");
    } catch (error) {
      alert(`Some one error : ${error.message}`);
    }
  };

  return (
    <>
      <Admin_Header />
      <div className="container py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Service Added
          </h1>

          <div className="row">
            <div className="col-lg-12 mb-2">
              <div
                className="contact-form bg-light mb-4"
                style={{ padding: 30 }}
              >
                {ErrorServiceMsg && (
                  <div class="alert alert-danger" role="alert">
                    {ErrorServiceMsg}
                  </div>
                )}
                <form onSubmit={handleSubmitServicePost}>
                  <div className="row">
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Enter Title"
                        name="provideTitle"
                        value={postServiceData.provideTitle}
                        onChange={handleChangeServicePost}
                      />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="url"
                        className="form-control p-4"
                        placeholder="Enter serviceIcon URL"
                        name="serviceIcon"
                        value={postServiceData.serviceIcon}
                        onChange={handleChangeServicePost}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Enter serviceProvide"
                      name="serviceProvide"
                      value={postServiceData.serviceProvide}
                      onChange={handleChangeServicePost}
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Service Add
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

export default AdServiceAdd;
