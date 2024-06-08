
const VideoTitle = (props) => {
  const {title , overview} = props;
  return (<div className="md:absolute absolute md:bg-gradient-to-r md:from-black pt-32  w-full aspect-video text-white">
    <h1 className="font-serif mb:text-3xl md:bg-none bg-gradient-to-r from-black text-lg p-4 md:-ml-0 -ml-3 mt-6 m-4 md:pt-12 md:mb-0 mb-40 md:pl-8">Trending : {title}</h1>
    <p className="hidden md:inline-block text-sm w-1/2 p-4 m-4 mb-6">OVERVIEW  : {overview}</p>
    <div className="pl-6">
    <button className="hidden md:inline-block border border-black p-3 m-2 px-10  font-bold text-lg rounded bg-white text-black hover:bg-opacity-75 ">▶️ Play Now</button>
    <button className="hidden md:inline-block border border-black p-3 m-2 px-10 mb-4 font-bold text-lg rounded bg-gray-700">More Info</button>
    </div>
    </div>
    
  )
}

export default VideoTitle;