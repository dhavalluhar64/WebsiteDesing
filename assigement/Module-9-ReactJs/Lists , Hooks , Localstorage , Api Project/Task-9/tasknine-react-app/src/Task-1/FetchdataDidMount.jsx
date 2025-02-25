import React from "react";
import { Component } from "react";

// Task 1:
// • Create a class component that fetches data from an API when the component
// mounts using componentDidMount(). Display the data in the component.

class FetchdataDidMount extends Component {
  constructor() {
    super();

    this.state = { arr: [] };
  }

  componentDidMount() {
    fetch("https://6717453bb910c6a6e0273c22.mockapi.io/user/john")
      .then((res) => res.json())
      .then((data) => this.setState({ arr: data }))
      .catch((error) => console.log(`Error fetching data : ${error}`));
  }

  render() {
    return (
      <>
        <h2>User List</h2>
        <div className="main">
          <ul>
            {this.state.arr.map((user, idx) => {
              return (
                <li key={user.id}>
                  <strong>{user.name}</strong> - {user.email}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default FetchdataDidMount;
