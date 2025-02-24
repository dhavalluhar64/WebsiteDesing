import React from "react";

// Task:
// • Create a React component that renders the following JSX elements:
// • A heading with the text "Welcome to JSX".
// • A paragraph explaining JSX with dynamic data (use curly braces to insert
// variables).

const JSX_Element = () => {
  const topic = "JSX (JavaScript XML)";

  const description =
    "JSX allows you to write HTML-like syntax inside JavaScript, making UI development easier and more readable.";

  return (
    <>
      <h1>Welcome to jsx</h1>
      <p>
        {topic} is a syntax extension for JavaScript.{description}
      </p>
    </>
  );
};

export default JSX_Element;
