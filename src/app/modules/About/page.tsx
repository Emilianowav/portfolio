import styles from "./about.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        
        <div className={styles.videoContainer}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
            >
                <source src="/video/videoAbout1.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
        </div>

        

            <div className={styles.textContainer}>
            <h2 className={styles.h2}>Acerca de mí</h2>
            <p className={styles.description}>
                Me gusta trabajar de forma cíclica <span className={styles.span}>implementar, mejorar, aprender</span>. <br />
                Mi especialidad es la creación de páginas modernas utilizando tecnologías como <span className={styles.span}>React, Next.js, y Node.js</span>. <br /> 
                Me encanta desarrollar aplicaciones con funcionalidades que tengan impacto, con un diseño: impecable, adaptable y funcional. <br />
                <span className={styles.span}> 
                Mi objetivo es podes ser un parte importante del equipo y contribuir con mis habilidades y conocimientos.</span>
            </p>


            <div className={styles.linksContainer}>
                <a href="/path-to-your-cv.pdf" download className={styles.downloadBtn}>
                Descargar CV
                </a>
                <div className={styles.socialLinks}>
                <a 
                    href="https://github.com/Emilianowav" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.iconLink}
                >
                    <FaGithub size={30} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/emiliano-de-biasi-92b202236/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.iconLink}
                >
                    <FaLinkedin size={30} />
                </a>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default About;
