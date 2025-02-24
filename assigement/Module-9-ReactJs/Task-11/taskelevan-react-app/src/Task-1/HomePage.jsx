import React from "react";
import HeaderPage from "./HeaderPage";

// • Task 1:
// • Set up a basic React Router with two routes: one for a Home page and one for an
// About page. Display the appropriate content based on the URL.

function HomePage() {
  return (
    <>
      <HeaderPage />

      <h1>Hello this is the Home page </h1>
    </>
  );
}

export default HomePage;
