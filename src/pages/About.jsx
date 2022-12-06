import Dropdown from "../components/Dropdown"

import "../styles/about.css"

export default function About() {
  return (
    <div className="aboutContainer">
        <img
          className="headerImg"
          src="http://127.0.0.1:5173/about_header_img.jpg"
          alt=""
        />
      <Dropdown title={"test"} content={"bla bla bla"} />
      <Dropdown title={"test"} content={"bla bla bla"} />
      <Dropdown title={"test"} content={"bla bla bla"} />
      <Dropdown title={"test"} content={"bla bla bla"} />
    </div>
  );
}