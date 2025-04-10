import React from "react";
import SearchStart from "./LayoutComanFile/SearchStart";
import Header from "../ComanPage/Header";
import Footer from "../ComanPage/Footer";
import MeetSlider from "./LayoutComanFile/MeetSlider";
import SliderPage from "./LayoutComanFile/SliderPage";
import AllcomSlider from "./LayoutComanFile/AllcomSlider";

function The_Theme() {
  return (
    <div>
      <Header />
      <SearchStart />
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">The Team</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" href>
              Home
            </a>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">The Team</h6>
        </div>
      </div>
      {/* Page Header Start */}


      {/* Team Start */}
      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Meet Our Team
          </h1>
          <div
            className="owl-carousel team-carousel position-relative"
            style={{ padding: "0 30px" }}
          >
            <div className="team-item">
              <img
                className="img-fluid w-100"
                src="img/team-1.jpg"
                alt="loading..theame"
              />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img
                className="img-fluid w-100"
                src="img/team-2.jpg"
                alt="loading..theame"
              />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img
                className="img-fluid w-100"
                src="img/team-3.jpg"
                alt="loading..theame"
              />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img
                className="img-fluid w-100"
                src="img/team-4.jpg"
                alt="loading..theame"
              />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <SliderPage />
      {/* Team End */}


      {/* Vendor Start */}
      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="owl-carousel vendor-carousel">
            <div className="bg-light p-4">
              <img src="img/vendor-1.png" alt="loading..theame" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-2.png" alt="loading..theame" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-3.png" alt="loading..theame" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-4.png" alt="loading..theame" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-5.png" alt="loading..theame" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-6.png" alt="loading..theame" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-7.png" alt="loading..theame" />
            </div>
            <div className="bg-light p-4">
              <img src="img/vendor-8.png" alt="loading..theame" />
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

export default The_Theme;
