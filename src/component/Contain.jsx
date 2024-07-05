import Nav from "./Navbar/Nav";
import "../App.css";
import Body from "./Body/Body";
import Effect from "./Effect/Effect";

const Contain = () => {
  return (
    <>
      <div className="containNav">
        <Nav />
      </div>

      <div className="class">
        <Body />
        <Effect />
      </div>
    </>
  );
};

export default Contain;
