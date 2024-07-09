import React from "react";
import "./Project.css"; // Ensure correct path to your CSS file

const ProjectCard = (props) => {
  const { img, title, detail } = props;

  return (
    <div className="card">
      <img src={img} alt={title} />
      <h2 className="title">{title}</h2>
      <p className="detail">{detail}</p>
    </div>
  );
};

export default ProjectCard;
