import React from "react";
import { Component } from "react";

// Task 2:
// • Implement a component that logs a message to the console when it updates using
// componentDidUpdate(). Log another message when the component unmounts
// using componentWillUnmount()

class LogsMessage extends Component {
  constructor() {
    super();

    this.state = { count: 0 };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `Component update! Previos Count: ${prevState.count} ,new count: ${this.state.count}`
    );
  }

  componentWillUnmount() {
    console.log(`Component is being unmounted`);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

export default LogsMessage;
