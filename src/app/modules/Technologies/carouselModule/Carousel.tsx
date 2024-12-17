"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

type CarouselItem = {
  image: string;
  title: string; 
};

type CarouselProps = {
  items: CarouselItem[]; 
};

const CarouselModule: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);  
  const speed = 0.7; 

  useEffect(() => {
    const moveCarousel = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        setScrollPosition((prev) => {
          const nextPosition = prev - speed;
          // Si ya no hay espacio (cuando se ha desplazado completamente a la izquierda), reiniciar a 0
          if (nextPosition <= -carousel.scrollWidth / 2) {
            return 0; // Volver al inicio
          }
          return nextPosition;
        });
      }
    };

    const interval = setInterval(moveCarousel, 16); // Aproximadamente 60fps

    // Limpia el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(interval);
    };
  }, [speed]);

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        ref={carouselRef}
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {/* Duplicamos los elementos para simular el movimiento infinito */}
        {[...items, ...items].map((item, index) => (
          <div className={styles.slide} key={index}>
            <Image src={item.image} alt={`Slide ${index}`} width={100} height={100} />
            <h4 className={styles.itemTitle}>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselModule;
