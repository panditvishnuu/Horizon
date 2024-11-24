"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," prefix="₹" end={amount} duration={2.0} />
    </div>
  );
};

export default AnimatedCounter;
