import "./Project.css";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const dataCard = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/flat-design-coffee-landing-page_23-2149190883.jpg?t=st=1720376300~exp=1720376900~hmac=1dab7d981d65f806710515a49a963c02e54b1d1814ab648dadb401aad3fca88b",
      title: "Cafe Nh",
      detail:
        "PRIVATEsrcComponentBodyMainProjectProject.jsx: Unexpected token ",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-vector/flat-design-coffee-landing-page_23-2149190883.jpg?t=st=1720376300~exp=1720376900~hmac=1dab7d981d65f806710515a49a963c02e54b1d1814ab648dadb401aad3fca88b",
      title: "Cafe Nh",
      detail:
        "PRIVATEsrcComponentBodyMainProjectProject.jsx: Unexpected token ",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-vector/flat-design-coffee-landing-page_23-2149190883.jpg?t=st=1720376300~exp=1720376900~hmac=1dab7d981d65f806710515a49a963c02e54b1d1814ab648dadb401aad3fca88b",
      title: "Cafe Nh",
      detail:
        "PRIVATEsrcComponentBodyMainProjectProject.jsx: Unexpected token ",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-vector/flat-design-coffee-landing-page_23-2149190883.jpg?t=st=1720376300~exp=1720376900~hmac=1dab7d981d65f806710515a49a963c02e54b1d1814ab648dadb401aad3fca88b",
      title: "Cafe Nh",
      detail:
        "PRIVATEsrcComponentBodyMainProjectProject.jsx: Unexpected token ",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-vector/flat-design-coffee-landing-page_23-2149190883.jpg?t=st=1720376300~exp=1720376900~hmac=1dab7d981d65f806710515a49a963c02e54b1d1814ab648dadb401aad3fca88b",
      title: "Cafe Nh",
      detail:
        "PRIVATEsrcComponentBodyMainProjectProject.jsx: Unexpected token ",
    },
  ];

  return (
    <article>
      {dataCard.map((p) => {
        return <ProjectCard {...p} key={p.id} />;
      })}
    </article>
  );
};

export default Project;
