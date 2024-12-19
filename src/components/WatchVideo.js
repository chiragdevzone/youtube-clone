import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="   w-full">
      <div className="flex w-full">
        <iframe
          className="rounded-xl mx-24 mt-6"
          width="650"
          height="360"
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?si=ZnuxRf0LbHOKfClo`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="mx-4 my-2">
          <h1>Suggested Videos</h1>
        </div>
      </div>
      <div className=" p-4">
        <h1>Comments :</h1>
        <Comments />
      </div>
    </div>
  );
};

export default WatchVideo;
