import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_COMMENTS } from "../utils/constants";

const Comment = ({ data }) => {
  const {
    authorDisplayName,
    textDisplay,
    authorProfileImageUrl = "https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png",
  } = data.snippet.topLevelComment.snippet;

  return (
    <div className="flex m-2 p-2">
      <img
        className="w=8 h-8 rounded-full"
        alt="user"
        src={authorProfileImageUrl}
      />

      <ul className="leading-none mx-4">
        <li className="font-bold">{authorDisplayName}</li>
        <li className="text-sm">{textDisplay}</li>
      </ul>
    </div>
  );
};

const CommentList = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <Comment key={i} data={item} />
      ))}
    </>
  );
};

const Comments = ({ videoId }) => {
  const [videoComments, setvideoComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_COMMENTS + videoId + "&maxResults=50"
    );
    const json = await data.json();
    setvideoComments(json.items);
  };

  return (
    <div className="p-4">
      <CommentList data={videoComments} />
    </div>
  );
};

export default Comments;
