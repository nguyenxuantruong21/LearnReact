import React, { useEffect, useState } from "react";

const initialAddress = () => {
  console.log("initial");
  return {
    nation: "Vietnam",
    city: {
      street: "23 le hai  ha dong",
      house: "building",
    },
  };
};

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: "USA",
        city: {
          street: "100 NEW YORK",
          house: "building",
        },
      });
    }, 3000);
  });
};

export default function User() {
  const [firstName] = useState("Alex");
  const [age, setAge] = useState(19);
  const [address, setAddress] = useState(initialAddress);

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const changeCity = () => {
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city };
      newCity.street = "phong van ba vi";
      return {
        ...prevAddress,
        city: newCity,
      };
    });
  };

  // user effect
  useEffect(() => {
    console.log("user effect");
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress };
        newAddress.city = res.city;
        return newAddress;
      });
    });
  }, []);

  return (
    <div>
      <h1>User Function components</h1>
      <ul>
        <li>FirstName: {firstName}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>street: {address.city.street}</li>
        <li>house: {address.city.house}</li>
      </ul>
      <button onClick={increaseAge}>Increase</button>
      <button onClick={changeCity}>change city</button>
    </div>
  );
}
