import Image from "next/image";
//assets
import iconoHero from "../../../../public/images/iconoHero.svg"
//modules
import styles from "./hero.module.css"
import TypingEffect from "../typingEffect/TypingEffect"
import Link from "next/link";
export default function HeroSection() {
    const greetings = ["¡Hola!", "Bonjour!", "Hello!", "Ciao!", "こんにちは!", "안녕하세요!"];
    return(
        <div>
            <div className={styles.gradientBack}></div>
            <Image src={iconoHero} alt="iconoHero" className={styles.iconoHero} />
            <div className={styles.container}>
                <div className={styles.content}>
                    <TypingEffect  words={greetings}/>
                    <h1 className={styles.title}>
                    Soy <span className={styles.name}>Emiliano De Biasi</span> <br /> Desarrollador Front-End
                    </h1>
                    <Link href="/about" className={styles.button}>Saber más</Link>
                </div>
            </div>
        </div>
    )
}