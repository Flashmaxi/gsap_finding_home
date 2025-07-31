import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Avi Burra</p>
            <h2>ABOUT THE HOST</h2>
          </div>

          <div className="sub-content">
            <p>
              Avi Burra is a traveler and storyteller fascinated by how
              technology shapes our ability to find community and freedom. He
              created 'Finding Home' to explore one of the most fundamental
              human desires: the search for a place to truly belong. He believes
              the best conversations happen over a shared meal.
            </p>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/avi.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/avi-eating.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/avinyc.jpg" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy " />
          <img src="/images/aviprague1.png" alt="grid-img-3 " />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/safarifood.jpg" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};
export default About;
