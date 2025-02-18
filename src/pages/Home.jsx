import BeerCard from '../components/BeerCard';
import {useState, useEffect } from 'react';
import { searchCocktail } from '../services/api';
import { fetchCocktail } from '../services/api';


function Home() {
    const [searchQuery,setSearchQuery] = useState('');
    const [beer, setBeer] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const loadfetchCocktail = async () => {
            try{
                const fetchcocktail = await fetchCocktail(searchQuery);
                setBeer(fetchcocktail);
            } catch (error){
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        }
    },[]);

const handleselect = () => {
    e.preventDefault()
    alert(searchQuery);
    setSearchQuery('');
}

  return (
    <div className="Home">
        <form onSubmit={handleselect} className="search-form">
            <input type="text" 
            placeholder="Search for a beer" 
            className="search-input"
            value={searchQuery}
            onChange = {(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className= "search-button">Search</button>
        </form>

      <div className = "beer-grid">
        {beer.map(
            (beer) =>(
            (
            <beerCard beer={beer} key={beer.id} />
            )
        ))}
      </div>
    </div>
  );
}

export default Home;