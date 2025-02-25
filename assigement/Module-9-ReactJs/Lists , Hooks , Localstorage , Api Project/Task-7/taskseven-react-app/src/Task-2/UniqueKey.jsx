import React from "react";

function UniqueKey() {
  const users = [
    { id: 1, name: "dhaval" },
    { id: 2, name: "rohan" },
    { id: 3, name: "Jaimin" },
    { id: 4, name: "Lawrence" },
  ];

  return (
    <>
      <div className="main">
        <h1>Unique Key Users</h1>
        <ul>
          {users.length > 0 ? (
            users.map((user, idx) => {
              return <li key={user.id}> {user.name}</li>;
            })
          ) : (
            <p>No Data Found</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default UniqueKey;
