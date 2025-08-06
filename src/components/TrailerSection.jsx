import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const TrailerSection = () => {
  const trailerRef = useRef(null);

  useGSAP(() => {
    // We register the SplitText plugin.
    gsap.registerPlugin(SplitText);

    const titleSplit = SplitText.create("#trailer h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: trailerRef.current,
        start: "top center",
      },
    });

    // Animate the title words using the same effect.
    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });

    // Animate the iframe container to fade in.
    scrollTimeline.from(
      ".video-container",
      {
        opacity: 0,
        duration: 1,
        y: 50,
        ease: "power1.inOut",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div
      id="trailer"
      ref={trailerRef}
      className="bg-black py-16 text-white text-center pb-20"
    >
      <div className="container mx-auto px-5">
        <div className="mb-16 md:px-0 px-5">
          <h2 className="!text-center mx-auto">WATCH THE TRAILER</h2>
        </div>

        <div className="video-container relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full aspect-video"
            src="https://www.youtube.com/embed/z5Mb_hKkZUw?si=Zeo8fiG48TlnPmyn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
