import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store?.movies);

  if(movies.nowPlayingMovies && movies.PopularMovies === null) return ;

  console.log(movies);
  return (
    // movielist - popular   : moviecarn *n
    // movielist - nowPlaying
    // movielist - 
    
    <div className=" bg-black ">
      <div className="mt-[-280px] relative z-50"> 
      <MovieList movieTitle={"nowPlayingMovies"} movies={movies?.nowPlayingMovies}/>
      <MovieList movieTitle={"PopularMovies"} movies={movies?.PopularMovies} />
      </div>
    </div>
    


  )
}

export default SecondaryContainer;