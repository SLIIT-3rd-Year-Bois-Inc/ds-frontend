import React from "react";
import Review from "./Review";

function ReviewContainer() {
    return (
        <div className="grid grid-cols-1">
            <Review />
            <Review />
        </div>   
    )
}

export default ReviewContainer;