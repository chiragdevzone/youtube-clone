import useVideos from "../utils/usevideos";
import { useSelector } from "react-redux";
import SuggestedVideoCard from "./SuggestedVideoCard";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const show = useSelector((store) => store.suggest.show);

  const videos = useVideos();

  return (
    <div className="mx-auto mt-6 flex flex-wrap w-11/12 ">
      {show
        ? videos.map((video, i) => (
            <SuggestedVideoCard
              key={i}
              cssData="shadow-lg rounded-lg p-2 m-4 w-80"
              info={video}
            />
          ))
        : videos.map((video) => (
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
