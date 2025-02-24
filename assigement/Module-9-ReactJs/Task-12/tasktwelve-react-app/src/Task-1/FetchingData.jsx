import React, { useEffect, useState } from "react";

import axios from "axios";

// Task 1:
// • Create a React component that fetches data from a public API (e.g., a list of users)and
// displays it in a table format.

const FetchingData = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const DataFetching = async () => {
      const res = await axios.get(
        "https://6717453bb910c6a6e0273c22.mockapi.io/user/john"
      );
      setFetchData(res.data);
    };

    DataFetching();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Fetches Data table Formate</h1>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {fetchData.length > 0 ? (
              fetchData.map((users, id) => {
                return (
                  <tr key={users.id}>
                    <th scope="row">{users.id}</th>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>
                      <img
                        src={users.avatar}
                        alt={users.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FetchingData;
