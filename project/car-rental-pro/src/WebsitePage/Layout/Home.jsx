import React, { useEffect, useState } from "react";
import SearchStart from "./LayoutComanFile/SearchStart";
import Footer from "../ComanPage/Footer";
import Header from "../ComanPage/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SliderPage from "./LayoutComanFile/SliderPage";
import MeetSlider from "./LayoutComanFile/MeetSlider";
import AllcomSlider from "./LayoutComanFile/AllcomSlider";
import { toast } from "react-toastify";

function Home() {
  // carlisting getData

  const navigate = useNavigate();

  const [getDataHome, setDataHome] = useState([]);

  const [selectCarHome, setSelectcarHome] = useState({
    id: "",
    title: "",
    carImg: "",
    mfg: "",
    type: "",
    km: "",
    price: "",
  });

  const getDataCarMNGHome = async () => {
    const response = await axios.get(`http://localhost:3000/carListing`);

    //  console.log(response.data)

    setDataHome(response.data);
  };

  // selectcar Data

  const handleSelectcarhome = (car) => {
    setSelectcarHome(car);
  };

  // Service getData

  const [getServiceDataHome, setServiceDataHome] = useState([]);

  const ServiceDataHome = async () => {
    let res = await axios.get(`http://localhost:3000/carService`);

    setServiceDataHome(res.data);
  };

  useEffect(() => {
    getDataCarMNGHome();
    ServiceDataHome();
  }, []);

  const userCarListing = () => {
    const logincheck = localStorage.getItem("UsersLogin");

    if (!logincheck) {
      navigate("/login");
      toast("🔒 Please Login first!", {
        position: "top-right",
        className: "toast-message",
      });
    } else if (!selectCarHome.id) {
      toast(" Please Select car!", {
        position: "top-right",
        className: "toast-message",
      });
    } else {
      navigate("/carbooking", { state: { carData: selectCarHome } });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <SearchStart />
        {/* Carousel Start */}
        <div className="container-fluid p-0" style={{ marginBottom: 90 }}>
          <div
            id="header-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="img/carousel-1.jpg"
                  alt="load-Image-Home"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                      Rent A Car
                    </h4>
                    <h1 className="display-1 text-white mb-md-4">
                      Best Rental Cars In Your Location
                    </h1>
                    <a href className="btn btn-primary py-md-3 px-md-5 mt-2">
                      Reserve Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100"
                  src="img/carousel-2.jpg"
                  alt="load-Image-Home"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                      Rent A Car
                    </h4>
                    <h1 className="display-1 text-white mb-md-4">
                      Quality Cars with Unlimited Miles
                    </h1>
                    <a href className="btn btn-primary py-md-3 px-md-5 mt-2">
                      Reserve Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#header-carousel"
              data-slide="prev"
            >
              <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                <span className="carousel-control-prev-icon mb-n2" />
              </div>
            </a>
            <a
              className="carousel-control-next"
              href="#header-carousel"
              data-slide="next"
            >
              <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                <span className="carousel-control-next-icon mb-n2" />
              </div>
            </a>
          </div>
        </div>
        {/* Carousel End */}
        {/* About Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <h1 className="display-1 text-primary text-center">01</h1>
            <h1 className="display-4 text-uppercase text-center mb-5">
              Welcome To <span className="text-primary">Royal Cars</span>
            </h1>
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <img
                  className="w-75 mb-4"
                  src="img/about.png"
                  alt="load-Image-Home"
                />
                <p>
                  Justo et eos et ut takimata sed sadipscing dolore lorem, et
                  elitr labore labore voluptua no rebum sed, stet voluptua amet
                  sed elitr ea dolor dolores no clita. Dolores diam magna clita
                  ea eos amet, amet rebum voluptua vero vero sed clita accusam
                  takimata. Nonumy labore ipsum sea voluptua sea eos sit justo,
                  no ipsum sanctus sanctus no et no ipsum amet, tempor labore
                  est labore no. Eos diam eirmod lorem ut eirmod, ipsum diam
                  sadipscing stet dolores elitr elitr eirmod dolore. Magna elitr
                  accusam takimata labore, et at erat eirmod consetetur tempor
                  eirmod invidunt est, ipsum nonumy at et.
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4 mb-2">
                <div
                  className="d-flex align-items-center bg-light p-4 mb-4"
                  style={{ height: 150 }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-2x fa-headset text-secondary" />
                  </div>
                  <h4 className="text-uppercase m-0">
                    24/7 Car Rental Support
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div
                  className="d-flex align-items-center bg-secondary p-4 mb-4"
                  style={{ height: 150 }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-2x fa-car text-secondary" />
                  </div>
                  <h4 className="text-light text-uppercase m-0">
                    Car Reservation Anytime
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div
                  className="d-flex align-items-center bg-light p-4 mb-4"
                  style={{ height: 150 }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-2x fa-map-marker-alt text-secondary" />
                  </div>
                  <h4 className="text-uppercase m-0">
                    Lots Of Pickup Locations
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Services Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <h1 className="display-1 text-primary text-center">02</h1>
            <h1 className="display-4 text-uppercase text-center mb-5">
              Our Services
            </h1>
            <div className="row">
              {getServiceDataHome &&
                getServiceDataHome.map((homeSevice) => {
                  const { id, provideTitle, serviceIcon, serviceProvide } =
                    homeSevice;

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
                          <h1 className="display-5 text-white mt-n2 m-0">
                            0{id}
                          </h1>
                        </div>
                        <h4 className="text-uppercase mb-3">{provideTitle}</h4>
                        <p className="m-0">{serviceProvide}</p>
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

        {/* Rent A Car Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <h1 className="display-1 text-primary text-center">03</h1>
            <h1 className="display-4 text-uppercase text-center mb-5">
              Find Your Car
            </h1>
            <div className="row">
              {getDataHome &&
                getDataHome.map((carsHome) => {
                  const { id, title, carImg, mfg, type, km, price } = carsHome;

                  return (
                    <div className="col-lg-4 col-md-6 mb-2" key={id}>
                      <div className="rent-item mb-4">
                        <img
                          className="img-fluid mb-4"
                          src={carImg}
                          alt="load-Image-Home"
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
                          onClick={() => {
                            handleSelectcarhome(carsHome);
                            userCarListing();
                          }}
                          className="btn btn-primary px-3"
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

        {/* Team Start */}

        {/* <div className="container-fluid py-5">
          <div className="container py-5">
            <h1 className="display-1 text-primary text-center">04</h1>
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
                  alt="load-Image-Home"
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
                  alt="load-Image-Home"
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
                  alt="load-Image-Home"
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
                  alt="load-Image-Home"
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
                    alt="load-Image-Home"
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
                    alt="load-Image-Home"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner End */}

        {/* Testimonial Start */}
        {/* <div className="container-fluid py-5">
          <div className="container py-5">
            <h1 className="display-1 text-primary text-center">05</h1>
            <h1 className="display-4 text-uppercase text-center mb-5">
              Our Client's Say
            </h1>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <img
                    className="img-fluid ml-n4"
                    src="img/testimonial-1.jpg"
                    alt="load-Image-Home"
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
                    alt="load-Image-Home"
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
                    alt="load-Image-Home"
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
                    alt="load-Image-Home"
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
        {/* Testimonial End */}

        <MeetSlider />

        {/* Contact Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <h1 className="display-1 text-primary text-center">06</h1>
            <h1 className="display-4 text-uppercase text-center mb-5">
              Contact Us
            </h1>
            <div className="row">
              <div className="col-lg-7 mb-2">
                <div
                  className="contact-form bg-light mb-4"
                  style={{ padding: 30 }}
                >
                  <form>
                    <div className="row">
                      <div className="col-6 form-group">
                        <input
                          type="text"
                          className="form-control p-4"
                          placeholder="Your Name"
                          required="required"
                        />
                      </div>
                      <div className="col-6 form-group">
                        <input
                          type="email"
                          className="form-control p-4"
                          placeholder="Your Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control py-3 px-4"
                        rows={5}
                        placeholder="Message"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary py-3 px-5"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 mb-2">
                <div
                  className="bg-secondary d-flex flex-column justify-content-center px-5 mb-4"
                  style={{ height: 435 }}
                >
                  <div className="d-flex mb-3">
                    <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3" />
                    <div className="mt-n1">
                      <h5 className="text-light">Head Office</h5>
                      <p>123 Street, New York, USA</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3" />
                    <div className="mt-n1">
                      <h5 className="text-light">Branch Office</h5>
                      <p>123 Street, New York, USA</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3" />
                    <div className="mt-n1">
                      <h5 className="text-light">Customer Service</h5>
                      <p>customer@example.com</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3" />
                    <div className="mt-n1">
                      <h5 className="text-light">Return &amp; Refund</h5>
                      <p className="m-0">refund@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}

        {/* Vendor Start */}
        {/* <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="owl-carousel vendor-carousel">
              <div className="bg-light p-4">
                <img src="public/img/vendor-1.png" alt="load-Image-Home" />
              </div>
              <div className="bg-light p-4">
                <img src="public/img/vendor-2.png" alt="load-Image-Home" />
              </div>
              <div className="bg-light p-4">
                <img src="public/img/vendor-3.png" alt="load-Image-Home" />
              </div>
              <div className="bg-light p-4">
                <img src="public/img/vendor-4.png" alt="load-Image-Home" />
              </div>
              <div className="bg-light p-4">
                <img src="public/img/vendor-5.png" alt="load-Image-Home" />
              </div>
              <div className="bg-light p-4">
                <img src="public/img/vendor-6.png" alt="load-Image-Home" />
              </div>
              <div className="bg-light p-4">
                <img src="public/img/vendor-7.png" alt="load-Image-Home" />
              </div>
              <div className="bg-light p-4">
                <img src="public/img/vendor-8.png" alt="load-Image-Home" />
              </div>
            </div>
          </div>
        </div> */}

        <AllcomSlider />

        {/* Vendor End */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
