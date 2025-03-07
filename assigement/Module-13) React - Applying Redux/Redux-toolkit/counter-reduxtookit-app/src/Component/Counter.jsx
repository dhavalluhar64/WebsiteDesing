import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DcrementCount, IncrementCount } from "../store/Reducer";

const Counter = () => {
  const state = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">{state}</h1>
        <div className="col-lg-6 mx-auto my-3">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-success btn-lg px-4 gap-3"
              onClick={() => dispatch(IncrementCount())}
            >
              Increment
            </button>

            <button
              type="button"
              className="btn btn-danger btn-lg px-4"
              onClick={() => dispatch(DcrementCount())}
            >
              Dcrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
