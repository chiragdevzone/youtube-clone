import React from "react";

const Button = ({ data }) => {
  return (
    <div className="bg-gray-200 m-3 text-nowrap px-3 py-1 font-semibold text-sm rounded-lg">
      {data}
    </div>
  );
};

export default Button;
