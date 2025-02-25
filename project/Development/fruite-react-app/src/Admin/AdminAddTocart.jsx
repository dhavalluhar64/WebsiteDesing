import React, { useContext, useState } from "react";

// import { MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import AdminHeader from "./AdminHeader";
import { CartContext } from "../Website/Layout/Store/CartContext";
import { toast } from "react-toastify";

function AdminAddTocart() {
  const { CreateFruiteVeg } = useContext(CartContext);

  const [fromData, setFormData] = useState({
    id: "",
    name: "",
    details: "",
    imgeUrl: "",
    price: "",
    kg: "",
    quantity: 1,
    type: "Fruits",
  });

  // Formhandling

  const handleChangeItemsPost = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...fromData,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  };

  // formSubmitting

  const HandleformSubmitting = async (e) => {
    e.preventDefault();

    try {
      const URL =
        fromData.type === "Fruits"
          ? "http://localhost:3000/allproducts?bages=Fruits"
          : "http://localhost:3000/allproducts?bages=Vegetables";

      const payload =
        fromData.type === "Fruits"
          ? {
              fruitsname: fromData.name,
              bages: "Fruits",
              fruitedetials: fromData.details,
              fruitsImg: fromData.imgeUrl,
              price: fromData.price,
              kg: fromData.kg,
              quantity: fromData.quantity,
            }
          : {
              vegetablesname: fromData.name,
              bages: "Vegetables",
              vegetabledetials: fromData.details,
              vegetableImg: fromData.imgeUrl,
              price: fromData.price,
              kg: fromData.kg,
              quantity: fromData.quantity,
            };

      const res = await CreateFruiteVeg(URL, payload);

      console.log(res);

      toast.success("Item Successfully Added!");
      setFormData({
        name: "",
        details: "",
        imgeUrl: "",
        price: "",
        kg: "",
        quantity: "",
        type: "Fruits",
      });
    } catch (error) {
      console.log(`Error Adding items: ${error.message}`);
    }
  };

  return (
    <>
      <AdminHeader />

      <div className="container py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Add Fruits & Vegetables
          </h1>

          <div className="row">
            <div className="col-lg-12 mb-2">
              <div
                className="contact-form bg-light mb-4"
                style={{ padding: 30 }}
              >
                <form onSubmit={HandleformSubmitting}>
                  <div className="row">
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter Name"
                        name="name"
                        value={fromData.name}
                        onChange={handleChangeItemsPost}
                      />
                    </div>
                    <div className="col-12 form-group my-2">
                      <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Enter Details"
                        name="details"
                        value={fromData.details}
                        onChange={handleChangeItemsPost}
                      />
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="url"
                      className="form-control p-3"
                      placeholder="Enter Image url"
                      name="imgeUrl"
                      value={fromData.imgeUrl}
                      onChange={handleChangeItemsPost}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Enter Price"
                      name="price"
                      value={fromData.price}
                      onChange={handleChangeItemsPost}
                    />
                  </div>

                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Enter Weigth (kg)"
                      name="kg"
                      value={fromData.kg}
                      onChange={handleChangeItemsPost}
                    />
                  </div>

                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Enter Quantity"
                      name="quantity"
                      value={fromData.quantity}
                      onChange={handleChangeItemsPost}
                    />
                  </div>

                  <div className="form-group">
                    <select
                      className="form-select p-3"
                      name="type"
                      value={fromData.type}
                      onChange={handleChangeItemsPost}
                    >
                      <option value="Fruits">Fruits</option>
                      <option value="Vegetables">Vegetables</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary py-3 px-5 mt-2"
                      type="submit"
                    >
                      FRUITS-VEGETABLS ADD
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAddTocart;
