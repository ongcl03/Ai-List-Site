import React from "react";
import SearchBar from "./components/SearchBar";
import { Title } from "./components/Title";
import Category from "./components/Category";
import sources from "./constants";
import Footer from "./components/Footer";
import SearchResultCard from "./components/SearchResultCard";

const App = () => {
  return (
    <div className="bg-[#1a1a2e]">
      <Title />
      <SearchBar />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />

      {sources.map((source, index) => (
        <Category title={source.title} tools={source.tools} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
