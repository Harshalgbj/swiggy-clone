import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import FoodItemSelector from "./FoodItemSelector";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  //   console.log(cartItem[0]);
  const dispatch = useDispatch();

  const handleClearCard = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>
        <button
          className="p-2 m-5 bg-green-100"
          onClick={() => handleClearCard()}
        >
          Clear
        </button>
      </div>
      <div className=" flex flex-wrap">
        {cartItem?.map((item) => (
          <FoodItemSelector key={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </>
  );
};

export default Cart;
