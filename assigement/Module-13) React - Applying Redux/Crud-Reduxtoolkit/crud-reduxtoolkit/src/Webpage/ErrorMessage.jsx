import React from "react";

function ErrorMessage() {
  const { error } = useSelector((state) => state.product);

  return (
    <>
      <h1>{error}</h1>
    </>
  );
}

export default ErrorMessage;
