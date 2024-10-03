import React, { useState } from "react";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  return (
    <div className="lg:py-24 font-style w-[80vw] mx-auto flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col gap-3 w-full sm:max-w-[480px] mt-5 mb-5">
        <div className="mb-4">
          <p className="text-xl lg:2xl font-bold">DELIVERY DETAILS</p>
        </div>
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder="First name"
            className="w-full h-6 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full h-3 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full h-3 px-2 py-4 border border-gray-200 rounded-md text-sm outline-none"
        />
        <input
          type="text"
          placeholder="Street"
          className="w-full h-3 px-2 py-4 border border-gray-200 rounded-md text-sm outline-none"
        />
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder="City"
            className="w-full h-6 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full h-3 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
        </div>
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder="Pin Code"
            className="w-full h-6 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full h-3 text-gray-500 border border-gray-200 py-4 px-2 rounded-md text-sm outline-none"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="w-full h-3 px-2 py-4 border border-gray-200 rounded-md text-sm outline-none"
        />
      </div>
      <div className="w-full sm:max-w-[480px] mt-16 mb-5">
        <CartTotal />
        <div className="flex flex-col w-full mt-8 gap-3">
          <p className="text-lg font-bold">PAYMENT METHOD</p>
          <div className="flex gap-3 w-full">
            <div
              className="flex items-center gap-1 border border-gray-300 px-4 py-1"
              onClick={() => setMethod("stripe")}
            >
              <p
                className={`border border-gray-300 rounded-full h-4 w-4 ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 " />
            </div>
            <div
              className="flex items-center gap-1 border border-gray-300 px-4 py-1"
              onClick={() => setMethod("razorpay")}
            >
              <p
                className={`border border-gray-300 rounded-full h-4 w-4 ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 " />
            </div>
            <div
              className="flex items-center gap-1 border border-gray-300 px-4 py-1"
              onClick={() => setMethod("cod")}
            >
              <p
                className={`border border-gray-300 rounded-full h-4 w-4 ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-[14px] font-semibold text-gray-800">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="text-end mt-5">
            <Link to={"/orders"}>
              <button className="bg-black text-white text-sm px-6 py-2 rounded-sm hover:bg-gray-900 active:bg-gray-700">
                PLACE ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
