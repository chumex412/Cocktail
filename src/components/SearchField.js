import React from "react";
import useGlobalContext from "./Context";

const SearchField = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="search-field">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cocktailSearch">Search your favourite cocktail</label>
          <input
            type="text" 
            id="cocktailSearch" 
            className="input-control" 
            onChange={ (e) => setSearchTerm(e.target.value) }
          />
        </div>
      </form>
    </div>
  )
};

export default SearchField;