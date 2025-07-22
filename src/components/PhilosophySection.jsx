const PhilosophySection = () => {
  return (
    <div className="philosophy w-full min-h-screen px-3 lg:px-9 pt-4 my-10">
      <div className="justifyBetween mt-6 overflow-hidden">
        <h4 className="philosophy-lines text-lg lg:text-3xl flexCenter text-[#0e0e0e]">
          We operate on a simple philosophy:
        </h4>
      </div>
      <div className="justifyBetween border-b-[1px] pb-4 mb-6 border-black overflow-hidden">
        <h4 className="philosophy-lines text-lg lg:text-3xl flexCenter text-[#0e0e0e]">
          Quality over quantity.
        </h4>
      </div>
      <div className="py-4 flex flex-wrap">
        {"We partner with up to 5 clients each year. This allows intense focus on the transformation and launch of your brand by our very best team, which is the only team we have. We specialize in working with startups that are revolutionizing their industries."
          .split(" ")
          .map((word, idx) => (
            <p key={idx} className="mb-1 mr-3 overflow-hidden">
              <span className="philosophy-lines inline-block text-2xl lg:text-6xl">
                {word}
              </span>
            </p>
          ))}
      </div>
      <div className="seats w-full h-[100vh] my-10 relative">
        <video
          autoPlay
          loop
          muted
          src="https://raw.githubusercontent.com/peyush-nuwal/rejoice/main/public/RJ-BALL-BLUE-ORANGE-scaled.webm"
          type="video/webm"
          className="w-full h-full object-contain"
        ></video>
        <div className="absolute top-0 left-0 w-full h-full flexCenter">
          <div className="seats-progress w-9/12 lg:w-1/3">
            <svg className="" viewBox="0 0 100 100" transform="rotate(-90)">
              <circle
                cx="50"
                cy="50"
                r="49"
                stroke="#D4D4D4"
                strokeWidth="0.25"
                fill="none"
                className="o:0.3 $$2$$ $$3$$ $$4$$ (.in-view):tween:all,2.8s,easeOutSlow"
                strokeDasharray="308"
                strokeDashoffset="0"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="49"
                stroke="#fff"
                strokeWidth="0.25"
                fill="none"
                className="cir2"
                strokeDasharray="308"
                strokeDashoffset="307.88"
              ></circle>
            </svg>
          </div>
          <div className="absolute dot-cir w-9/12 lg:w-1/3">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="1" r="1" fill="#fff"></circle>
            </svg>
          </div>
          <div className="absolute left-seats">
            <h1 className="text-4xl lg:text-6xl font-medium text-white">
              2 seats
            </h1>
            <h4 className="text-base lg:text-xl font-medium text-center text-white">
              available for 2024
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
