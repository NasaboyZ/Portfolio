import useAboutSectionStore from "../store/aboutSectionStore";

const AboutSection = () => {
  const { text } = useAboutSectionStore();

  return (
    <div className="about w-full lg:h-screen px-3 lg:px-9 pt-4 my-10">
      <div className="justifyBetween border-b-[1px] my-6 border-black overflow-hidden py-2 lg:py-5">
        <h4 className="lines text-sm lg:text-2xl flexCenter text-[#0e0e0e]">
          Josef Leite
        </h4>
        <h4 className="lines text-sm lg:text-2xl font-thin text-[#0e0e0e]">
          Über mich
        </h4>
      </div>
      <div className="py-4 flex flex-wrap">
        {text.split(" ").map((word, idx) => (
          <p key={idx} className="para1 mb-1 mr-3 overflow-hidden">
            <span className="lines inline-block text-2xl lg:text-6xl">
              {word}
            </span>
          </p>
        ))}
        <div className="mb-2 lg:h-16 overflow-hidden"></div>
      </div>
    </div>
  );
};

export default AboutSection;
