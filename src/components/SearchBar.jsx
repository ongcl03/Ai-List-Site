import { IoSearch } from "react-icons/io5";
import "../index.css";
import { useEffect, useState } from "react";
import { sources } from "../constants";
import SearchResultCard from "./SearchResultCard";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    // if focus on search bar and search bar is not empty
    if (isFocused && searchInput) {
      // use destructuring to get the second value
      const [, matchedResults] = searchSource();

      setFilteredResults(matchedResults.slice(0, 3));
    } else {
      setFilteredResults([]);
    }
  }, [searchInput, searchInput]);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // get the search array from searchSource() and make it to be assigned in the filteredSources in App
    onSearch(searchSource()[0]);
  };

  // Function to filter tools based on a condition
  const filterTools = (condition) => {
    let matchedResults = [];

    const searchArray = sources
      .map((source) => {
        const matchingTools = source.tools.filter(condition);

        // Concat filter tool object into the matchedResults array (so it's a flat array)
        matchedResults = matchedResults.concat(matchingTools);

        return matchingTools.length > 0
          ? { ...source, tools: matchingTools }
          : null;
      })
      .filter(Boolean);

    return [searchArray, matchedResults];
  };

  // Search the source to match the current input value
  const searchSource = () => {
    const condition = (tool) =>
      tool.name.toLowerCase().includes(searchInput.toLowerCase());

    // condition here is the whole code in line 58, and it will do the filter in line 41
    return filterTools(condition);
  };

  const handleSelect = (name) => {
    setSearchInput(name); // Set the search input to the name of the tool clicked
    setIsFocused(false); // Remove focus from the search bar

    // Filter the sources based on the name and call the onSearch function with this filtered data
    const condition = (tool) => tool.name.toLowerCase() === name.toLowerCase();
    const [searchArray, _] = filterTools(condition);

    onSearch(searchArray); // Perform the search with the filtered data
  };

  return (
    <>
      <section className="flex justify-center items-center px-4 pt-4 w-full mb-[6px] flex-col">
        <div className="h-[51px] bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-full relative">
          <form
            onSubmit={handleSearch}
            className="flex justify-center items-center"
          >
            <input
              onChange={handleInput}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              type="text"
              placeholder="Search"
              autoComplete="off"
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

      {/* Renders the search result */}

      {filteredResults.length > 0 &&
        filteredResults.map((tool) => (
          <SearchResultCard
            key={tool.name}
            searchValue={tool.name}
            onCardClick={handleSelect}
          />
        ))}
    </>
  );
};

export default SearchBar;
