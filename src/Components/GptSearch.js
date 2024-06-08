import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { LOGIN_BACKGROUND } from "../Utils/constants";
const GptSearch = () => {
    return <div>
        <div className="fixed -z-10">
            <img className="md:h-full h-screen object-cover" src={LOGIN_BACKGROUND} alt="logo">
            </img>
        </div>
        <div className="">
        <GptSearchBar/>
        <GptMovieSuggetions/>
        </div>
    </div>
}

export default GptSearch;