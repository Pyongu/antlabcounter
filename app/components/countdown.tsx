"use client";

import React, { useEffect, useState, useRef } from "react";

interface CountdownTimerProps {
  startMinutes: number; // Total starting time in minutes
}

export default function CountdownTimer({ startMinutes }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(startMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          audioRef.current?.play().catch((err) => {
            console.warn("Audio playback failed:", err);
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const handleClick = () => {
    if (!isRunning && timeLeft > 0) {
      if (!audioRef.current) {
        audioRef.current = new Audio("/alarm_sound.wav");
        audioRef.current.load(); // optional: force preload
      }
      setIsRunning(true);
    }
  };

  const playSound = () => {
    new Audio("/alarm_sound.wav").play()
  }

  return (
    <div
      onClick={handleClick}
      className="w-full h-full flex flex-col items-center justify-center space-y-2 cursor-pointer select-none"
    >
      <div className="w-full h-full flex items-center justify-center bg-black">
        <span className="text-5xl font-mono text-red-600">
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
}
