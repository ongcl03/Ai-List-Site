import React from "react";
import test from "../test123.png";

const CardR = () => {
  return (
    <div
      className="border bg-card text-card-foreground shadow-sm w-[350px] bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 p-1 rounded-lg"
      data-v0-t="card"
    >
      <div className="flex flex-col items-center bg-white p-6 rounded-lg">
        <img
          src={test}
          alt="Air Jordan 4 Retro Reimagined"
          className="mb-4"
          width="240"
          height="240"
          style={{ aspectRatio: "240 / 240", objectFit: "cover" }}
        />
        <h3 className="text-lg font-semibold">Air Jordan 4 Retro Reimagined</h3>
        <p className="mt-2 text-sm text-gray-600">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-4 bg-black text-white">
          Buy now <span className="ml-2 text-sm">$100</span>
        </button>
      </div>
    </div>
  );
};

export default CardR;
