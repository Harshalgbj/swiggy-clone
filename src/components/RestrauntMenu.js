import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "./contants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className=" flex h-auto">
      <div>
        <h1>restaurant id : {id}</h1>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h3>
        <img
          className=" w-56 "
          src={
            CDN_URL +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.cuisines}</h3>
        <h3>
          {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
      </div>
      <br />
      <div className=" pl-10 m-5 ">
        <h1 className=" text-lg text-fuchsia-700">Menu</h1>
        <ul>
          {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} -
                <button
                  className="p-1 bg-green-100"
                  onClick={() => addFoodItem(item)}
                >
                  Add
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
