import React from "react";

function Carousel() {
  let items = new Array(4).fill(<></>);

  return (
    <div className="carousel w-full h-1/6">
      {items.map((_, i) => {
        return (
          <div
            key={i}
            id={`slide${i + 1}`}
            className="carousel-item relative w-full h-[40vh]"
          >
            <img
              src="https://pharmaceutical-journal.com/wp-content/uploads/2021/01/herbal-medicines-ss-18-scaled.jpg"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={i ? `#slide${i + 1}` : `#slide${items.length}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={i + 1 === items.length ? `#slide1` : `#slide${i + 2}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
