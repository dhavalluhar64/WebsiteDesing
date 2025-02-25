import React, { useState } from "react";

// Task 2:
// • Create a form with an input field in React. Display the value of the input field
// dynamically as the user types in it.

function DynamicInput() {
  const [inputvalue, setinputvalue] = useState("");

  const handlechanges = (e) => {
    setinputvalue(e.target.value);
  };

  return (
    <>
      <h1>Dynamic Input Form</h1>
      <form style={{ margin: "10px" }}>
        <input
          type="text"
          id=""
          placeholder="Type Somthing"
          value={inputvalue}
          onChange={handlechanges}
        />
        <p>You type : {inputvalue}</p>
      </form>
    </>
  );
}

export default DynamicInput;
