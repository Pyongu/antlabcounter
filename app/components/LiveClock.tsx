"use client";

import React, { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <span className="text-5xl font-mono text-red-600">
        {time.toLocaleTimeString()}
      </span>
    </div>
  );
}
