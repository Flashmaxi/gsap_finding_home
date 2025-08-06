import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Nyc from "./components/Nyc";
import Prague from "./components/Prague";
import Contact from "./components/Contact";
import TrailerSection from "./components/TrailerSection";
import OpportunitySection from "./components/OpportunitySection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />

      <About />
      <TrailerSection />
      <OpportunitySection />
      <div id="episodes"></div>
      <Nyc />

      <Prague />
      <Contact />
    </main>
  );
};

export default App;
