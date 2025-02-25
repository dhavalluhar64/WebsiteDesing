import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { CartContext } from "../Store/CartContext";
import { Link } from "react-router-dom";

const VegetableCarousel = () => {
  const { allproducts, AddTocart } = useContext(CartContext);

  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  const filteringVegitable = allproducts.filter(
    (Vegitable) => Vegitable.bages === "Vegetables"
  );


  return (
    <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        {/* <h1 className="mb-0">Fresh Organic Vegetables</h1> */}
        <OwlCarousel className="owl-theme" {...options}>
          {filteringVegitable.map((veg) => (
            <Link
              to={`/shopdetail/${veg.id}`}
              key={veg.id}
              className="border border-primary rounded position-relative vesitable-item"
            >
              <div className="vesitable-img">
                <img
                  src={veg.vegetableImg}
                  className="img-fluid w-100 rounded-top"
                  style={{ height: "214px" }}
                  alt={veg.vegetablesname}
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>{veg.vegetablesname}</h4>
                <p>{veg.vegetabledetials}</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">$ {veg.price}</p>
                  <button
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                    onClick={() => AddTocart(veg.id)}
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default VegetableCarousel;
