import { IoSearch } from "react-icons/io5";
import "../index.css";
import { useRef, useState } from "react";
import { sources } from "../constants";
import { includes } from "lodash";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  // const list = ["1", "2", "3"];

  const handleSearch = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value;

    const searchArray = sources.filter((source) => {
      return source.tools.some((tool) =>
        tool.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    });

    console.log(searchArray);
    // console.log(list.filter((num) => num === inputValue));
  };

  return (
    <section className="flex justify-center items-center px-4 pt-4 w-full mb-[6px]">
      <div className="h-[51px] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-full relative">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="pl-5 pr-20 py-3 text-[16.5px] font-inter-v w-full rounded-full focus:outline-none focus:ring-2 focus:ring-offset-indigo-400 focus:ring-offset-2"
          />
          <button
            onClick={handleSearch}
            type="submit"
            className="absolute right-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-gray-700"
          >
            <IoSearch size={"1.06rem"} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
