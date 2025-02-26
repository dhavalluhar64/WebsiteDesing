import React, { useContext, useEffect, useState } from "react";
import Header from "../Comman/Header";
import Footer from "../Comman/Footer";
import { CartContext } from "./Store/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const navigate = useNavigate();

  const { cart, setcartItems } = useContext(CartContext);

  const Increment = (id) => {
    setcartItems((preveCart) => {
      const updateCart = preveCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      localStorage.setItem("cartData", JSON.stringify(updateCart));

      return updateCart;
    });
  };

  const Decrement = (id) => {
    setcartItems((preveCart) => {
      const updateCart = preveCart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem("cartData", JSON.stringify(updateCart));

      return updateCart;
    });
  };

  // remove Items

  const Removecart = (id) => {
    setcartItems((preveCart) => {
      const DeleteData = preveCart.filter((items) => items.id !== id);

      localStorage.removeItem("cartData");

      return DeleteData;
    });
  };

  // navigate

  // total

  let shippingChar = 3.0;

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const allTotal = shippingChar + total;

  const LoginCheck = () => {
    const check = localStorage.getItem("RageuserId");

    if (!check) {
      toast("🔒 Please Login first!", {
        position: "top-right",
        className: "toast-message",
      });
      navigate("/userlogin");
    } else {
      navigate("/Checkoutrt");
    }
  };

  return (
    <>
      <div>
        <Header />
        {/* Modal Search Start */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Search by keyword
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center">
                <div className="input-group w-75 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Search End */}
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Cart</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Cart</li>
          </ol>
        </div>
        {/* Single Page Header End */}
        {/* Cart Page Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 ? (
                    cart.map((totalData, idx) => {
                      return (
                        <tr key={totalData.id}>
                          <th scope="row">
                            <div className="d-flex align-items-center">
                              <img
                                src={
                                  totalData.fruitsImg || totalData.vegetableImg
                                }
                                className="img-fluid me-5 rounded-circle"
                                style={{ width: 80, height: 80 }}
                                alt
                              />
                            </div>
                          </th>
                          <td>
                            <p className="mb-0 mt-4">
                              {totalData.fruitsname || totalData.vegetablesname}
                            </p>
                          </td>
                          <td>
                            <p className="mb-0 mt-4">{totalData.price} $</p>
                          </td>
                          <td>
                            <div
                              className="input-group quantity mt-4"
                              style={{ width: 100 }}
                            >
                              <div className="input-group-btn">
                                <button
                                  className="btn btn-sm btn-minus rounded-circle bg-light border"
                                  onClick={() => Decrement(totalData.id)}
                                >
                                  <i className="fa fa-minus" />
                                </button>
                              </div>
                              <input
                                type="text"
                                className="form-control form-control-sm text-center border-0"
                                value={totalData.quantity}
                              />
                              <div className="input-group-btn">
                                <button
                                  className="btn btn-sm btn-plus rounded-circle bg-light border"
                                  onClick={() => Increment(totalData.id)}
                                >
                                  <i className="fa fa-plus" />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 mt-4">
                              {totalData.price * totalData.quantity} $
                            </p>
                          </td>
                          <td>
                            <button
                              className="btn btn-md rounded-circle bg-light border mt-4"
                              onClick={() => Removecart(totalData.id)}
                            >
                              <i className="fa fa-times text-danger" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <p>No Data Found</p>
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <input
                type="text"
                className="border-0 border-bottom rounded me-5 py-3 mb-4"
                placeholder="Coupon Code"
              />
              <button
                className="btn border-secondary rounded-pill px-4 py-3 text-primary"
                type="button"
              >
                Apply Coupon
              </button>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8" />
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">
                      Cart <span className="fw-normal">Total</span>
                    </h1>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4">Subtotal:</h5>
                      <p className="mb-0">${total}.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0 me-4">Shipping</h5>
                      <div className>
                        <p className="mb-0">Flat rate: ${shippingChar}.00</p>
                      </div>
                    </div>
                    <p className="mb-0 text-end">Shipping to Ukraine.</p>
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                    <p className="mb-0 pe-4">${allTotal}.00</p>
                  </div>
                  <button
                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button"
                    onClick={LoginCheck}
                  >
                    Proceed Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Page End */}
        <Footer />
      </div>
    </>
  );
}

export default Cart;
