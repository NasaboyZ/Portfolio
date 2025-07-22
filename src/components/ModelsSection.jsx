import { FaArrowTurnDown } from "react-icons/fa6";

import VideoOverlay from "../components/VideoOverlay";

const ModelsSection = () => {
  ///TODO: components erstellen wie cards Buttons und weiteres
  return (
    <div className="models w-full min-h-screen px-3 lg:px-9 pt-4">
      <p className="w-full flexCenter gap-2 lg:text-lg">
        Work & Erfolge{" "}
        <span className="rounded-full bg-black text-white px-3 py-1 text-xs lg:text-sm">
          work
        </span>{" "}
        <FaArrowTurnDown className="text-sm lg:text-base" />
      </p>
      <div className="mt-5 group">
        <h1 className="overflow-hidden w-full text-center lg:h-20">
          <span className="models-h1 inline-block text-3xl lg:text-7xl font-medium group-hover:underline decoration-black underline-offset-1 decoration-4">
            Endecke meine Werke
          </span>
        </h1>
        <h1 className="overflow-hidden w-full text-center lg:h-20">
          <span className="models-h1 inline-block text-3xl lg:text-7xl font-medium group-hover:underline decoration-black underline-offset-1 decoration-4">
            <i>und Engagement</i>
          </span>
        </h1>
      </div>
      <div className="mt-28 overflow-hidden">
        <div className="justifyBetween border-b-2 border-black py-2 lg:py-5">
          <h5 className="text-sm lg:text-2xl">
            Transformiere Visionen in realistische Projekte
          </h5>
        </div>
        <div className="w-full h-[50vh] lg:h-auto flex justify-between overflow-x-scroll mt-12 lg:mt-40">
          <VideoOverlay
            videoSrc="https://prismic-io.s3.amazonaws.com/rejouice/87835eca-32b7-4eeb-91fc-4ba0dad1fdec_Website-homepage-Work-01_1.mp4"
            imageSrc="/assets/imgs/truck.jpg"
            logoSrc="/assets/imgs/rivian.avif"
          />
          <VideoOverlay
            videoSrc="https://prismic-io.s3.amazonaws.com/rejouice/3492b027-4212-4103-b2e2-aa702345d784_Website-homepage-Work-02_1.mp4"
            imageSrc="/assets/imgs/oura.jpg"
            logoSrc="/assets/imgs/oura-svg.svg"
          />
          <VideoOverlay
            videoSrc="https://prismic-io.s3.amazonaws.com/rejouice/363f6760-3496-4638-8fc5-3b5d7711087c_Website-homepage-Work-03_1.mp4"
            imageSrc="/assets/imgs/moxon.jpg"
            logoSrc="/assets/imgs/moxon-svg.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ModelsSection;
