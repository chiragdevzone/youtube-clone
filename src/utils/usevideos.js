import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_LIST } from "./constants";
import { KEYWORD_YOUTUBE_VIDEOS, YOUTUBE_API_KEY } from "./constants";
import { useSelector } from "react-redux";

const useVideos = () => {
  const show = useSelector((store) => store.suggest.show);
  const query = useSelector((store) => store.suggest.query);

  const [videos, setVideos] = useState([]);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_LIST);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  const getSuggestedVideos = async () => {
    const q = query.replaceAll(" ", "+");
    const data = await fetch(
      KEYWORD_YOUTUBE_VIDEOS + q + "&type=video&key=" + YOUTUBE_API_KEY
    );
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  useEffect(() => {
    if (show) {
      getSuggestedVideos();
    } else {
      getYoutubeVideos();
    }
  }, [show, query]);

  return videos;
};

export default useVideos;
