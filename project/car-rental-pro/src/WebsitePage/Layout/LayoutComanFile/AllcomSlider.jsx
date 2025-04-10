import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function AllcomSlider() {
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000, // Time for autoplay to change items
    responsive: {
      0: {
        items: 1, // 1 item on small screens
      },
      600: {
        items: 2, // 2 items on medium screens
      },
      1000: {
        items: 4, // 4 items on larger screens
      },
    },
    navText: [
      '<i class="fa fa-chevron-left"></i>', // Left Arrow
      '<i class="fa fa-chevron-right"></i>', // Right Arrow
    ],
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-4 text-center mb-5">Our Vendors</h1>

          {/* OwlCarousel for Vendors */}
          <OwlCarousel className="owl-carousel vendor-carousel" {...options}>
            <div className="bg-light p-4">
              <img
                src="public/img/vendor-1.png"
                alt="Vendor 1"
                className="img-fluid"
              />
            </div>
            <div className="bg-light p-4">
              <img
                src="public/img/vendor-2.png"
                alt="Vendor 2"
                className="img-fluid"
              />
            </div>
            <div className="bg-light p-4">
              <img
                src="public/img/vendor-3.png"
                alt="Vendor 3"
                className="img-fluid"
              />
            </div>
            <div className="bg-light p-4">
              <img
                src="public/img/vendor-4.png"
                alt="Vendor 4"
                className="img-fluid"
              />
            </div>
            <div className="bg-light p-4">
              <img
                src="public/img/vendor-5.png"
                alt="Vendor 5"
                className="img-fluid"
              />
            </div>
            <div className="bg-light p-4">
              <img
                src="public/img/vendor-6.png"
                alt="Vendor 6"
                className="img-fluid"
              />
            </div>
            <div className="bg-light p-4">
              <img
                src="public/img/vendor-7.png"
                alt="Vendor 7"
                className="img-fluid"
              />
            </div>
            <div className="bg-light p-4">
              <img
                src="public/img/vendor-8.png"
                alt="Vendor 8"
                className="img-fluid"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default AllcomSlider;
