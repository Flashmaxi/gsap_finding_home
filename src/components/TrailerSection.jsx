import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const TrailerSection = () => {
  const trailerRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "z5Mb_hKkZUw";

  // Use your custom image URL here.
  // This example uses a high-quality thumbnail from YouTube.
  const customThumbnailUrl = `/images/safarifood.jpg`;

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
          {showVideo ? (
            <iframe
              className="w-full h-full aspect-video"
              src={`https://www.youtube.com/embed/${videoId}?si=Zeo8fiG48TlnPmyn&autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="relative w-full h-full aspect-video cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <img
                src={customThumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 noisy">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
