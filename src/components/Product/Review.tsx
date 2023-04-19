import React from "react";
import Ratings from "./Ratings";

function Review() {
  return (
    <div className="grid grid-cols-8 min-h-16 p-2">
      <div className="col-span-1">US</div>
      <div className="flex flex-col col-span-7">
        <Ratings className="pb-2"/>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </div>
      </div>
    </div>
  );
}

export default Review;
