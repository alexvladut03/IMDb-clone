"use client";
import React from "react";
import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center">
      <h1>Something went wrong , please try again!</h1>
      <button
        className="hover:text-amber-500 hover:font-semibold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
