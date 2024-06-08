import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);


  return (
    //trailer
    <div className="-z-10 md:-m-[70px] -m-[60px]" >
      <iframe 
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+
        "?autoplay=1&mute=1"
      }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
