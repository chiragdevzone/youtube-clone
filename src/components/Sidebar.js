import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-48 shadow-xl p-2  ">
      <ul className="mt-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shots</li>
        <li>video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold my-2 text-sm">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Spots</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold my-2 text-sm">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Spots</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
