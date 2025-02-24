import React from "react";
import { useState } from "react";

// Task 1:
// • Create a component that conditionally displays a login or logout button based onthe
// user’s login status.

const Conditionally = () => {
  const [isLogin, setIslogin] = useState(false);

  const handleclikc = () => {
    setIslogin((prev) => !prev);
  };

  return (
    <>
      <h1>{isLogin ? "Welcome back" : "Please login"}</h1>
      <button onClick={handleclikc}>{isLogin ? "Logout" : "Login"}</button>
    </>
  );
};

export default Conditionally;
