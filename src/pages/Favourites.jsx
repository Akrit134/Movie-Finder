import "../css/Favorites.css"
import {useMovieContext} from "../context/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourites (){

    const {favorites} = useMovieContext();

    if(favorites){
    return (
        <div className="favourites">
            <h2>Your favourites</h2>
        <div className="movies-grid">
        {favorites.map((movie) =>(
              <MovieCard movie={movie} key={movie.id} />
              ))}
        
        </div>
        </div>
    );
    }
    return(
        <div className="favourites-empty">
            <h2> No favourite Movies Yet</h2>
            <p>Start adding movies to your favourties which will
                be displayed here.
            </p>
        </div>
    )
}

export default Favourites