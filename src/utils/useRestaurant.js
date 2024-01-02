import React, { useState } from "react";
import { useEffect } from "react";
import { FETCH_MENU_URL } from "../components/contants";

const useRestaurant = (id) => {
  // Get data from API
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    fetch(FETCH_MENU_URL + id, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        contentType: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setRestaurant(data));
  }, [id]);

  // return
  return restaurant;
};

export default useRestaurant;

//  Just the copy of code--------------

// const [restaurant, setRestaurant] = useState({});

// useEffect(() => {
//   fetch(
//     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId=${id}`
//   )
//     .then((response) => response.json())
//     .then((data) => setRestaurant(data));
// }, [id]);
