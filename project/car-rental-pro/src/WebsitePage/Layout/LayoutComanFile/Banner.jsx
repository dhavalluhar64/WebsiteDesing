import React from "react";

function Banner() {
  return (
    <div>
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
                  alt
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
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
    </div>
  );
}

export default Banner;
