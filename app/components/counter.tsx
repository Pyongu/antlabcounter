"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Counter({ label }: { label?: string }) {
  const [count, setCount] = useState(0);

  const audio = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audio.current = new Audio("/beep.mp3");
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
    // const audio = new Audio("/beep.mp3");
    // audio.play().catch((err) => {
    //   console.warn("Audio playback failed:", err)});

    // Try to vibrate. If not supported, fall back to beep.
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    } else if (audio.current) {
      audio.current.currentTime = 0; // rewind if already playing
      audio.current.play().catch((err) => {
        console.warn("Audio playback failed:", err);
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
      <div
        onClick={handleIncrement}
        className="w-full h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-md cursor-pointer select-none active:bg-green-200 transition p-4"
      >
        <span className="text-xl text-green-800 font-mono mb-1">{label}</span>
        <span className="text-5xl font-mono text-blue-600">{count}</span>
      </div>
    </div>
  );
}
