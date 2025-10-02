import React from "react";
import Buttons from "./Buttons";

const buttonList = [
  "All",
  "News",
  "Cooking",
  "Cricket",
  "Football",
  "Gaming",
  "World Cup",
  "Live",
  "Music",
  "Podcasts",
  "Politics",
];

const ButtonsList = () => {
  return (
    <div className="flex flex-row mb-5">
      {buttonList.map((button) => (
        <Buttons name={button} />
      ))}
    </div>
  );
};

export default ButtonsList;
