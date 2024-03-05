import MovieCard from "./MovieCard";

const MovieList = ({movieTitle,movies}) => {
  // console.log(movies);
  
  
  return (
    <div className="p-6  text-white">
      <h1 className="font-bold text-3xl">{movieTitle}</h1>
      <div className="flex overflow-x-scroll py-6">
         
           <div className="flex ">
              {movies?.map((movie)=>
              <MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
        </div>

      </div>
    </div>
  )
}

export default MovieList;

// bg-gradient-to-t from-black to-gray-700