import React from "react";
import { Link } from "react-router-dom";

const SuggestedVideoCard = ({ info, cssData }) => {
  const { url } = info.snippet.thumbnails.medium;
  const { title, channelTitle } = info.snippet;
  const { videoId } = info.id;

  return (
    <Link to={"/watch?v=" + videoId}>
      <div className={cssData}>
        <div>
          <img className="rounded-lg" alt="thumbnail" src={url} />
        </div>
        <div>
          <ul>
            <li className="font-bold text-lg">{title}</li>
            <li className="text-gray-600">{channelTitle}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default SuggestedVideoCard;
