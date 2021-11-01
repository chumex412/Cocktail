import React from "react";
import Cocktail from "./Cocktail";
import useGlobalContext from "./Context";
import Loader from "./Loader";

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext();

  return (
    <section className="container"> 
    <header className="cocktail-header">
      <h2>Cocktails</h2>
    </header>
        <div className="cocktail-wrapper">
          {
            loading ? (
              <Loader />
            ) : (
              !cocktails ? (
                <h3>No cocktail matched your search criteria</h3>
              ) : (
                <ul className="cocktail-list">
                  {
                    cocktails.map(cocktail => {
                      const {
                        idDrink:id, 
                        strAlcoholic: alcoholic, 
                        strDrink: drink, 
                        strGlass:glass, 
                        strDrinkThumb:img
                      } = cocktail;
                      return (
                        <Cocktail
                          key={id} 
                          id={id}
                          drink={drink}
                          alcoholic={alcoholic}
                          glass={glass}
                          img={img}
                        />
                      )
                    })
                  }
                </ul>
              )
            )
          }
        </div>
    </section>
  )
};

export default CocktailList;