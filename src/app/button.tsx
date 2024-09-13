"use client";

import { useState } from "react";

export default function AddToCartButton() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Task Added");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-red-800 text-white p-2 mt-12 "
      >
        Add To Cart
      </button>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}