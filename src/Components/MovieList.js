import MovieCard from "./MovieCard";

const MovieList = ({movieTitle,movies}) => {
  // console.log(movies);
  
  
  return (
    <div className="p-3 text-white">
      <h1 className="font-serif md:text-2xl text-lg">{movieTitle}</h1>
      <div className="flex overflow-x-auto py-6 scrollbar-hide">
         <div className="flex scrollbar-hide ">
              {movies?.map((movie)=>
              <MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
          </div>
      </div>
    </div>
  )
}

export default MovieList;

// bg-gradient-to-t from-black to-gray-700