import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Podcasts",
  "Vocal language",
  "Accents",
  "Music",
  "Live",
  "Disha Vakani",
  "Mixes",
  "Dramedy",
  "JavaScript",
];

const ButtonList = () => {
  return (
    <div className="flex w-[90vw]">
      {list.map((list) => (
        <Button key={list} data={list} />
      ))}
    </div>
  );
};

export default ButtonList;
