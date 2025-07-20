import { useState } from "react";
import Loader from "../components/Loader";
import Reel from "../components/Reel";

import Slider from "../components/Slider";
import HeroItems from "../components/HeroItems";

const Homepage = () => {
  const [reelPlay, setReelPlay] = useState(false);

  return (
    <div className="home">
      <Loader />
      <Reel playReel={reelPlay} setReelPlay={setReelPlay} />
      <HeroItems setReelPlay={setReelPlay} />
      <Slider />
    </div>
  );
};

export default Homepage;
