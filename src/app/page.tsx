import Image from "next/image";
//modules
import HeroSection from "./modules/HeroSection/page";
import About from "./modules/About/page";

export default function Home() {
  return (
    <div>
    <HeroSection />
    <About />
    </div>
  );
}
