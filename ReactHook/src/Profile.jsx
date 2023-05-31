import React from "react";

export default function Profile({ address, age, firstName }) {
  return (
    <ul>
      <li>FirstName: {firstName}</li>
      <li>Age: {age}</li>
      <li>Nation: {address.nation}</li>
      <li>street: {address.city.street}</li>
      <li>house: {address.city.house}</li>
    </ul>
  );
}
