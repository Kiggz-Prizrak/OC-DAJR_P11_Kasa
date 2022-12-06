import "../styles/slideshow.css"

import React, { useState, useEffect } from "react";


export default function Slideshow(photos) {

  console.log(photos.gallery[0])

  
const [imageVisible, setImageVisible] = useState(photos.gallery[0]);


  return (
    <div className="slideshowContainer">
      <button>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <img src={imageVisible} alt="" />
      <span>1/</span>
      <button>
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}