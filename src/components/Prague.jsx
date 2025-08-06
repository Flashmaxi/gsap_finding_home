import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

const Prague = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art-prague",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade-prague", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img-prague", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut ",
      })
      .to("#masked-content-prague", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <div id="art-prague">
      <div className="container mx-auto h-full py-20">
        <h2 className="will-fade-prague">PRAGUE</h2>
        <div className="content">
          <div className="cocktail-img">
            <img
              src="/images/aviprague.png"
              alt="cocktail"
              className="abs-center masked-img-prague size-full object-contain"
            />
          </div>
        </div>
        <div className="masked-container">
          <h2 className="will-fade-prague">Episode PRAGUE</h2>
          <div id="masked-content-prague" className="opacity-0">
            <h3>Episode 2: PRAGUE</h3>
            <p>
              We explore Prague’s thriving Bitcoin scene, showcasing how a new
              generation is embracing economic freedom. Investor Insight: This
              episode demonstrates the show’s international production
              capabilities and access to key figures in the European Bitcoin
              ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prague;
