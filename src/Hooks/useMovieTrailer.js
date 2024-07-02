import { useCallback, useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store => store.movies.trailerVideo);

  const getMovieVideos = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();

    const trailerArray = json.results.filter(video => video.type === "Trailer");
    const Trailer = trailerArray.length ? trailerArray[0] : json.results[0];

    dispatch(addtrailerVideo(Trailer));
  }, [dispatch, movieId]); // Memoize `getMovieVideos` with `dispatch` and `movieId` as dependencies

  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideos();
    }
  }, [trailerVideo, getMovieVideos]); // Added `trailerVideo` and `getMovieVideos` as dependencies
};

export default useMovieTrailer;
