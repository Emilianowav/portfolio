import styles from "./hero.module.css"
//assets
//modules
import TypingEffect from "../typingEffect/TypingEffect"
import Link from "next/link";
export default function HeroSection() {
    const greetings = ["¡Hola!", "Bonjour!", "Hello!", "Ciao!", "こんにちは!", "안녕하세요!"];
    return(
        <div>
            <div className={styles.gradientBack}></div>
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