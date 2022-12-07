import { useEffect, useState } from "react";
import "../styles/rating.css";

export default function rating(props) {
  //console.log(props.rating)

  

  const [starList, setStarList] = useState([
    { id: 1, style: "emptyStar" },
    { id: 2, style: "emptyStar" },
    { id: 3, style: "emptyStar" },
    { id: 4, style: "emptyStar" },
    { id: 5, style: "emptyStar" },
  ]);

  useEffect(() => {
    const newArray = starList;
    console.log(newArray);
    newArray.map((e) => {
      console.log(newArray.indexOf(e));
      if (newArray.indexOf(e) + 1 <= props.rating) {
        e.style = "fullStar";
      }
    });
    console.log(newArray);
    setStarList(newArray);
  }, [props.rating]);

  return (
    <div className="ratingContainer">
      <ul className="cardContainer">
        {starList.map((star) => {
          if(star.style == "emptyStar") {
            return (
              <li key={star.id}>
                <i className="fa-regular fa-star"></i>
              </li>
            );
          }
          return (
            <li key={star.id}>
              <i className="fa-solid fa-star"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
