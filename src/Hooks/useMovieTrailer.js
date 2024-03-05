import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addtrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();

    //fetching trailer hook && updating Store data

  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await response.json();
    // console.log("VideoApi");
    // console.log(json);

    const trailerArray = json.results.filter(function checkTrailer(video) {
      if (video.type === "Trailer") {
        return video;
      }
    });

    const Trailer = trailerArray.length ? trailerArray[0] : json.results[0];

    // console.log("trailerArray");
    // console.log(trailerArray);
    // console.log("trailerObj");
    // console.log(Trailer);
    //we can also useState variable instead of this
    dispatch(addtrailerVideo(Trailer));
    
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}
export default useMovieTrailer;