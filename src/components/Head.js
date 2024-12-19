import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addSuggestionData } from "../utils/cacheSuggestionSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [suggestion, setSuggestion] = useState("");
  const [suggestedData, setSuggestedData] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dataPresent = useSelector((state) => state.cache);

  useEffect(() => {
    if (dataPresent[suggestion]) {
      setSuggestedData(dataPresent[suggestion]);
      console.log(dataPresent[suggestion]);
    } else {
      const timer = setTimeout(() => {
        searchQuery();
      }, 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [suggestion]);

  const searchQuery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + suggestion);
    const json = await data.json();
    dispatch(
      addSuggestionData({
        [suggestion]: [json[1]],
      })
    );
    setSuggestedData(json[1]);
  };

  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="col-span-1 flex">
        <img
          onClick={() => handleToggle()}
          className="h-8 cursor-pointer"
          alt="hamburger-logo"
          src="https://static.thenounproject.com/png/683452-200.png"
        />
        <img
          className="h-8 mx-2 "
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
      </div>
      <div className="col-span-10  text-nowrap">
        <div>
          <input
            type="text "
            className="border border-black w-8/12 py-2 px-4 rounded-l-full"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-black py-2 px-4 rounded-r-full">
            🔍
          </button>
        </div>

        {showSuggestion && suggestedData.length > 0 && (
          <div className="absolute bg-white w-[590px] py-2 rounded-lg shadow-xl">
            <ul>
              {suggestedData.map((s) => (
                <li className="px-5 py-2 hover:bg-gray-100 select-none ">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="account-iocn"
          src="https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
