const API_KEY = "1"
const BASE_URL = "www.thecocktaildb.com/api/json/v1"

export const fetchCocktail = async (query) => {
   const respone = await fetch(`https://${BASE_URL}/${API_KEY}/search.php?f=${encodeURIComponent(query)}`);
    const data = await respone.json()
    return data.results
};

export const searchCocktail = async (query) => {
    const respone = await fetch(`https://${BASE_URL}/${API_KEY}/search.php?s=${encodeURIComponent(query)}`);
     const data = await respone.json()
     return data.results
 };