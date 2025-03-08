//modules
import HeroSection from "./Components/HeroSection/page";
import About from "./Components/About/About";
import Projects from "./Components/Projects/page";
import Carousel from "./Components/Technologies/page";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
    <HeroSection />
    <About id="about" />
    <Carousel />
    <Projects />
    <Footer/>
    </div>
  );
}
