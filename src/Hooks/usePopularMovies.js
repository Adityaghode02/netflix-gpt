import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector(store => store.movies.PopularMovies);

  // Define `getNowPlayingMovies` as a memoized callback to avoid recreation on every render
  const getNowPlayingMovies = useCallback(async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    // Call `getNowPlayingMovies` only if `PopularMovies` is not available
    if (!PopularMovies) {
      getNowPlayingMovies();
    }
  }, [PopularMovies, getNowPlayingMovies]); // Added `PopularMovies` and `getNowPlayingMovies` as dependencies
};

export default usePopularMovies;
