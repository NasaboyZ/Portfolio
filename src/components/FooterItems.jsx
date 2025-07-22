import { IoIosArrowRoundForward } from "react-icons/io";

// Navigation Links Component
export const FooterNavigation = () => {
  const navigationLinks = ["Home", "Work", "About", "Contact"];

  return (
    <ul className="text-offwhite flex flex-col">
      {navigationLinks.map((link, index) => (
        <li
          key={index}
          className="underline-hover-effect text-offwhite text-lg w-fit"
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

// Social Links Component
export const FooterSocialLinks = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/NasaboyZ" },
    { name: "Linkedin", url: "www.linkedin.com/in/josef-leite" },
  ];

  return (
    <ul className="text-offwhite flex flex-col">
      {socialLinks.map((social, index) => (
        <li
          key={index}
          className="underline-hover-effect text-offwhite text-lg w-fit flex"
        >
          <a href={social.url} className="flex items-center">
            {social.name}{" "}
            <IoIosArrowRoundForward className="text-2xl text-offwhite -rotate-45" />
          </a>
        </li>
      ))}
    </ul>
  );
};

// Footer Header Component
export const FooterHeader = () => {
  return (
    <div className="">
      <h1 className="text-offwhite text-3xl font-Rejoice font-medium">josef</h1>
      <a
        href="/contact"
        className="inline-block mt-2 px-4 p-3 text-lg text-offwhite rounded-full border-2 hover:bg-offwhite hover:text-black transition-colors duration-300"
      >
        Kontaktieren
      </a>
    </div>
  );
};

// Footer Links Section Component
export const FooterLinksSection = () => {
  return (
    <div className="h-4/6 md:h-full md:w-1/4 flex flex-col md:flex-row justify-between">
      <FooterNavigation />
      <FooterSocialLinks />
    </div>
  );
};

// Footer Contact Info Component
export const FooterContactInfo = () => {
  const locations = ["Located in swiss"];

  return (
    <div className="h-[22%] flex justify-between items-center">
      <div className="footer-sec-left">
        {locations.map((location, index) => (
          <h5
            key={index}
            className="md:text-xl leading-tight font-medium text-offwhite"
          >
            {location}
          </h5>
        ))}
      </div>

      <div className="footer-sec-right md:w-2/6 flex flex-col md:flex-row md:justify-between items-end md:items-start">
        <h5 className="md:text-xl leading-tight font-medium text-offwhite">
          josefleite.00@hotmail.com
        </h5>
      </div>
    </div>
  );
};

// Animated Logo Component
export const FooterAnimatedLogo = () => {
  const logoText = "Josef";

  return (
    <div className="w-full h-1/2 mt-5">
      <h1 className="overflow-hidden text-center h-[26vw]">
        {logoText.split("").map((letter, idx) => (
          <span
            className="footer-span inline-block text-[22vw] lg:text-[26vw] font-medium font-Rejoice text-offwhite leading-[25vw]"
            key={idx}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

// Main Footer Content Component
export const FooterContent = () => {
  return (
    <>
      {/* Header Section */}
      <div className="footer-first w-full h-[60%] md:h-auto flex flex-col md:flex-row justify-between overflow-hidden">
        <FooterHeader />
        <FooterLinksSection />
      </div>

      {/* Contact Section */}
      <FooterContactInfo />

      {/* Animated Logo Section */}
      <FooterAnimatedLogo />
    </>
  );
};
