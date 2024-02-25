import { IoSearch } from "react-icons/io5";

const SearchBar = () => (
  <section className="flex justify-center items-center">
    <div className="flex justify-center items-center h-[51px] bg-white w-3/4 sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/3 rounded-full relative">
      <input
        type="text"
        placeholder="Search"
        className="px-5 py-3 text-[16.5px] font-inter-v w-full rounded-full focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2"
      />
      <button className="absolute right-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-gray-700">
        <IoSearch size={"17px"} />
      </button>
    </div>
  </section>
);

export default SearchBar;
