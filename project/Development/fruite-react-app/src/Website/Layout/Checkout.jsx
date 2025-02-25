import React, { useContext, useEffect, useState } from "react";
import Header from "../Comman/Header";
import Footer from "../Comman/Footer";
import { CartContext } from "./Store/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, setcartItems, CreateBilling } = useContext(CartContext);

  const navigate = useNavigate();

  const [billingCart, setBillingCart] = useState({
    id: "",
    firstname: "",
    lastname: "",
    companyname: "",
    address: {
      housenoandstreetname: "",
      townandcity: "",
      country: "",
      postcode: "",
      mobileno: "",
      email: "",
      oredernotes: "",
    },
  });

  useEffect(() => {
    if (!localStorage.getItem("RageuserId")) {
      navigate("/userlogin");
      toast("🔒 Please Login first!", {
        position: "top-right",
        className: "toast-message",
      });
    }
  }, [navigate]);

  const handleChanges = (e) => {
    const { name, value } = e.target;

    // const obj = Object.assign({}, [cart]);

    if (
      [
        "housenoandstreetname",
        "townandcity",
        "country",
        "postcode",
        "mobileno",
        "email",
        "oredernotes",
      ].includes(name)
    ) {
      setBillingCart((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setBillingCart((prev) => ({
        ...prev,
        id: new Date().getTime().toString(),
        [name]: value,
        cart: cart,
      }));
    }
  };

  const handleSubmitBillincart = async (e) => {
    e.preventDefault();

    const {
      id,
      firstname,
      lastname,
      companyname,
      address: {
        housenoandstreetname,
        townandcity,
        country,
        postcode,
        mobileno,
        email,
        oredernotes,
      },
    } = billingCart;

    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !companyname.trim() ||
      !housenoandstreetname.trim() ||
      !townandcity.trim() ||
      !country.trim() ||
      isNaN(postcode) ||
      Number(postcode) <= 0 ||
      isNaN(mobileno) ||
      mobileno.length < 10 ||
      mobileno.length > 15 ||
      !email.trim() ||
      !oredernotes.trim()
    ) {
      toast.error(`Please fill the form correctly before submitting.`);

      return;
    }

    try {
      await CreateBilling(billingCart);

      setBillingCart({
        firstname: "",
        lastname: "",
        companyname: "",
        address: {
          housenoandstreetname: "",
          townandcity: "",
          country: "",
          postcode: "",
          mobileno: "",
          email: "",
          oredernotes: "",
        },
      });

      // console.log("Billing info submitted:", billingCart);
    } catch (error) {
      toast.error("Failed to submit billing info.");
      console.error(error);
    }
  };

  const SubTotal = cart.reduce(
    (total, itesm) => total + itesm.price * itesm.quantity,
    0
  );

  // total

  let flateRate = 15.0;
  let localpickup = 8.0;

  let total = flateRate + localpickup + SubTotal;

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
          <h1 className="text-center text-white display-6">Checkout</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Checkout</li>
          </ol>
        </div>
        {/* Single Page Header End */}
        {/* Checkout Page Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <h1 className="mb-4">Billing details</h1>
            <form onSubmit={handleSubmitBillincart}>
              <div className="row g-5">
                <div className="col-md-12 col-lg-6 col-xl-7">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="form-item w-100">
                        <label className="form-label my-3">
                          First Name<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={billingCart.firstname}
                          name="firstname"
                          onChange={handleChanges}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className="form-item w-100">
                        <label className="form-label my-3">
                          Last Name<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={billingCart.lastname}
                          name="lastname"
                          onChange={handleChanges}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Company Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={billingCart.companyname}
                      name="companyname"
                      onChange={handleChanges}
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Address <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="House Number Street Name"
                      value={billingCart.address.housenoandstreetname}
                      name="housenoandstreetname"
                      onChange={handleChanges}
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Town/City<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={billingCart.address.townandcity}
                      name="townandcity"
                      onChange={handleChanges}
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Country<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={billingCart.address.country}
                      name="country"
                      onChange={handleChanges}
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Postcode/Zip<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={billingCart.address.postcode}
                      name="postcode"
                      onChange={handleChanges}
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Mobile<sup>*</sup>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      value={billingCart.address.mobileno}
                      name="mobileno"
                      onChange={handleChanges}
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Email Address<sup>*</sup>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={billingCart.address.email}
                      name="email"
                      onChange={handleChanges}
                    />
                  </div>
                  <div className="form-check my-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="Account-1"
                      name="Accounts"
                      defaultValue="Accounts"
                    />
                    <label className="form-check-label" htmlFor="Account-1">
                      Create an account?
                    </label>
                  </div>
                  <hr />
                  <div className="form-check my-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Address-1"
                      name="Address"
                      defaultValue="Address"
                    />
                    <label className="form-check-label" htmlFor="Address-1">
                      Ship to a different address?
                    </label>
                  </div>
                  <div className="form-item">
                    <textarea
                      name="oredernotes"
                      className="form-control"
                      spellCheck="false"
                      cols={30}
                      rows={11}
                      placeholder="Oreder Notes (Optional)"
                      value={billingCart.address.oredernotes}
                      onChange={handleChanges}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Products</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.length > 0 ? (
                          cart.map((items, idx) => {
                            return (
                              <tr key={items.id}>
                                <th scope="row">
                                  <div className="d-flex align-items-center mt-2">
                                    <img
                                      src={
                                        items.fruitsImg || items.vegetableImg
                                      }
                                      className="img-fluid rounded-circle"
                                      style={{ width: 90, height: 90 }}
                                      alt
                                    />
                                  </div>
                                </th>
                                <td className="py-5">
                                  {items.fruitsname || items.vegetablesname}
                                </td>
                                <td className="py-5">${items.price}.00</td>
                                <td className="py-5">{items.quantity}</td>
                                <td className="py-5">
                                  ${items.price * items.quantity}.00
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <p>No Data Found</p>
                        )}

                        <tr>
                          <th scope="row"></th>
                          <td className="py-5" />
                          <td className="py-5" />
                          <td className="py-5">
                            <p className="mb-0 text-dark py-3">Subtotal</p>
                          </td>
                          <td className="py-5">
                            <div className="py-3 border-bottom border-top">
                              <p className="mb-0 text-dark">${SubTotal}.00</p>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row"></th>
                          <td className="py-5">
                            <p className="mb-0 text-dark py-4">Shipping</p>
                          </td>
                          <td colSpan={3} className="py-5">
                            <div className="form-check text-start">
                              <input
                                type="checkbox"
                                className="form-check-input bg-primary border-0"
                                id="Shipping-1"
                                name="Shipping-1"
                                defaultValue="Shipping"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Shipping-1"
                              >
                                Free Shipping
                              </label>
                            </div>
                            <div className="form-check text-start">
                              <input
                                type="checkbox"
                                className="form-check-input bg-primary border-0"
                                id="Shipping-2"
                                name="Shipping-1"
                                defaultValue="Shipping"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Shipping-2"
                              >
                                Flat rate: ${flateRate}.00
                              </label>
                            </div>
                            <div className="form-check text-start">
                              <input
                                type="checkbox"
                                className="form-check-input bg-primary border-0"
                                id="Shipping-3"
                                name="Shipping-1"
                                defaultValue="Shipping"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Shipping-3"
                              >
                                Local Pickup: ${localpickup}.00
                              </label>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row"></th>
                          <td className="py-5">
                            <p className="mb-0 text-dark text-uppercase py-3">
                              TOTAL
                            </p>
                          </td>
                          <td className="py-5" />
                          <td className="py-5" />
                          <td className="py-5">
                            <div className="py-3 border-bottom border-top">
                              <p className="mb-0 text-dark">${total}.00</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                    <div className="col-12">
                      <div className="form-check text-start my-3">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id="Transfer-1"
                          name="Transfer"
                          defaultValue="Transfer"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Transfer-1"
                        >
                          Direct Bank Transfer
                        </label>
                      </div>
                      <p className="text-start text-dark">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                  <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                    <div className="col-12">
                      <div className="form-check text-start my-3">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id="Payments-1"
                          name="Payments"
                          defaultValue="Payments"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Payments-1"
                        >
                          Check Payments
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                    <div className="col-12">
                      <div className="form-check text-start my-3">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id="Delivery-1"
                          name="Delivery"
                          defaultValue="Delivery"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Delivery-1"
                        >
                          Cash On Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                    <div className="col-12">
                      <div className="form-check text-start my-3">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id="Paypal-1"
                          name="Paypal"
                          defaultValue="Paypal"
                        />
                        <label className="form-check-label" htmlFor="Paypal-1">
                          Paypal
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                    <button
                      type="submit"
                      className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Checkout Page End */}
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
