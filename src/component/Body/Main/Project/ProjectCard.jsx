import "./Project.css";

const ProjectCard = (props) => {
  const { img, title, detail } = props;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2 className="title">{title}</h2>
      <p className="detail">{detail}</p>
    </div>
  );
};

export default ProjectCard;
