"use client"
import { useEffect, useState } from "react";
import style from "./typingEffect.module.css";

interface TypingEffectProps {
    words: string[];
    typingSpeed?: number;
    pauseTime?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
    words,
    typingSpeed = 100,
    pauseTime = 2000,
}) => {
    const [currentWord, setCurrentWord] = useState<string>(""); // Texto actual
    const [index, setIndex] = useState<number>(0); // Índice de la palabra
    const [isDeleting, setIsDeleting] = useState<boolean>(false); // Estado de escritura o borrado

    useEffect(() => {
        const handleTyping = () => {
            const fullWord = words[index]; // Palabra completa actual

            if (!isDeleting) {
                // Escribiendo la palabra
                const nextWord = fullWord.slice(0, currentWord.length + 1);
                setCurrentWord(nextWord);

                if (nextWord === fullWord) {
                    // Cuando la palabra completa está escrita
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Borrando la palabra
                const nextWord = fullWord.slice(0, currentWord.length - 1);
                setCurrentWord(nextWord);

                if (nextWord === "") {
                    // Cuando se borra completamente la palabra
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        };

        // Configuración del temporizador para manejar el efecto de escritura
        const timeout = setTimeout(
            handleTyping,
            isDeleting ? typingSpeed / 2 : typingSpeed
        );

        return () => clearTimeout(timeout); // Limpiar el temporizador al desmontar
    }, [currentWord, index, isDeleting, words, typingSpeed, pauseTime]);

    return (
        <div>
            <span className={style.typingEffect}>{currentWord}</span>
        </div>
    );
};

export default TypingEffect;
