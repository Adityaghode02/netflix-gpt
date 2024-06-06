import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";


const usePopularMovies = ()=>{

    const dispatch = useDispatch();

    const PopularMovies = useSelector(store=> store.movies.PopularMovies);

    const getNowPlayingMovies = async()=>{

        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json  = await response.json();

        dispatch(addPopularMovies(json.results));
    }



    useEffect(()=>{
        !PopularMovies && getNowPlayingMovies();
    },[]);
}

export default usePopularMovies;