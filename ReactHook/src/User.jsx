import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

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

// const getAddress = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         nation: "USA",
//         city: {
//           street: "100 NEW YORK",
//           house: "building",
//         },
//       });
//     }, 3000);
//   });
// };

export default function User() {
  const [firstName] = useState("Alex");
  const [age, setAge] = useState(19);
  const [address, setAddress] = useState(initialAddress);

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const changeStreet = () => {
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
  // useEffect(() => {
  //   console.log("user effect");
  //   getAddress().then((res) => {
  //     setAddress((prevAddress) => {
  //       const newAddress = { ...prevAddress };
  //       newAddress.city = res.city;
  //       return newAddress;
  //     });
  //   });
  // }, []);

  return (
    <div>
      <h1>user function component</h1>
      <UserProfile
        address={address}
        age={age}
        firstName={firstName}
        increaseAge={increaseAge}
      />
      <button onClick={changeStreet}>change street</button>
    </div>
  );
}
