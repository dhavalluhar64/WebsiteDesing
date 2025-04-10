import React from "react";
import Header from "../ComanPage/Header";
import SearchStart from "./LayoutComanFile/SearchStart";
import Footer from "../ComanPage/Footer";
import AllcomSlider from "./LayoutComanFile/AllcomSlider";
import CarDetailsSlider from "./LayoutComanFile/CarDetailsSlider";


function CarDetails() {

  

  return (
    <div>
      <Header />
      <SearchStart />
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Car Detail</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" href>
              Home
            </a>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Car Detail</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Detail Start */}
      <div className="container-fluid pt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <h1 className="display-4 text-uppercase mb-5">
                Mercedes Benz R3
              </h1>
              <div className="row mx-n2 mb-3">
                <div className="col-md-3 col-6 px-2 pb-2">
                  <img
                    className="img-fluid w-100"
                    src="img/gallery-1.jpg"
                    alt="loading..details"
                  />
                </div>
                <div className="col-md-3 col-6 px-2 pb-2">
                  <img
                    className="img-fluid w-100"
                    src="img/gallery-2.jpg"
                    alt="loading..details"
                  />
                </div>
                <div className="col-md-3 col-6 px-2 pb-2">
                  <img
                    className="img-fluid w-100"
                    src="img/gallery-3.jpg"
                    alt="loading..details"
                  />
                </div>
                <div className="col-md-3 col-6 px-2 pb-2">
                  <img
                    className="img-fluid w-100"
                    src="img/gallery-4.jpg"
                    alt="loading..details"
                  />
                </div>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
              <div className="row pt-2">
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-car text-primary mr-2" />
                  <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-cogs text-primary mr-2" />
                  <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-road text-primary mr-2" />
                  <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-eye text-primary mr-2" />
                  <span>GPS Navigation</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-car text-primary mr-2" />
                  <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-cogs text-primary mr-2" />
                  <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-road text-primary mr-2" />
                  <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-eye text-primary mr-2" />
                  <span>GPS Navigation</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-car text-primary mr-2" />
                  <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-cogs text-primary mr-2" />
                  <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-road text-primary mr-2" />
                  <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-eye text-primary mr-2" />
                  <span>GPS Navigation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="bg-secondary p-5">
                <h3 className="text-primary text-center mb-4">
                  Check Availability
                </h3>
                <div className="form-group">
                  <select className="custom-select px-4" style={{ height: 50 }}>
                    <option selected>Pickup Location</option>
                    <option value={1}>Location 1</option>
                    <option value={2}>Location 2</option>
                    <option value={3}>Location 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="custom-select px-4" style={{ height: 50 }}>
                    <option selected>Drop Location</option>
                    <option value={1}>Location 1</option>
                    <option value={2}>Location 2</option>
                    <option value={3}>Location 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <div className="date" id="date1" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control p-4 datetimepicker-input"
                      placeholder="Pickup Date"
                      data-target="#date1"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="time" id="time1" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control p-4 datetimepicker-input"
                      placeholder="Pickup Time"
                      data-target="#time1"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <select className="custom-select px-4" style={{ height: 50 }}>
                    <option selected>Select Person</option>
                    <option value={1}>Person 1</option>
                    <option value={2}>Person 2</option>
                    <option value={3}>Person 3</option>
                  </select>
                </div>
                <div className="form-group mb-0">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    style={{ height: 50 }}
                  >
                    Check Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Detail End */}
      {/* Related Car Start */}
      {/* <div className="container-fluid pb-5">
        <div className="container pb-5">
          <h2 className="mb-4">Related Cars</h2>
          <div
            className="owl-carousel related-carousel position-relative"
            style={{ padding: "0 30px" }}
          >
            <div className="rent-item">
              <img className="img-fluid mb-4" src="img/car-rent-1.png" alt="loading..details" />
              <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
              <div className="d-flex justify-content-center mb-4">
                <div className="px-2">
                  <i className="fa fa-car text-primary mr-1" />
                  <span>2015</span>
                </div>
                <div className="px-2 border-left border-right">
                  <i className="fa fa-cogs text-primary mr-1" />
                  <span>AUTO</span>
                </div>
                <div className="px-2">
                  <i className="fa fa-road text-primary mr-1" />
                  <span>25K</span>
                </div>
              </div>
              <a className="btn btn-primary px-3" href>
                $99.00/Day
              </a>
            </div>
            <div className="rent-item">
              <img className="img-fluid mb-4" src="img/car-rent-2.png"alt="loading..details" />
              <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
              <div className="d-flex justify-content-center mb-4">
                <div className="px-2">
                  <i className="fa fa-car text-primary mr-1" />
                  <span>2015</span>
                </div>
                <div className="px-2 border-left border-right">
                  <i className="fa fa-cogs text-primary mr-1" />
                  <span>AUTO</span>
                </div>
                <div className="px-2">
                  <i className="fa fa-road text-primary mr-1" />
                  <span>25K</span>
                </div>
              </div>
              <a className="btn btn-primary px-3" href>
                $99.00/Day
              </a>
            </div>
            <div className="rent-item">
              <img className="img-fluid mb-4" src="img/car-rent-3.png" alt="loading..details"/>
              <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
              <div className="d-flex justify-content-center mb-4">
                <div className="px-2">
                  <i className="fa fa-car text-primary mr-1" />
                  <span>2015</span>
                </div>
                <div className="px-2 border-left border-right">
                  <i className="fa fa-cogs text-primary mr-1" />
                  <span>AUTO</span>
                </div>
                <div className="px-2">
                  <i className="fa fa-road text-primary mr-1" />
                  <span>25K</span>
                </div>
              </div>
              <a className="btn btn-primary px-3" href>
                $99.00/Day
              </a>
            </div>
            <div className="rent-item">
              <img className="img-fluid mb-4" src="img/car-rent-4.png" alt="loading..details"/>
              <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
              <div className="d-flex justify-content-center mb-4">
                <div className="px-2">
                  <i className="fa fa-car text-primary mr-1" />
                  <span>2015</span>
                </div>
                <div className="px-2 border-left border-right">
                  <i className="fa fa-cogs text-primary mr-1" />
                  <span>AUTO</span>
                </div>
                <div className="px-2">
                  <i className="fa fa-road text-primary mr-1" />
                  <span>25K</span>
                </div>
              </div>
              <a className="btn btn-primary px-3" href>
                $99.00/Day
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <CarDetailsSlider />
      {/* Related Car End */}

      {/* Vendor Start */}
      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="owl-carousel vendor-carousel">
            <div className="bg-light p-4">
              <img src="img/vendor-1.png" alt="loading..details" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-2.png" alt="loading..details" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-3.png" alt="loading..details" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-4.png" alt="loading..details" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-5.png" alt="loading..details" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-6.png" alt="loading..details" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-7.png" alt="loading..details" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-8.png" alt="loading..details" />
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

export default CarDetails;
