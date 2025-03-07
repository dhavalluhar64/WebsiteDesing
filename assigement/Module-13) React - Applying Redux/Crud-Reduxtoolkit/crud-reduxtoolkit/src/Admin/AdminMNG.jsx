import React, { useEffect } from "react";
import AdminHead from "./AdminHead";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Deleteproduct,
  productsGet,
} from "../Webpage/Store/Slice/productsSlice";

function AdminMNG() {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsGet());
  }, []);

  const DeleteDatapro = (id) => {
    dispatch(Deleteproduct(id));
  };

  return (
    <>
      <AdminHead />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((pro, idx) => {
              return (
                <tr key={pro.id}>
                  <th scope="row">{pro.id}</th>
                  <td>{pro.title}</td>
                  <td>{pro.description}</td>
                  <td>{pro.price}</td>
                  <td>
                    <img
                      src={pro.image}
                      alt={pro.image}
                      style={{
                        height: "50px",
                        borderRadius: "50px",
                        width: "50px",
                      }}
                    />
                  </td>
                  <td className="d-flex">
                    <Link
                      className="btn btn-warning"
                      to={`/AdminMNG/${pro.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-info mx-1"
                      to={`/UpdatePro/${pro.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => DeleteDatapro(pro.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default AdminMNG;
