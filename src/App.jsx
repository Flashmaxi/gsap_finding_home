import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Nyc from "./components/Nyc";
import Prague from "./components/Prague";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />

      <About />
      <div id="episodes"></div>
      <Nyc />

      <Prague />
      <Contact />
    </main>
  );
};

export default App;
