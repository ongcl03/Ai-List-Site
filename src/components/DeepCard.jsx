import React from "react";
import test from "../test123.png";

const DeepCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#f0f0f0]">
      <div
        className="w-96 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-1.5 transform transition duration-300"
        style={{
          background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
        }}
      >
        <div className="p-8">
          <img className="h-32 mx-auto" src={test} alt="Wallet Icon" />
          <h2 className="text-2xl font-bold mt-4 text-white">Wallets +</h2>
          <p className="mt-2 text-sm text-gray-300">
            Robust multi-chain wallet support: Trade directly from your own
            wallet. Be your own bank.
          </p>
          <button className="mt-6 py-2 px-4 bg-white text-blue-800 rounded-full font-bold tracking-wider block mx-auto hover:scale-105 transform transition duration-200">
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeepCard;
