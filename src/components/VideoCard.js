import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info, cssData = null }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  return (
    <Link to={"/watch?v=" + info?.id}>
      <div className={cssData}>
        <div>
          <img
            className="rounded-lg"
            alt="thumbnail"
            src={thumbnails?.maxres?.url}
          />
        </div>
        <div>
          <ul>
            <li className="font-bold text-lg">{title}</li>
            <li className="text-gray-600">{channelTitle}</li>
            <li className="text-gray-600">{viewCount} views</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
