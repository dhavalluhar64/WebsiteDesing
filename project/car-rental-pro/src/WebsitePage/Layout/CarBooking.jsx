import React, { useEffect, useState } from "react";
import SearchStart from "./LayoutComanFile/SearchStart";
import Header from "../ComanPage/Header";
import Footer from "../ComanPage/Footer";
import axios from "axios";
import AllcomSlider from "./LayoutComanFile/AllcomSlider";
// import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

let initialFromData = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  pickupLocation: "",
  dropLocation: "",
  pickupDate: "",
  pickupTime: "",
  adults: "",
  children: "",
  specialRequest: "",
  paymentMethod: "",
};

function CarBooking() {
  const Location = useLocation();

  const carData = Location.state?.carData;

  const [ErrorCarBookingMsg, setErrorCarBookingMsg] = useState("");

  const [fromData, setFromData] = useState(initialFromData);

  const [getallContry, setallCountry] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromData({
      ...fromData,
      id: new Date().getTime().toString(),
      carData: carData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      pickupLocation,
      dropLocation,
      pickupDate,
      pickupTime,
      adults,
      children,
      specialRequest,
      paymentMethod,
    } = fromData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      Number(mobileNumber) <= 0 ||
      !pickupLocation.trim() ||
      !dropLocation.trim() ||
      !pickupDate.trim() ||
      !pickupTime.trim() ||
      Number(adults) <= 0 ||
      Number(children) <= 0 ||
      !specialRequest.trim() ||
      !paymentMethod.trim()
    ) {
      setErrorCarBookingMsg(`Please fill all form fields before submitting.`);

      return;
    } else {
      setErrorCarBookingMsg("");
    }

    try {
      // let response = await axios.get(`http://localhost:3000/Booking`);
      // const existingData = response.data;

      // const newId =
      //   existingData.length > 0
      //     ? Math.max(...existingData.map((item) => parseInt(item.id))) + 1
      //     : 1;

      // const updatedData = { ...fromData, carData: carData };

      let postResponse = await axios.post(
        `http://localhost:3000/Booking`,
        fromData
      );

      console.log(postResponse);

      setFromData(initialFromData);

      toast.success("Booking Successful!");
    } catch (error) {
      console.error("Error Occurred:", error);
      toast.error("Booking Failed! Please try again.");
    }
  };

  // all country listFetching
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let resp = await axios.get(`http://localhost:3000/allcontry`);
        setallCountry(resp.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Render country option

  return (
    <div>
      <Header />
      <SearchStart />
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">
          Car Booking
        </h1>
      </div>

      {/* Booking Form */}
      <div className="container-fluid pb-5">
        <div className="container">
          {ErrorCarBookingMsg && (
            <div class="alert alert-danger" role="alert">
              {ErrorCarBookingMsg}!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4">Personal Detail</h2>
                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      name="firstName"
                      value={fromData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      name="lastName"
                      value={fromData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="email"
                      className="form-control p-4"
                      name="email"
                      value={fromData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      maxLength="10" // Fixed max length issue
                      className="form-control p-4"
                      name="mobileNumber"
                      value={fromData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                <h2 className="mb-4">Booking Detail</h2>
                <div className="row">
                  <div className="col-6 form-group">
                    <select
                      className="custom-select px-4"
                      name="pickupLocation"
                      value={fromData.pickupLocation}
                      onChange={handleChange}
                    >
                      <option value="">Select Pickup Location</option>

                      {getallContry &&
                        Object.entries(getallContry).map(
                          ([key, countryData]) => {
                            return (
                              <option key={key} value={countryData.country}>
                                {countryData.country}
                              </option>
                            );
                          }
                        )}
                    </select>
                  </div>
                  <div className="col-6 form-group">
                    <select
                      className="custom-select px-4"
                      name="dropLocation"
                      value={fromData.dropLocation}
                      onChange={handleChange}
                    >
                      <option value="">Select Drop Location</option>

                      {getallContry &&
                        Object.entries(getallContry).map(
                          ([key, countryData]) => {
                            return (
                              <option key={key} value={countryData.country}>
                                {countryData.country}
                              </option>
                            );
                          }
                        )}
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      type="date"
                      className="form-control p-4"
                      name="pickupDate"
                      value={fromData.pickupDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="time"
                      className="form-control p-4"
                      name="pickupTime"
                      value={fromData.pickupTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      type="number"
                      className="form-control p-4"
                      name="adults"
                      value={fromData.adults}
                      onChange={handleChange}
                      placeholder="Number of Adults"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="number"
                      className="form-control p-4"
                      name="children"
                      value={fromData.children}
                      onChange={handleChange}
                      placeholder="Number of Children"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control py-3 px-4"
                    rows="3"
                    name="specialRequest"
                    value={fromData.specialRequest}
                    onChange={handleChange}
                    placeholder="Special Request"
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <h2 className="text-primary mb-4">Payment</h2>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Paypal"
                      onChange={handleChange}
                    />{" "}
                    Paypal
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Direct Check"
                      onChange={handleChange}
                    />{" "}
                    Direct Check
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Bank Transfer"
                      onChange={handleChange}
                    />{" "}
                    Bank Transfer
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-primary py-3"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AllcomSlider />
      <Footer />
    </div>
  );
}

export default CarBooking;
