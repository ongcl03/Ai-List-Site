import React from "react";
import SearchBar from "./components/SearchBar";
import SearchBarBk from "./components/SearchBarBk";
import { Title } from "./components/Title";

const App = () => {
  return (
    <div className="bg-[#273353] h-screen">
      <Title />
      <SearchBar />
    </div>
  );
};

export default App;
