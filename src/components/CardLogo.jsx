import React from "react";
import test from "../test123.png";
import chatgptLogo from "../assets/chatgpt.svg";

const CardLogo = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-[#eaeaea]"
      // style={{
      //   background: "linear-gradient(to right, #ECE9E6, #FFFFFF)",
      // }}
      // style={{
      //   background: "linear-gradient(to right, #cfd9df, #e2ebf0)",
      // }}
    >
      <div
        className="w-96 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-1.5 transform transition duration-300"
        style={{
          background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
        }}
        // style={{
        //   background: "linear-gradient(to bottom, #000428, #004e92)", // Dark blue to lighter blue gradient
        // }}
      >
        <div className="p-8">
          <img
            className="rounded-full h-[136px] mx-auto"
            src={chatgptLogo}
            alt="Wallet IconCHAT"
          />
          <h2 className="text-2xl font-bold mt-6 text-white font-poppins">
            ChatGPT
          </h2>
          <p className="mt-[5px] text-sm text-gray-300 leading-[22px] ">
            Robust multi-chain wallet support: Trade directly from your own
            wallet. Be your own bank.
          </p>
          <button className="mt-7 py-2 px-4 bg-gray-200 text-blue-800 rounded-full font-bold tracking-wider block mx-auto hover:scale-105 transform transition duration-200">
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLogo;
