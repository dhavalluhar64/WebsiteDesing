import React, { useEffect, useState } from "react";
import SearchStart from "./LayoutComanFile/SearchStart";
import Header from "../ComanPage/Header";
import Footer from "../ComanPage/Footer";
import axios from "axios";
import AllcomSlider from "./LayoutComanFile/AllcomSlider";
// import Vendor from "./LayoutComanFile/Vendor";
// import Banner from "./LayoutComanFile/Banner";

function Service() {
  const [getServiceData, setServiceData] = useState([]);

  const ServiceData = async () => {
    let res = await axios.get(`http://localhost:3000/carService`);

    setServiceData(res.data);
  };

  useEffect(() => {
    ServiceData();
  }, []);

  return (
    <div>
      <Header />
      <SearchStart />
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Service</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" href>
              Home
            </a>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Service</h6>
        </div>
      </div>
      {/* Page Header Start */}

      {/* Services Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Our Services
          </h1>
          <div className="row">
            {getServiceData &&
              getServiceData.map((serviceData) => {

                const {id,provideTitle,serviceIcon,serviceProvide} = serviceData
                return (
                  <div className="col-lg-4 col-md-6 mb-2" key={id}>
                    <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div
                          className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                          style={{ width: 80, height: 80 }}
                        >
                          {/* <i className="fa fa-2x fa-taxi text-secondary" /> */}

                          <img
                            src={serviceIcon}
                            style={{ width: 70, height: 70 }}
                            alt="loading..service"
                          />
                        </div>
                        <h1 className="display-5 text-white mt-n2 m-0">0{id}</h1>
                      </div>
                      <h4 className="text-uppercase mb-3">{provideTitle}</h4>
                      <p className="m-0">
                       {serviceProvide}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Banner Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-banner py-5 px-4 text-center">
            <div className="py-5">
              <h1 className="display-1 text-uppercase text-primary mb-4">
                50% OFF
              </h1>
              <h1 className="text-uppercase text-light mb-4">
                Special Offer For New Members
              </h1>
              <p className="mb-4">
                Only for Sunday from 1st Jan to 30th Jan 2045
              </p>
              <a className="btn btn-primary mt-2 py-3 px-5" href>
                Register Now
              </a>
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
              <img src="img/vendor-1.png" alt="loading-service" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-2.png" alt="loading-service" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-3.png" alt="loading-service" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-4.png" alt="loading-service" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-5.png" alt="loading-service" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-6.png" alt="loading-service" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-7.png" alt="loading-service" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-8.png" alt="loading-service" />
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

export default Service;
