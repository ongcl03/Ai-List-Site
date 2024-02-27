import React from "react";
import SearchBar from "./components/SearchBar";
import { Title } from "./components/Title";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="bg-[#273353] h-screen">
      <Title />
      <SearchBar />
      <Card />
    </div>
  );
};

export default App;
