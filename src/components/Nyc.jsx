import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

const Nyc = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut ",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full py-20">
        <h2 className="will-fade">NYC</h2>

        <div className="content">
          <div className="cocktail-img">
            <img
              src="/images/avinyc.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Pilot: Safari Harlem</h2>
          <div id="masked-content">
            <h3>Pilot: Safari Harlem NYC</h3>
            <p>
              In Harlem, I profiled immigrant restaurateur Shakib, whose journey
              from Somalia to financial freedom with Bitcoin proves our core
              narrative.
            </p>
            <a
              href="https://indeehub.studio/film/findinghome-season1-1"
              className="block p-3  bg-gray-100 text-black w-2xs mx-auto rounded-full font-bold mt-4 text-center"
              target="_blank"
            >
              Watch on Indeehub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nyc;
