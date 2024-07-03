import "./About.css";
import CardRight from "../../Card Right/CardRight";

("./CardRight");
const Main = () => {
  const Right = [
    {
      id: 1,
      Head: "CHHIN CHHAIRONG",
      p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, similique. Quod fuga velit, natus obcaecati aperiam labore expedita recusandae tenetur impedit quaerat placeat, ipsam, quidem totam voluptates provident iusto inventore?",
      about: "Who am I?",
    },
  ];

  return (
    <div className="contain">
      <div className="Right">
        {Right.map((p) => {
          return <CardRight {...p} key={p.id} />;
        })}
      </div>
    </div>
  );
};

export default Main;
