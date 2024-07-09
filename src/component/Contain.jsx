import Nav from "./Navbar/Nav";
import "../App.css";
import Body from "./Body/Body";
const Contain = () => {
  return (
    <>
      <div className="containNav">
        <Nav />
      </div>

      <div className="class">
        <Body />
      </div>
    </>
  );
};

export default Contain;
