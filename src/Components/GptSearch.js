import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { LOGIN_BACKGROUND } from "../Utils/constants";
const GptSearch = () => {
    return <div>
        <div className="absolute -z-10">
            <img className="" src={LOGIN_BACKGROUND}>
            </img>
        </div>
        <GptSearchBar/>
        <GptMovieSuggetions/>
    </div>
}

export default GptSearch;