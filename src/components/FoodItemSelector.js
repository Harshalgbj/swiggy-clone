import { CDN_URL } from "./contants";
import { Link } from "react-router-dom";
import React from "react";

const FoodItemSelector = ({ id, name, price, imageId, description }) => {
  return (
    <div className=" w-56 p-2 m-2 shadow-lg bg-orange-50">
      <div className="res-card">
        <img className="img-card" src={CDN_URL + imageId} />
        <h2 className=" font-bold text-lg">{name}</h2>
        <h4>{description}</h4>
        <h4 className=" font-bold">Price-{price / 100}</h4>
      </div>
    </div>
  );
};

export default FoodItemSelector;
