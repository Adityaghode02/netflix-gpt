import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
  // const getNowPlayingMovies = () => {
  //   fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
  // .then(response => response.json())
  // .then(json => console.log(json))
  // .catch(err => console.error(err));
  // }

  const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () =>{
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await response.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }


  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();
  },[]);
};
 


export default useNowPlayingMovies;