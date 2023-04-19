import React from "react";

export interface IRatingProps {
  className?: string  
}

function Ratings({ className }: IRatingProps) {
  return (
    <div className={`rating rating-sm ${className}`}>
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
}

export default Ratings;
