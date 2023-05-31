import React from "react";
import Profile from "./Profile";

export default function UserProfile({ address, age, firstName, increaseAge }) {
  return (
    <div>
      <Profile address={address} age={age} firstName={firstName} />
      <button onClick={increaseAge}>Increase</button>
    </div>
  );
}
