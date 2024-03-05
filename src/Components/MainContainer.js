import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ()=>{

    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies);

    if(movies === null) return ;

    const mainMovie = movies[5];
    // console.log("mainMovie");
    // console.log(mainMovie);//it is an object mainmovie

    const {original_title , overview , id} = mainMovie;
    return <div>  
        
        <VideoTitle title={original_title} overview={overview}/>
        <div > <VideoBackground movieId={id}/></div>

    </div>
    

}

export default MainContainer; 