import { IoSearch } from "react-icons/io5";
import "../index.css";

const SearchBar = () => (
  <section className="flex justify-center items-center p-4 w-full">
    <div className="flex justify-between items-center h-[51px] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-full relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-5 pr-20 py-3 text-[16.5px] font-inter-v w-full rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      />
      <button className="absolute right-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-gray-700">
        <IoSearch size={"1.06rem"} />
      </button>
    </div>
  </section>
);

export default SearchBar;
