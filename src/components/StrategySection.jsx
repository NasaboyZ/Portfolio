import { IoReturnDownForwardSharp } from "react-icons/io5";

const StrategySection = () => {
  return (
    <div className="strategy w-full min-h-screen px-3 lg:px-9 pt-4 my-10">
      <div className="justifyBetween mt-6 overflow-hidden">
        <h4 className="strategy-lines text-xl lg:text-3xl flexCenter text-[#0e0e0e]">
          Strategy & emotion.
        </h4>
      </div>
      <div className="justifyBetween border-b-[1px] pb-4 mb-6 border-black overflow-hidden">
        <h4 className="strategy-lines text-xl lg:text-3xl flexCenter text-[#0e0e0e]">
          You need both.
        </h4>
      </div>
      <div className="py-4 flex flex-wrap pb-10">
        {"Data matters, yet it’s the emotion that drives buying decisions. We don’t believe in ‘one size fits all.’ We craft unique brand experiences that deeply resonate with your audience and boost your KPIs."
          .split(" ")
          .map((word, idx) => (
            <p key={idx} className="mb-1 mr-3 overflow-hidden">
              <span className="strategy-lines inline-block text-2xl lg:text-6xl">
                {word}
              </span>
            </p>
          ))}
      </div>
      <h1 className="mt-[3vw] font-Rejoice text-3xl lg:text-[7vw] border-[1px] border-b-black border-transparent justifyBetween">
        Get in touch.{" "}
        <span className="font-Rejoice text-xl lg:self-end flex items-center py-2 lg:py-5">
          <IoReturnDownForwardSharp /> contact
        </span>
      </h1>
    </div>
  );
};

export default StrategySection;
