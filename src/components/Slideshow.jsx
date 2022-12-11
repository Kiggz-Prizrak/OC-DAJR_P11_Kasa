import "../styles/slideshow.css";

import React, { useState, useEffect } from "react";

export default function Slideshow({ gallery }) {
  const [imageVisible, setImageVisible] = useState("");

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (gallery) {
      setImageVisible(gallery[count - 1]);
    }
  }, [gallery, count]);

  useEffect(() => {
    if (count > gallery?.length) {
      setCount(1);
    } else if (count < 1) {
      setCount(gallery.length);
    }
  }, [count]);

  console.log(imageVisible);
  return (
    <div className="slideshowContainer">
      <div className="slideSelected">
        <button className="leftChevron" onClick={() => setCount(count - 1)}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img src={imageVisible} alt="" />
        <button className="rightChevron" onClick={() => setCount(count + 1)}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <span className="imgSelected">
        <p>
          {count}/{gallery?.length}{" "}
        </p>
      </span>
    </div>
  );
}
