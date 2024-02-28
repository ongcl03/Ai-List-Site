import React from "react";
import test from "../test123.png";

// Optional: If you have custom styles that are not part of Tailwind CSS,
// you can add them here or in an external CSS file.
const customStyles = {
  gradientBackground: {
    background: "linear-gradient(145deg, #000046, #1cb5e0)",
  },
};

const Card = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-200">
      <div className="w-full max-w-sm">
        <div
          className="p-6 rounded-lg shadow-lg"
          style={customStyles.gradientBackground}
        >
          <img className="rounded-t-lg" src={test} alt="Placeholder" />
          <div className="p-5">
            <h2 className="text-white text-2xl font-bold mb-2">Title Here</h2>
            <p className="text-white text-base mb-4">
              Description here. This is a simple text to describe the content of
              the card.
            </p>
            <button className="w-full bg-white text-gradient-background font-bold py-2 px-4 rounded hover:bg-gray-100">
              Button Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
