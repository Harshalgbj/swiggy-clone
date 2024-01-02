import { Link } from "react-router-dom";
import { CDN_URL } from "./contants";
import { restaurantList } from "./contants";

export const CardContainer = ({
  id,
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <div className=" w-56  p-2 m-2 shadow-lg bg-orange-50">
      <Link to={`restaurant/${id}`}>
        <div className="res-card">
          <img className="img-card  " src={CDN_URL + cloudinaryImageId} />
          <h2 className=" font-bold text-lg">{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
        </div>
      </Link>
    </div>
  );
};
