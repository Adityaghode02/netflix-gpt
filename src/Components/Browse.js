
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();


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

    <MainContainer/>
    <SecondaryContainer/>

    </div>
  );
};

export default Browse;
