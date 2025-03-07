import React, { useEffect } from "react";
import Header from "./Comman/Header";
import FooterPage from "./Comman/FooterPage";
import { useDispatch, useSelector } from "react-redux";
import { productsGet } from "./Store/Slice/productsSlice";
import LoadingSppiner from "./LoadingSppiner";
import ErrorMessage from "./ErrorMessage";

function Home() {
  const { products, loading, error } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsGet());
  }, []);

  return (
    <>
      <Header />
      <div className="container my-3">
        <div className="row">
          {loading ? (
            <LoadingSppiner />
          ) : error ? (
            <ErrorMessage />
          ) : products.length > 0 ? (
            products.map((product, idx) => {
              return (
                <div className="col-md-4" key={idx}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No data Found</p>
          )}
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default Home;
