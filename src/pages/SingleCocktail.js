import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const {id} = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    async function getSingleCocktail () {
      try {
        const res = await fetch(`${url}${id}`);
        const {drinks} = await res.json()
        if(drinks.length > 0) {
          console.log(drinks[0]);
          const {
            strAlcoholic:info,
            strCategory:category,
            strDrink:name,
            strDrinkThumb:img,
            strGlass:glass,
            strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ]

          setCocktail({
            info, 
            category,
            name,
            img,
            glass,
            instructions,
            ingredients
          });

        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch(err) {
        console.error(err)
        setLoading(false)
      }
    }

    getSingleCocktail();
  }, [id]);

  return (
    <section className="container">
      {loading ? (
          <Loader />
        ) : !cocktail ? (
          <div className="error-message">
            <h2>No cocktail to display</h2>
          </div>
        ) :
        (
          <div className="single-cocktail-wrapper">
            <div className="cocktail-img-wrapper">
              <img src={cocktail.img} alt={cocktail.name} />
            </div>
            <div className="cocktail-content">
              <p>
                <span className="cocktail-label">Name:</span>&nbsp;
                {cocktail.name}
              </p>
              <p>
                <span className="cocktail-label">Category:</span>&nbsp;
                {cocktail.category}
              </p>
              <p>
                <span className="cocktail-label">Info:</span>&nbsp;
                {cocktail.info}
              </p>
              <p>
                <span className="cocktail-label">Glass:</span>&nbsp;
                {cocktail.glass}
              </p>
              <p>
                <span className="cocktail-label">Instruction:</span>&nbsp;
                {cocktail.instructions}
              </p>
              <p>
                <span className="cocktail-label">Ingredients:</span>
                {cocktail.ingredients.map((ingredient, indx) => {
                  const showIngredients = (ingredient && <span className="ingredient" key={indx}>&nbsp;&nbsp;{ingredient}</span>)
                  
                  return showIngredients; 
                })}       
              </p>
            </div>
          </div>
        )
      }
    </section>
  )
};

export default SingleCocktail;