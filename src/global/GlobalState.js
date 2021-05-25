import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [restaurantDetail, setRestaurantDetail] = useState({});

  return (
    <GlobalStateContext.Provider
      value={{ cart, setCart, restaurantDetail, setRestaurantDetail }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
