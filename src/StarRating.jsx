import { useState } from "react";

export default function StarRating() {
  const [clicked, setClicked] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type={"button"}
            onClick={() => setClicked(index)}
            className={index <= clicked ? "on" : "off"}
            key={index}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
