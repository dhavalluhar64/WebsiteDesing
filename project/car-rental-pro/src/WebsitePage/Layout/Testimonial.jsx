import React from "react";
import Header from "../ComanPage/Header";
import SearchStart from "./LayoutComanFile/SearchStart";
import Footer from "../ComanPage/Footer";
import MeetSlider from "./LayoutComanFile/MeetSlider";
import AllcomSlider from "./LayoutComanFile/AllcomSlider";

function Testimonial() {
  return (
    <div>
      <Header />
      <SearchStart />
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">
          Testimonial
        </h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" href>
              Home
            </a>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Testimonial</h6>
        </div>
      </div>
      {/* Page Header Start */}

      {/* Testimonial Start */}
      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Our Client's Say
          </h1>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  className="img-fluid ml-n4"
                  src="img/testimonial-1.jpg"
                  alt="loading-testimonial"
                />
                <h1 className="display-2 text-white m-0 fa fa-quote-right" />
              </div>
              <h4 className="text-uppercase mb-2">Client Name</h4>
              <i className="mb-2">Profession</i>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit sea sed
              </p>
            </div>
            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  className="img-fluid ml-n4"
                  src="img/testimonial-2.jpg"
                  alt="loading-testimonial"
                />
                <h1 className="display-2 text-white m-0 fa fa-quote-right" />
              </div>
              <h4 className="text-uppercase mb-2">Client Name</h4>
              <i className="mb-2">Profession</i>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit sea sed
              </p>
            </div>
            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  className="img-fluid ml-n4"
                  src="img/testimonial-3.jpg"
                  alt="loading-testimonial"
                />
                <h1 className="display-2 text-white m-0 fa fa-quote-right" />
              </div>
              <h4 className="text-uppercase mb-2">Client Name</h4>
              <i className="mb-2">Profession</i>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit sea sed
              </p>
            </div>
            <div className="testimonial-item d-flex flex-column justify-content-center px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  className="img-fluid ml-n4"
                  src="img/testimonial-4.jpg"
                  alt="loading-testimonial"
                />
                <h1 className="display-2 text-white m-0 fa fa-quote-right" />
              </div>
              <h4 className="text-uppercase mb-2">Client Name</h4>
              <i className="mb-2">Profession</i>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit sea sed
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <MeetSlider />
      {/* Testimonial End */}

      {/* Vendor Start */}
      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="owl-carousel vendor-carousel">
            <div className="bg-light p-4">
              <img src="img/vendor-1.png" alt="loading-testimonial" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-2.png" alt="loading-testimonial" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-3.png" alt="loading-testimonial" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-4.png" alt="loading-testimonial" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-5.png" alt="loading-testimonial" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-6.png" alt="loading-testimonial" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-7.png" alt="loading-testimonial" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-8.png" alt="loading-testimonial" />
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

export default Testimonial;
