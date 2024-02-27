import React from "react";

function Card({ name, link, description, image }) {
  return (
    <div className="border text-card-foreground w-[350px] bg-[#1A1C2C] rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105">
      <div className="flex flex-col space-y-1.5 p-4 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
        <h3 className="whitespace-nowrap tracking-tight text-white text-2xl font-bold">
          {name}
        </h3>
      </div>
      <div className="p-4">
        <div className="flex justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt="AI Tool Image"
              className="rounded-full mb-4"
              style={{ aspectRatio: "150 / 150", objectFit: "cover" }}
              width="150"
              height="150"
            />
          </a>
        </div>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#4D77FF] text-white transition-transform transform hover:scale-105">
            Visit Site
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
