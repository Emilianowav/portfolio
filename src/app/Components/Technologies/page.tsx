import CarouselModule from "./carouselModule/Carousel";
import styles from "./page.module.css"


const Carousel = () => {

    const technologies = [
        { image: "/images/TypeScript.svg", title: "TypeScript" },
        { image: "/images/React.svg", title: "React" },
        { image: "/images/NextJs.svg", title: "Next.js" },
        { image: "/images/NodeJs.svg", title: "Node.js" },
        { image: "/images/TailwindCSS.svg", title: "Tailwind CSS" },
        { image: "/images/MySQL.svg", title: "MySQL" },
        { image: "/images/Vercel.svg", title: "Vercel" },
        { image: "/images/Figma.svg", title: "Figma" },
        { image: "/images/AdobeIllustrator.svg", title: "Adobe Illustrator" },
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Mis Tecnologias</h2>
            <CarouselModule items={technologies} />
        </div>
    )
}

export default Carousel;

