import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

    if(movies === null) return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie ;

    return (
        <div className="md:p-0 pt-[45%] bg-black">
            {original_title && overview && id ? (
                <>
                    <VideoTitle title={original_title} overview={overview} />
                    <div>
                        <VideoBackground movieId={id} />
                    </div>
                </>
            ) : (
                <div className="text-white">Movie details are missing</div>
            )}
        </div>
    );
};

export default MainContainer;
