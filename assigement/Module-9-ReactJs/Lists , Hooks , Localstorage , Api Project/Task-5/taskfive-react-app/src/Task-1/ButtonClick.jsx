import React, { useState } from "react";

const ButtonClick = () => {
  const [click, setClick] = useState("Not Clicked");

  return (
    <>
      <h1>Button Click : {click}</h1>
      <button
        style={{ padding: "5px 20px" }}
        onClick={() => setClick("Clicked")}
      >
        Click
      </button>
    </>
  );
};

export default ButtonClick;
