import "./CardRight.css";

const CardRight = (props) => {
  const { Head, p, about } = props;

  return (
    <article>
      <div className="containCard">
        <h2>{Head}</h2>
        <p>{p}</p>
      </div>
      <div className="title">
        <h1>{about}</h1>
      </div>
    </article>
  );
};

export default CardRight;
