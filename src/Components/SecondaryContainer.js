import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store?.movies);

  if(movies.nowPlayingMovies && movies.PopularMovies === null) return ;

  // console.log(movies);
  
  return (
    // movielist - popular   : moviecarn *n
    // movielist - nowPlaying
    // movielist - 
    
    <div className=" bg-black md:pt-0 pt-16 ">
      <div className="md:mt-[35px]  relative z-50 "> 
      <MovieList movieTitle={"nowPlaying Movies"} movies={movies?.nowPlayingMovies}/>
      <MovieList movieTitle={"Popular Movies"} movies={movies?.PopularMovies} />
      <MovieList movieTitle={"Trending"} movies={movies?.PopularMovies} />
      <MovieList movieTitle={"Horror"} movies={movies?.PopularMovies} />
      </div>
    </div>
    


  )
}

export default SecondaryContainer;