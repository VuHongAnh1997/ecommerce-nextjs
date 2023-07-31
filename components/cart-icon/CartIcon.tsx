import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart: React.FC = () => {
  // You can use state or context to manage the cart items

  const cartItemsCount = 1; // Replace with your actual cart items count

  return (
    <div className="relative cursor-pointer ml-6">
      <FaShoppingCart className="text-gray-500 text-2xl" />
      {cartItemsCount > 0 && (
        <span className="absolute top-0 left-4 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
          {cartItemsCount}
        </span>
      )}
    </div>
  );
};

export default Cart;
