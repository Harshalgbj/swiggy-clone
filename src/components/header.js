import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

export const Title = () => (
  <a>
    <img
      data-testid="logo"
      className=" h-24 pl-4"
      alt="logo"
      src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
    ></img>
  </a>
);

export const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  // const { user } = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  return (
    <div className="flex  justify-between bg-orange-50 shadow-lg   ">
      <Title />
      <div className="logo-container"></div>
      <div className="nav-item">
        <ul className=" flex py-9 ">
          <Link to="/">
            <li className=" px-2">Home</li>
          </Link>
          <br />
          <Link to="/about">
            <li className=" px-2">About us</li>
          </Link>

          <Link to="/contact">
            <li className=" px-2">Contact</li>
          </Link>

          <Link to="/instamart">
            <li>instamart</li>
          </Link>
          <Link to="/cart">
            <li className=" px-2" data-testid="cart">
              Cart-{cartItem.length} items
            </li>
          </Link>
        </ul>
      </div>
      {/* {user.name} */}
      {isLogIn ? (
        <button onClick={() => setIsLogIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogIn(true)}>Login</button>
      )}
    </div>
  );
};
