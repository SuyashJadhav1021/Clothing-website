import React, { useContext } from "react";
import { shopContext } from "../Context/context";

function Order() {
  const { products } = useContext(shopContext);
  return (
    <div className="lg:py-20 w-[80vw] mx-auto font-style">
      <div className="mt-6 mb-4">
        <h1 className="text-xl font-semibold">MY ORDERS</h1>
      </div>
      <div>
        {products.slice(0, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-t text-gray-600 py-4"
            >
              <div className="flex items-start gap-3">
                <img src={item.image[0]} alt="prod" className="h-20" />
                <div className="text-[15px] flex flex-col gap-1 p-1">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <div className="flex gap-1 text-gray-600 font-[500]">
                    <p>${item.price}</p>
                    <p>Quantity:1</p>
                    <p>Size:M</p>
                  </div>
                  <p className="text-gray-600 font-[500]">
                    Date:{" "}
                    <span className="text-gray-400 font-[500]">22-12-21</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <p className="text-[14px] text-gray-500 font-[500]">
                    Out for delivery
                  </p>
                </div>
              </div>
              <div>
                <button className="bg-gray-100 text-sm border border-gray-500 px-2 py-1 text-gray-700 font-[500]">
                  Track Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;
