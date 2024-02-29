import React from "react";
import "../index.css";

const SearchResultCard = () => {
  return (
    <div className="flex justify-center items-center w-full mb-[5px]">
      {" "}
      {/* Added mt-2 for margin top */}
      <div className="flex items-center h-[58px] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-lg relative border-blue-400 border-2 shadow-sm hover:border-4">
        {" "}
        {/* Adjusted border color and shadow */}
        <p className="pl-5 pr-20 py-3 text-[16.5px] font-inter-v w-full cursor-pointer">
          Search Result
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;
