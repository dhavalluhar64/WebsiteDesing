import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CarDetailsSlider() {
  const navigate = useNavigate();

  const [carData, setCarData] = useState([]);

  // get service Managment
  const getDataCarMNGAPi = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/carListing`);

      setCarData(res.data);
    } catch (error) {
      console.log("some erroe Get ", error);
    }
  };

  useEffect(() => {
    getDataCarMNGAPi();
  }, []);

  const userCarListing = () => {
    const logincheck = localStorage.getItem("UsersLogin");

    if (!logincheck) {
      navigate("/login");
      toast("🔒 Please Login first!", {
        position: "top-right",
        className: "toast-message",
      });
    } else {
      navigate("/carbooking");
    }
  };

  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
  };

  return (
    <div className="container-fluid pb-5">
      <div className="container pb-5">
        <h2 className="mb-4">Related Cars</h2>
        <OwlCarousel
          className="owl-carousel related-carousel position-relative"
          {...options}
        >
          {carData.map((car) => (
            <div className="rent-item " key={car.id}>
              <img
                className="img-fluid mb-4"
                src={car.carImg}
                alt="loading..CarImg"
              />
              <h4 className="text-uppercase mb-4">{car.title}</h4>
              <div className="d-flex justify-content-center mb-4">
                <div className="px-2">
                  <i className="fa fa-car text-primary mr-1" />
                  <span>{car.mfg}</span>
                </div>
                <div className="px-2 border-left border-right">
                  <i className="fa fa-cogs text-primary mr-1" />
                  <span>{car.type}</span>
                </div>
                <div className="px-2">
                  <i className="fa fa-road text-primary mr-1" />
                  <span>{car.km}</span>
                </div>
              </div>
              <button
                onClick={userCarListing}
                className="btn btn-primary px-3"
               
              >
                {car.price}
              </button>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default CarDetailsSlider;
