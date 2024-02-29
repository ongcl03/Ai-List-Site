import React from "react";
import SearchBar from "./components/SearchBar";
import { Title } from "./components/Title";
import Category from "./components/Category";
import sources from "./constants";

const App = () => {
  return (
    <div className="bg-[#1a1a2e]">
      <Title />
      <SearchBar />

      {sources.map((source, index) => (
        <Category title={source.title} tools={source.tools} />
      ))}
    </div>
  );
};

export default App;
