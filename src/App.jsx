import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { Title } from "./components/Title";
import Category from "./components/Category";
import { sources } from "./constants";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [filteredSources, setFilteredSources] = useState(sources);

  const handleSearch = (searchArray) => {
    setFilteredSources(searchArray);
  };

  return (
    <>
      <div className="bg-[#1a1a2e]">
        <Title />
        <SearchBar onSearch={handleSearch} />
        {filteredSources.length > 0 ? (
          filteredSources.map((source) => (
            <Category
              key={source.title}
              title={source.title}
              tools={source.tools}
            />
          ))
        ) : (
          <PageNotFound />
        )}
        <Footer />
      </div>
      <Analytics />
    </>
  );
};

export default App;
