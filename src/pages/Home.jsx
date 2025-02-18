import BeerCard from '../components/BeerCard';


function Home() {
    const [searchQuery,setSearchQuery] = useState('');
}

function Home() {
    const beer = { id:1 title: 'Pilsner', description: 'A light, golden beer with a mild flavor and a clean finish.', url: 'https://www.beeradvocate.com/im/beers/1.jpg' }

const handleselect = () => {
    e.preventDefault()
    alert(searchQuery);
    setSearchQuery('');
}

  return (
    <div className="Home">
        <form onSubmit={handleselect className = "search-form">
            <input type="text" 
            placeholder="Search for a beer" 
            className="search-input"
            value={searchQuery}
            onChange = {(e) => setSearchQuery(e.target.value}
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