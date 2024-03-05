import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({posterpath}) => {
  return (
    <div className="w-48 px-2">
      {(posterpath) && <img src={IMG_CDN_URL+posterpath} alt="movieCard"></img>}
    </div>
  )
}

export default MovieCard;