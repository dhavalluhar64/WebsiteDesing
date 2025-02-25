import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

// Task 3:
// • Create react app with use of useSelector & useDispatch.

function UsedisuseSele() {
  const countData = useSelector((state) => state.count.count);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Count : {countData}
        </h1>
        <div className="col-lg-6 mx-auto">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-success btn-lg px-4 gap-3"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              type="button"
              disabled={countData <= 0}
              className="btn btn-danger btn-lg px-4"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsedisuseSele;
