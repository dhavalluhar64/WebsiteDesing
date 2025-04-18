import React from "react";

function LoadingSpinner() {
  return (
    <>
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  );
}

export default LoadingSpinner;
