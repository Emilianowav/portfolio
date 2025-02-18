import React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import Proyecto1 from "../../../../public/images/Proyecto1.png";

const projects = [
  {
    id: 1,
    title: "Cookies & Go",
    description: "Proyeto de galletas proteicas, on un diseño pop y colorido. Busca una interacción con el usuario llamando la atencion con colores y movimientos. Al mismo tiempo se informa sobre el produto de manera intuitiva y sencilla (en desarrollo).",
    liveLink: "https://cookiesandgo.vercel.app",
    githubLink: "https://github.com/Emilianowav/Cookiesandgo.git",
    image: Proyecto1,
  },
  {
    id: 2,
    title: "Mi Proyecto 2",
    description: "Un proyecto que destaca en diseño y funcionalidad.",
    liveLink: "https://example.com/proyecto2",
    githubLink: "https://github.com/usuario/proyecto2",
    image: "/images/proyecto2.png",
  },
];

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Proyectos</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.textColumn}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
            <div className={styles.imageColumn}>
              <Image src={project.image} 
              layout="responsive" 
              width={16} 
              height={9} 
              alt={`Vista previa de ${project.title}`} 
              className={styles.projectImage} />
            <div className={styles.links}>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  Visitar Web
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
