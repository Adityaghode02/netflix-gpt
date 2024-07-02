const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="md:absolute absolute md:bg-gradient-to-r md:from-black pt-32 w-full aspect-video text-white">
      <h1 className="font-serif mb:text-4xl md:bg-none bg-gradient-to-r from-black text-2xl p-6 md:-ml-0 -ml-3 mt-8 m-6 md:pt-12 md:mb-0 mb-44 md:pl-8">
        Trending: {title}
      </h1>
      <p className="hidden md:inline-block text-lg w-3/4 p-6 m-6 mb-8">
        OVERVIEW: {overview}
      </p>
      <div className="pl-6">
        <button className="hidden md:inline-block border border-black p-4 m-2 px-12 font-bold text-xl rounded bg-white text-black hover:bg-opacity-75">
          ▶️ Play Now
        </button>
        <button className="hidden md:inline-block border border-black p-4 m-2 px-12 mb-4 font-bold text-xl rounded bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
