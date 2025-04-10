import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function SliderPage() {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',  // Left Arrow
      '<i class="fa fa-chevron-right"></i>', // Right Arrow
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-1 text-primary text-center">04</h1>
          <h1 className="display-4 text-uppercase text-center mb-5">
            Meet Our Team
          </h1>

          {/* Owl Carousel component */}
          <OwlCarousel
            className="owl-carousel team-carousel position-relative"
            {...options}
          >
            {/* Team Member 1 */}
            <div className="team-item">
              <img
                className="img-fluid w-100"
                src="img/team-1.jpg"
                alt="Team Member 1"
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

            {/* Team Member 2 */}
            <div className="team-item">
              <img
                className="img-fluid w-100"
                src="img/team-2.jpg"
                alt="Team Member 2"
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

            {/* Add more team members here */}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default SliderPage;
