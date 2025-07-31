import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 50,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  });

  return (
    <section id="hero" className="noisy">
      <h1 className="title">
        Finding <br /> Home
      </h1>

      <img src="/images/cuttlery2.png" alt="house left" className="left-leaf" />
      <img
        src="/images/compass.png"
        alt="compass right"
        className="right-leaf"
      />

      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>More than a travel show</p>
            <p className="subtitle">
              A search for <br /> belonging
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Finding Home explores the intersection of food, freedom, and
              finance. Each episode asks what it truly means to find home in a
              world of new borders and new money.
            </p>
            <a href="#episodes">View episodes</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
