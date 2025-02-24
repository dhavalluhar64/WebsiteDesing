import React, { useState } from "react";

function DisplayMessage() {
  const [Vote, setVote] = useState("");
  return (
    <>
      <div className="main">
        <h3> Check Voting Eligibility</h3>
        <input
          style={{ marginTop: "3%" }}
          type="number"
          value={Vote}
          placeholder="Enter your age"
          onChange={(e) => setVote(e.target.value)}
        />
        <h2>
          {Vote !== ""
            ? Vote >= 18
              ? "You are eligible to vote"
              : "You are not eligible to vote."
            : "Please enter age."}
        </h2>
      </div>
    </>
  );
}

export default DisplayMessage;
