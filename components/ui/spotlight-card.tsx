"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string; // RGB values like "14, 165, 233"
}

export const SpotlightCard = ({
  children,
  className,
  spotlightColor = "16, 185, 129", // opptim-green default
}: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-opptim-green/20 bg-gradient-to-b from-gray-900/80 to-gray-900/50 backdrop-blur-sm",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${spotlightColor}, 0.25), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(${spotlightColor}, 0.15), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};

