import React from "react";
import SearchBar from "./components/SearchBar";
import { Title } from "./components/Title";
import Category from "./components/Category";
import sources from "./constants";
import CardComponent from "./components/CardComponent";
import CardR from "./components/CardR";
import DeepCard from "./components/DeepCard";
import CardLogo from "./components/CardLogo";

const App = () => {
  return (
    <div className="bg-[#273353]">
      <Title />
      <SearchBar />

      {sources.map((source, index) => (
        <Category title={source.title} tools={source.tools} />
      ))}
      <CardComponent />
      <CardR />
      <DeepCard />
      <CardLogo />
      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
