import { useEffect, useState } from "react";
import "../styles/rating.css";

export default function rating(props) {
  //console.log(props.rating)

  const [starList, setStarList] = useState([
    { id: 1, style: false },
    { id: 2, style: false },
    { id: 3, style: false },
    { id: 4, style: false },
    { id: 5, style: false },
  ]);

  useEffect(() => {
    const newArray = starList.map((e) => ({
      id: e.id,
      style: starList.indexOf(e) + 1 <= props.rating,
    }));
    setStarList(newArray);
  }, [props.rating]);

  return (
    <ul className="ratingContainer">
      {starList.map((star) => {
        if (!star.style) {
          return (
            <li style={{ color: "#E3E3E3" }} key={star.id}>
              <i className="fa-solid fa-star"></i>
            </li>
          );
        }
        return (
          <li style={{ color: "#FF6060" }} key={star.id}>
            <i className="fa-solid fa-star"></i>
          </li>
        );
      })}
    </ul>
  );
}
