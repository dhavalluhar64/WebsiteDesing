import React from "react";

function Listrendering() {
  const fruits = ["apple", "banana", "stawberry", "mango", "peinapple"];
  return (
    <>
      <div className="main">
        <h1>List of items</h1>
        <ul>
          {fruits.length > 0 ? (
            fruits.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })
          ) : (
            <p>No Data Found</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default Listrendering;
