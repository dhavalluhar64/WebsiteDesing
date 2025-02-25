import React from "react";

// Task 1:
// • Create a React component UserCard that accepts name, age, and location asprops
// and displays them in a card format.

const UserCard = ({ name, age, location }) => {
  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", margin: "0 auto", paddingTop: "10px" }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Age : {age}</p>
          <p>Location : {location}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default UserCard;
