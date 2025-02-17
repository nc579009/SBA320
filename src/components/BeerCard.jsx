
    function onFavoriteClick() {

    

    return(
        <div className="beer-card">
            <div className="beer-card-image">
                <img src={beer.url} alt={beer.title} />
                <div className="beer-overlay">
                    <button className="favorite-button" onClick={onFavoriteClick}></button>
                </div>
            </div>
            <div className="beer-card-content">
                <h2>{beer.title}</h2>
                <p>{beer.description}</p>
            </div>
        </div>
    )
}   
function BeerCard(beer) {
    function onFavoriteClick() {

    }

    return(
        <div className="beer-card">
            <div className="beer-card-image">
                <img src={beer.url} alt={beer.title} />
                <div className="beer-overlay">
                    <button className="favorite-button" onClick={onFavoriteClick}></button>
                </div>
            </div>
            <div className="beer-card-content">
                <h2>{beer.name}</h2>
                <p>{beer.description}</p>
            </div>
        </div>
    )
}