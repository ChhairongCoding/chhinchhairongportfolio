import "./Body.css";
import Left from "./Main/Left";
import Right from "./Main/Right";
import About from "./Main/About";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import {} from "react-icons/di";
import Project from "./Main/Project/Project";
import ContactMe from "./Main/ContactMe";
import Effect from "../Effect/Effect";

const Body = () => {
  return (
    <>
      <div className="background">
        <Left />
        <Right />
        <div className="Efect">
          <Effect />
        </div>
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
      <div className="project">
        <Project />
      </div>
      <div className="contactMe">
        <ContactMe />
      </div>
    </>
  );
};

export default Body;
