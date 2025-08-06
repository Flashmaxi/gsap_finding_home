import { socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      });
  });

  return (
    <footer id="contact">
      <div className="content">
        <h2>BECOME A PARTNER</h2>

        <div className="max-w-4xl mx-auto">
          <p className="!text-lg">
            We are currently seeking partners and seed funding to produce our
            next episode in Paraguay and complete the first six-episode season.{" "}
            Our production pipeline is already strong, with compelling stories
            developing with British expats in Bulgaria and Sardinia, and a
            return to NYC to follow a restaurateur's journey into Bitcoin.
          </p>
        </div>

        <div>
          <h3>If you share our vision, we want to talk to you.</h3>
          <span>Fund our Paraguay episode on Angor</span>
          <a
            href="#"
            className="block p-3  bg-gray-100 text-black w-2xs mx-auto rounded-full font-bold mt-4"
          >
            Fund next episode
          </a>
        </div>

        <div>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} className="size-[30px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
