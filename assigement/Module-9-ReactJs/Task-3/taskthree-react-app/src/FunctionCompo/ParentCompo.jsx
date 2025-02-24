import React from "react";
import ChildCompo from "./ChildCompo";

// Task 1:
//  Create a functional component Greeting that accepts a name as a prop and
// displays "Hello, [name]!".

function ParentCompo() {
  return (
    <>
      <ChildCompo name={"Dhaval"} />
    </>
  );
}

export default ParentCompo;
