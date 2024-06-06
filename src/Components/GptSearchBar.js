// import openai from "../Utils/openai";
import { API_OPTIONS, GEMINI_KEY } from "../Utils/constants";
import { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovieResults } from "../Utils/gptSlice";


const GptSearchBar = () => {

  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const SearchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GEMINI_KEY); 

  // search movies in tmbd Database for GPT recommended movie
  const searchMovieTMDB = async(movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      return json.results;
  }


  const handleGPTsearchOnClick = async () => {

    console.log(SearchText.current.value);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const GptQuery =
    "Act as movie recommendation system and suggest some movies for the query:" +
    SearchText.current.value +
    ".only give me name of 5 movies,comma seperated like example result give ahead.Example result:Gadar,Koi mil gaya,Animal,Jawaan,Pathan";


      const result = await model.generateContent(GptQuery);
      const response = result.response;
      const text = response.text();
      const fr = text.split(",");
      if(!fr){
        //TODO A ERROR HANDLING PAGE
      }
      console.log(fr);

      //  NOW FOR ALL MOVIES I WILL SEARCH TMDP API

      const promiseArray = fr.map((movie) => searchMovieTMDB(movie));
      // promiseArray - [promise1,promise2,promise3......]
      
      const tmdbResultData = await Promise.all(promiseArray);

      console.log(tmdbResultData);

      dispatch(addGptMovieResults({movieNames : fr, movieResults : tmdbResultData}));
    
  };

  
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={SearchText}
          type="text"
          placeholder={lang[langkey].gptPlaceholder}
          className="p-4 m-2 col-span-9"
        ></input>
        <button
          className="col-span-3 m-4 py-2 px-4  bg-red-700 text-white rounded-lg"
          onClick={handleGPTsearchOnClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
