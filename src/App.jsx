import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { Title } from "./components/Title";
import Category from "./components/Category";
import { sources } from "./constants";
import Footer from "./components/Footer";
import SearchResultCard from "./components/SearchResultCard";

const App = () => {
  const [filteredSources, setFilteredSources] = useState();

  return (
    <div className="bg-[#1a1a2e]">
      <Title />
      <SearchBar />

      {sources.map((source) => (
        <Category
          key={source.title}
          title={source.title}
          tools={source.tools}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
