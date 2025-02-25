import React, { useEffect, useState } from "react";

// Task 2:
// • Use the useEffect() hook to fetch and display data from an API when the
// component mounts.

function UseEffectFetch() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    function DataFetching() {
      fetch(`https://api.escuelajs.co/api/v1/products`)
        .then((resposn) => resposn.json())
        .then((result) => {
          setData(result);
        })
        .catch((error) =>
          console.log(`fetching Data Error : ${error.message}`)
        );
    }

    DataFetching();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Fetching Data useEffect Hooks</h1>
          {Data.length > 0 ? (
            Data.map((products, idx) => {
              return (
                <div className="col-md-3" key={products.id}>
                  <div className="card my-2" style={{ width: "18rem" }}>
                    <img
                      src={products.category.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5 className="card-title">{products.title}</h5>
                      <p className="card-text">{products.description}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default UseEffectFetch;
