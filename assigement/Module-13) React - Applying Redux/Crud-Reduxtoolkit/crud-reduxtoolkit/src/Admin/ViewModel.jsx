import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminHead from "./AdminHead";

function ViewModel() {
  const { products } = useSelector((state) => state.product);

  const { id } = useParams();

  const update = products.find((pro) => Number(pro.id) === Number(id)) || null;

  if (!update) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <AdminHead />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Product Details</h3>
            <table className="table table-bordered border-primary">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{update.title}</td>
                  <td>{update.description}</td>
                  <td>{update.price}</td>
                  <td>
                    <img
                      src={update.image}
                      alt={update.image}
                      style={{ height: "50px", borderRadius: "50px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewModel;
