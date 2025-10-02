import React from "react";

const Buttons = ({ name }) => {
  return (
    <div className="px-4 py-1 mx-2 bg-gray-200 rounded-lg cursor-pointer">
      {name}
    </div>
  );
};

export default Buttons;
