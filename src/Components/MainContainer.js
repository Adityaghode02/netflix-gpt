import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ()=>{

    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies);

    if(movies === null) return ;

    const mainMovie = movies[0];
    console.log(mainMovie);//it is an object mainmovie

    const overview = mainMovie.overview;
    return <div>  
        <VideoTitle overview={overview}/>
        <VideoBackground/>
    </div>
    

}

export default MainContainer; 