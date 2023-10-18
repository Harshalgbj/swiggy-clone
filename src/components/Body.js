import { restaurantList } from "./contants";
import { CardContainer } from "./CardContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
function filterData(searchTxt, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchTxt)
  );
}
//ok

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  // conditional rendering
  // code shimmer UI

  const isOnline = useOnline();
  {
    console.log(restaurants);
  }
  if (!isOnline) {
    return (
      <div>
        <div className="Offline">c</div>
        <h1>Offline, please check your Internet!!</h1>
      </div>
    );
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container p-5 bg-orange-50 my-3">
        <input
          type="text"
          className=" focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setsearchTxt(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-3 bg-purple-500 hover:bg-gray-600 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div
        className="flex flex-wrap md:container md:mx-auto  "
        data-testid="res-list"
      >
        {restaurants.map((restaurant, index) => {
          return (
            <CardContainer {...restaurant.info} key={restaurant?.info?.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
