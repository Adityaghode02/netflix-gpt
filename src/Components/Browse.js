
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();


  return (
    <div>
     <Header/>
{/*      
      - Main Container
        - Video Background
          - Video Title
      - Secondary Container
        - Movies * n
            - Cards * n
      */}
<div className="absolute -z-30 ">
    <MainContainer/>
    <SecondaryContainer/>
    </div> 
    </div>
  );
};

export default Browse;
