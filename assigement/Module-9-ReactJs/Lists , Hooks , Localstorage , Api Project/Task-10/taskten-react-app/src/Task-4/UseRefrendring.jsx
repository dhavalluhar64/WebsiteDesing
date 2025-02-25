import React, { useRef, useState } from "react";

// Task 4:
// • Create react app to avoid re-renders in react application by useRef?

function UseRefrendring() {
  const [count, setCount] = useState(0);

  const renderingCount = useRef(0);
  const previosCount = useRef(0);

  renderingCount.current += 1;

  const perveUpdateCount = () => {
    previosCount.current = count;
    alert(`Upadate previous value ${previosCount.current}`);
  };

  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Count : {count}
        </h1>

        <h1 className="display-5 fw-bold text-body-emphasis">
          Rendering Count : {renderingCount.current}
        </h1>

        <h1 className="display-5 fw-bold text-body-emphasis">
          Previous Value : {previosCount.current}
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
              // disabled={countData <= 0}
              className="btn btn-danger btn-lg px-4"
              onClick={perveUpdateCount}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseRefrendring;
