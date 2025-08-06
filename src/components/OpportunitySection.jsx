import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const OpportunitySection = () => {
  const opportunityRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const titleSplit = SplitText.create("#opportunity h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: opportunityRef.current,
        start: "top center",
      },
    });

    // Animate the title words
    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });

    // Animate the three content columns
    scrollTimeline.from(
      ".opportunity-col",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.2,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div
      id="opportunity"
      ref={opportunityRef}
      className="bg-black text-white py-36 px-5"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold mb-16 px-4">
          A ONCE-IN-A-GENERATION OPPORTUNITY
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:divide-x md:divide-gray-500">
          {/* Column 1 */}
          <div className="opportunity-col p-4">
            <h3 className="text-2xl font-bold mb-4">
              A Proven, Timeless Format
            </h3>
            <p className="text-gray-400 mb-4">
              The global appetite for authentic food and travel content is
              insatiable.
            </p>
            <p className="text-gray-400">
              We're leveraging the proven, beloved format of cinematic
              story-telling established by giants like Anthony Bourdain to
              capture a massive, built-in audience.
            </p>
          </div>

          {/* Column 2 */}
          <div className="opportunity-col p-4">
            <h3 className="text-2xl font-bold mb-4">
              The Next Global Super-Trend
            </h3>
            <p className="text-gray-400 mb-4">
              Bitcoin is moving from a niche asset to a global financial layer.
            </p>
            <p className="text-gray-400">
              This show is perfectly positioned to tell the essential human
              stories of this transition, making it the premier media brand for
              the 'Bitcoin-curious' mainstream.
            </p>
          </div>

          {/* Column 3 */}
          <div className="opportunity-col p-4">
            <h3 className="text-2xl font-bold mb-4">
              Stories That Connect & Inspire
            </h3>
            <p className="text-gray-400">
              Beyond trends, the core of this show is the universal,
              immigrant-led search for a better life. These are powerful,
              emotionally resonant stories that transcend culture and create
              deep, lasting audience connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
