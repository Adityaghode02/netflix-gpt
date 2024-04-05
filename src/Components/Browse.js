
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  return (
    <div className="p-0 m-0 overflow-hidden">
     <Header/>
     {
      showGptSearch ? <GptSearch/> : <div>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
     }
     
 
    </div>
  );
};

export default Browse;
