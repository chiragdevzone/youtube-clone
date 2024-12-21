import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";

const LiveChat = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(10),
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      {message.map((m, i) => (
        <div className="flex items-center shadow-sm px-1 py-4" key={i}>
          <div>
            <img
              className="w-12 h-7"
              alt="user-icon"
              src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png"
            />
          </div>
          <div>
            <span className="font-bold">{m.name}</span>
            <span> {m.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveChat;
