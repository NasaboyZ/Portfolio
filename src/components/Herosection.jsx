import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const HeroSection = ({ setReelPlay }) => {
  const parentRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const parent = parentRef.current;
    const handleCrsr = (e) => {
      const parentRect = parent.getBoundingClientRect();
      const cursorSize = 64;
      const maxX = parentRect.width - cursorSize;
      const maxY = parentRect.height - cursorSize;
      const Xpos = Math.min(
        Math.max(e.clientX - parentRect.left, cursorSize),
        maxX
      );
      const Ypost = Math.min(
        Math.max(e.clientY - parentRect.top, cursorSize),
        maxY
      );
      gsap.to("#crsr", {
        x: Xpos,
        y: Ypost,
        ease: "power3.out",
        duration: 1,
      });
    };

    parent.addEventListener("mouseenter", () => {
      parent.addEventListener("mousemove", handleCrsr);
    });

    return () => {
      parent.removeEventListener("mouseleave", () => {
        gsap.to("#crsr", {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 1,
        });
      });
    };
  }, []);

  return (
    <div className="w-full h-screen bg-red-300/20 relative">
      <video
        autoPlay
        muted
        loop
        src="https://prismic-io.s3.amazonaws.com/rejouice/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4"
        className="h-screen w-full absolute object-cover object-center top-0 left-0 z-[9]"
      ></video>
      <div
        ref={parentRef}
        className="relative top-0 left-0 z-[15] h-screen w-full flex items-center lg:items-end justify-center"
      >
        <div
          id="crsr"
          onClick={() => setReelPlay(true)}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-orange invisible lg:visible flexCenter select-none"
        >
          Play reel
        </div>
        <h1 className="overflow-hidden h-[29vw] lg:h-[26vw]">
          {"Josef".split("").map((letter, idx) => (
            <span
              className="hero-span inline-block text-[25vw] lg:text-[27vw] font-medium font-Rejoice text-white leading-[27vw]"
              key={idx}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
