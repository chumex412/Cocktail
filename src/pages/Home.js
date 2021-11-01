import React from "react";
import CocktailList from "../components/CocktailList";
import SearchField from "../components/SearchField";

const Home = () => {

  return (
    <>
      <SearchField />
      <CocktailList />
    </>
  )
};

export default Home;