//modules
import HeroSection from "./modules/HeroSection/page";
import About from "./modules/About/page";
import Projects from "./modules/Projects/page";
import Carousel from "./modules/Technologies/page";
import Footer from "./modules/Footer/Footer";

export default function Home() {
  return (
    <div>
    <HeroSection />
    <About />
    <Projects />
    <Carousel />
    <Footer/>
    </div>
  );
}
