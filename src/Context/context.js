import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const shopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartData, setCartData] = useState({});
  const [menu, setMenu] = useState("");
  const shipping_fee = 10;

  const addToCart = async (prodId, size) => {
    if (!size) {
      toast.error("Select Product Size!");
    }

    let cartItems = structuredClone(cartData);

    if (cartItems[prodId]) {
      if (cartItems[prodId][size]) {
        cartItems[prodId][size] += 1;
      } else {
        cartItems[prodId][size] = 1;
      }
    } else {
      cartItems[prodId] = {};
      cartItems[prodId][size] = 1;
    }
    setCartData(cartItems);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartData) {
      for (const item in cartData[items]) {
        try {
          if (cartData[items][item] > 0) {
            totalCount += cartData[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateCart = (itemId, size, quantity) => {
    let cartItems = structuredClone(cartData);

    cartItems[itemId][size] = quantity;
    setCartData(cartItems);
  };

  const totalCart = () => {
    let totalAmount = 0;
    for (const items in cartData) {
      let prod = products.find((product) => product._id === items);
      for (const item in cartData[items]) {
        try {
          if (cartData[items][item] > 0) {
            totalAmount += prod.price * cartData[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const contextValue = {
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartData,
    getCartCount,
    updateCart,
    totalCart,
    shipping_fee,
    menu,
    setMenu,
  };

  return (
    <shopContext.Provider value={contextValue}>{children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
