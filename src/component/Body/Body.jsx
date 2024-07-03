import "./Body.css";
import Left from "./Main/HeroLeft/Left";
import Right from "./Main/Right/Right";
import About from "./Main/AboutMe/About";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import {} from "react-icons/di";

const Body = () => {
  return (
    <>
      <div className="background">
        <Left />
        <Right />
      </div>
      <div className="technology">
        <div className="marquee">
          <div className="marquee-content">
            <DiHtml5 size="3rem" className="clr-orage" />
            <DiCss3 size="3rem" className="clr-blue" />
            <DiJavascript size="3rem" className="clr-yellow" />
            <DiReact size="3rem" className="clr-blueSea" />
            <DiHtml5 size="3rem" className="clr-orage" />
            <DiCss3 size="3rem" className="clr-blue" />
            <DiJavascript size="3rem" className="clr-yellow" />
            <DiReact size="3rem" className="clr-blueSea" />
          </div>
        </div>
      </div>
      <div className="contain-Main">
        <About />
      </div>
    </>
  );
};

export default Body;
