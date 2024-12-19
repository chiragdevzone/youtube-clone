import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_LIST } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_LIST);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  if (videos.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="mx-auto mt-6 flex flex-wrap w-11/12 ">
      {videos.map((video) => (
        <VideoCard
          key={video?.id}
          cssData="shadow-lg rounded-lg p-2 m-4 w-80"
          info={video}
        />
      ))}
    </div>
  );
};

export default VideoContainer;
