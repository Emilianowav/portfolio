import React from "react";
import styles from "./projects.module.css";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Mi Proyecto 1",
    description: "Este es un proyecto que muestra cómo aplicar una idea creativa.",
    liveLink: "https://example.com/proyecto1",
    githubLink: "https://github.com/usuario/proyecto1",
    image: "/images/proyecto1.png",
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
              <div className={styles.links}>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  Visitar Web
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  Ver en GitHub
                </a>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <Image src={project.image} width={400} height={300} alt={`Vista previa de ${project.title}`} className={styles.projectImage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
