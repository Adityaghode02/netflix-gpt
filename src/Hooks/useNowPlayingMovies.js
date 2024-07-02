import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  // Memoize the `getNowPlayingMovies` function to avoid re-creating it on every render
  const getNowPlayingMovies = useCallback(async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addNowPlayingMovies(json.results));
  }, [dispatch]); // Added `dispatch` as a dependency

  useEffect(() => {
    // Call `getNowPlayingMovies` only if `nowPlayingMovies` is not available
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies, getNowPlayingMovies]); // Added `nowPlayingMovies` and `getNowPlayingMovies` as dependencies
};

export default useNowPlayingMovies;
