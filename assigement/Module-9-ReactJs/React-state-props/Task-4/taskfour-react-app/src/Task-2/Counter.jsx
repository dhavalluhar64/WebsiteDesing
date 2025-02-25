import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">
            {this.state.count}
          </h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 gap-3"
                onClick={() => this.setState({ count: this.state.count + 1 })}
              >
                Increment
              </button>
              <button
                type="button"
                disabled={this.state.count <= 0}
                className="btn btn-danger btn-lg px-4"
                onClick={() => this.setState({ count: this.state.count - 1 })}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
