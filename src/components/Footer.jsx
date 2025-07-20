import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterContent } from "./FooterItems";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Header animation
    gsap.from(".footer-first div", {
      y: -200,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });

    gsap.from(".footer-sec-left", {
      x: -200,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".footer",
        start: "40% 90%",
        end: "70% 60%",
        scrub: true,
      },
    });

    // Right section animation
    gsap.from(".footer-sec-right", {
      x: 200,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".footer",
        start: "40% 90%",
        end: "70% 60%",
        scrub: true,
      },
    });

    // Logo animation
    gsap.from(".footer-span", {
      y: "-100%",
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".footer",
        start: "70% 90%",
        end: "top 0%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="footer w-full h-[100vh] md:h-screen bg-black px-4 md:px-10 py-10 overflow-hidden mt-[10vw]">
      <FooterContent />
    </div>
  );
};

export default Footer;
