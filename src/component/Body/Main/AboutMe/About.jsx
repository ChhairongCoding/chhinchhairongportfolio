import "./About.css";
import aboutImg from "./aboutImg/aboutImg.jpg";
import Effect from "../../../Effect/Effect";
const Main = () => {
  return (
    <div>
      <div className="about">
        <div className="boxImg">
          <div className="backImg">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="aboutContain">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            hic quisquam inventore officiis voluptate veritatis excepturi
            laborum consectetur quidem exercitationem. Reiciendis vitae
            voluptate saepe, rerum ipsa earum perspiciatis ut ea. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Molestias hic quisquam
            inventore officiis voluptate veritatis excepturi laborum consectetur
            quidem exercitationem. Reiciendis vitae voluptate saepe, rerum ipsa
            earum perspiciatis ut ea.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            officia molestias explicabo sunt voluptatibus nemo accusantium,
            impedit laborum distinctio nihil, earum atque maxime amet mollitia
            sit aliquid iure accusamus ducimus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
