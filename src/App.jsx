import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { Title } from "./components/Title";
import Category from "./components/Category";
import { sources } from "./constants";
import Footer from "./components/Footer";
import SearchResultCard from "./components/SearchResultCard";
import "./index.css";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const [filteredSources, setFilteredSources] = useState(sources);
  let storeResults = [];
  const [results, setResults] = useState([]);
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

  // Function lifted up from SearchBar to pass down to SearchBar and handle Category state
  const handleSearch = (searchArray) => {
    setFilteredSources(searchArray);
  };

  const handleSearchResult = (searchResults) => {
    {
      searchResults.map((searchResult) =>
        searchResult.tools.map((tool) => {
          storeResults.push(tool);
        })
      );
    }

    if (storeResults.length > 0) {
      storeResults = storeResults.slice(0, 3);

      console.log(storeResults);
      setResults(storeResults);
    }
  };

  return (
    <div className="bg-[#1a1a2e]">
      <Title />
      <SearchBar
        onSearch={handleSearch}
        handleSearchResult={handleSearchResult}
        setIsFocused={setIsSearchBarFocused}
      />

      {isSearchBarFocused &&
        results.length >= 0 &&
        results.map((result) => <SearchResultCard searchValue={result.name} />)}

      {filteredSources.map((source) => (
        <Category
          key={source.title}
          title={source.title}
          tools={source.tools}
        />
      ))}

      {filteredSources.length === 0 && <PageNotFound />}
      <Footer />
    </div>
  );
};

export default App;
