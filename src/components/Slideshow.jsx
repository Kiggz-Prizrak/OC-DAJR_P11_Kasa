import "../styles/slideshow.css";

import React, { useState, useEffect } from "react";

export default function Slideshow(photos) {
  const [imageVisible, setImageVisible] = useState("");

  const [count, setCount] = useState("");

  useEffect(() => {
    if (photos.gallery) {
      setImageVisible(photos.gallery[0]);
    }
  }, [photos.gallery]);

  // useEffect(() => {
  //   if(count >= photos.gallery.length) {
  //     setCount(0)
  //   }  else if(count <= photos.gallery.length) {
  //     setCount(photos.gallery.length -1)
  //   }
  // }, [1]);

  console.log(imageVisible);
  return (
    <div className="slideshowContainer">
      <div className="slideSelected">
        <button className="leftChevron" 
        onClick={() => setCount(count - 1)}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img src={imageVisible} alt="" />
        <button className="rightChevron" 
        onClick={() => setCount(count + 1)}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <span className="imgSelected">
        <p>{count} / </p>
      </span>
    </div>
  );
}
