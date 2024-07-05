import "./About.css";
import aboutImg from "./aboutImg/aboutImg.jpg";
const Main = () => {
  return (
    <div>
      <div className="about">
        <div className="boxImg">
          <img src={aboutImg} alt="" />
        </div>
        <div className="aboutContain">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            hic quisquam inventore officiis voluptate veritatis excepturi
            laborum consectetur quidem exercitationem. Reiciendis vitae
            voluptate saepe, rerum ipsa earum perspiciatis ut ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
