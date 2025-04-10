import React, { useEffect, useState } from "react";
import Footer from "../ComanPage/Footer";
import Header from "../ComanPage/Header";
import SearchStart from "./LayoutComanFile/SearchStart";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AllcomSlider from "./LayoutComanFile/AllcomSlider";
import { toast } from "react-toastify";

function Car_listing() {
  const ridirect = useNavigate();

  const [selectCar, setSelectcar] = useState({
    id: "",
    title: "",
    carImg: "",
    mfg: "",
    type: "",
    km: "",
    price: "",
  });



  const [getData, setData] = useState([]);

  const getDataCarMNGAPi = async () => {
    const response = await axios.get(`http://localhost:3000/carListing`);

    //  console.log(response.data)

    setData(response.data);
  };

  useEffect(() => {
    getDataCarMNGAPi();
  }, []);

  const handleSelectcar = (car) => {
    setSelectcar(car);
    console.log(selectCar)
  };

  const userCarListing = () => {
    const logincheck = localStorage.getItem("UsersLogin");

    if (!logincheck) {
      ridirect("/login");
      toast("🔒 Please Login first!", {
        position: "top-right",
        className: "toast-message",
      });
    } else if (!selectCar.id) {
      toast("🔒 Please select car first!", {
        position: "top-right",
        className: "toast-message",
      });
    } else {
      ridirect("/carbooking", { state: { carData: selectCar } });
    }
  };

  return (
    <div>
      <Header />
      <SearchStart />
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">
          Car Listing
        </h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" href>
              Home
            </a>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Car Listing</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Rent A Car Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Find Your Car
          </h1>
          <div className="row">
            {getData &&
              getData.map((carImagPrint) => {
                const { id, title, carImg, mfg, type, km, price } =
                  carImagPrint;
                return (
                  <div className="col-lg-4 col-md-6 mb-2" key={id}>
                    <div className="rent-item mb-4">
                      <img
                        className="img-fluid mb-4"
                        src={carImg}
                        alt="loading..listing"
                      />
                      <h4 className="text-uppercase mb-4">{title}</h4>
                      <div className="d-flex justify-content-center mb-4">
                        <div className="px-2">
                          <i className="fa fa-car text-primary mr-1" />
                          <span>{mfg}</span>
                        </div>
                        <div className="px-2 border-left border-right">
                          <i className="fa fa-cogs text-primary mr-1" />
                          <span>{type}</span>
                        </div>
                        <div className="px-2">
                          <i className="fa fa-road text-primary mr-1" />
                          <span>{km}K</span>
                        </div>
                      </div>
                      <button
                        // to="/carbooking"
                        className="btn btn-primary px-3"
                        // onClick={userCarListing}
                        onClick={() =>{handleSelectcar(carImagPrint); userCarListing()} }
                      >
                        ${price}/Day
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* Rent A Car End */}
      {/* Banner Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0">
            <div className="col-lg-6 px-0">
              <div
                className="px-5 bg-secondary d-flex align-items-center justify-content-between"
                style={{ height: 350 }}
              >
                <img
                  className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                  src="img/banner-left.png"
                  alt="loading..listing"
                />
                <div className="text-right">
                  <h3 className="text-uppercase text-light mb-3">
                    Want to be driver?
                  </h3>
                  <p className="mb-4">
                    Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                  </p>
                  <a className="btn btn-primary py-2 px-4" href>
                    Start Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-0">
              <div
                className="px-5 bg-dark d-flex align-items-center justify-content-between"
                style={{ height: 350 }}
              >
                <div className="text-left">
                  <h3 className="text-uppercase text-light mb-3">
                    Looking for a car?
                  </h3>
                  <p className="mb-4">
                    Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                  </p>
                  <a className="btn btn-primary py-2 px-4" href>
                    Start Now
                  </a>
                </div>
                <img
                  className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4"
                  src="img/banner-right.png"
                  alt="loading..listing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
      {/* Vendor Start */}
      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="owl-carousel vendor-carousel">
            <div className="bg-light p-4">
              <img src="img/vendor-1.png" alt="loading..listing" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-2.png" alt="loading..listing" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-3.png" alt="loading..listing" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-4.png" alt="loading..listing" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-5.png" alt="loading..listing" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-6.png" alt="loading..listing" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-7.png" alt="loading..listing" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-8.png" alt="loading..listing" />
            </div>
          </div>
        </div>
      </div> */}
      <AllcomSlider />
      {/* Vendor End */}
      <Footer />
    </div>
  );
}

export default Car_listing;
