"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
      <span className="text-3xl text-green-600 font-mono">Label</span>
      <div
        onClick={handleIncrement}
        className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-md cursor-pointer select-none active:bg-green-200 transition"
      >
        <span className="text-5xl font-mono text-blue-600">{count}</span>
      </div>
    </div>
  );
}