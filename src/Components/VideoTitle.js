
const VideoTitle = (props) => {
  const {title , overview} = props;
  return (<div className="w-screen aspect-video pt-[18%] absolute text-white bg-gradient-to-r from-black">
    <h1 className="font-bold text-3xl p-4 m-4">VideoTitle :{title}</h1>
    <p className=" text-lg w-1/2 p-4 m-4">OVERVIEW : {overview}</p>
    <div className="pl-6">
    <button className="border border-black p-3 m-2 px-10 font-bold text-lg rounded bg-white text-black hover:bg-opacity-75">▶️ Play Now</button>
    <button className="border border-black p-3 m-2 px-10 font-bold text-lg rounded bg-gray-700">More Info</button>
    </div>
    </div>
    
  )
}

export default VideoTitle;