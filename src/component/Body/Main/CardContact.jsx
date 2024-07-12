import "../Body.css";

const CardContact = () => {
  return (
    <article>
      <div className="Icon">{icon}</div>
      <div className="titleCard">{titleCard}</div>
      <p>{Detail}</p>
    </article>
  );
};

export default CardContact;
