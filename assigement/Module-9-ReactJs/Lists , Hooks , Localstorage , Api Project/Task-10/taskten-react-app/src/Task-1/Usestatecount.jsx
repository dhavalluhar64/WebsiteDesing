import React, { useState } from "react";

// Task 1:
// • Create a functional component with a counter using the useState() hook. Include
// buttons to increment and decrement the counter.

function Usestatecount() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">
            Count : {count}
          </h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 gap-3"
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
              <button
                type="button"
                disabled={count <= 0}
                className="btn btn-danger btn-lg px-4"
                onClick={() => setCount(count - 1)}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usestatecount;
