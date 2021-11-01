import React, {useState, useEffect, useContext} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");

  useEffect(() => {
    fetchCocktailData()
  }, [searchTerm]);

  const fetchCocktailData = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const {drinks} = await res.json();
      
      if(drinks.length) {
        setCocktails(drinks)
      } else {
        setCocktails([]);
        throw new Error ("No data found")
      }

      setLoading(false)
    } catch(err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <AppContext.Provider
      value={{
        cocktails,
        searchTerm,
        setSearchTerm,
        loading
      }}
    >{children}</AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext