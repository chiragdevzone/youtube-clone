import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/chatSlice";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [myChat, setMyChat] = useState();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (myChat.trim()) {
      dispatch(
        addMessage({
          name: "Chirag Sankhla",
          message: myChat,
        })
      );
      setMyChat("");
    }
  };

  return (
    <div className="   w-full">
      <div className="flex w-full">
        <div>
          <iframe
            className="rounded-xl ml-24 mt-6"
            width="700"
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
        </div>

        <div className="mx-4 my-6 w-full ">
          <div className=" h-[360px] border border-black rounded-xl overflow-y-scroll flex flex-col-reverse">
            <LiveChat />
          </div>
          <form
            className="w-full m-2 flex justify-between "
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              value={myChat}
              onChange={(e) => setMyChat(e.target.value)}
              className="w-[340px] border-b p-2 border-black focus:outline-none "
            />
            <button
              type="submit"
              className="bg-green-100 mr-2 py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className=" p-4 w-[700px]">
        <p className="font-bold m-4"> Comments :</p>
        <Comments videoId={searchParams.get("v")} />
      </div>
    </div>
  );
};

export default WatchVideo;
