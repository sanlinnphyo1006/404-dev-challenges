import { useState } from "react";
import ScarecrowImg from "./assets/scarecrow.png";

const App = () => {
  const [isImgLoading, setIsImgLoading] = useState(true);

  const handleLoad = () => setIsImgLoading(false);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-4 grid grid-rows-[min-content_1fr_2rem] min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-5 pb-16 gap-2">
          <h2 className="uppercase text-2xl">404 Not Found</h2>
          <div>
            <span> Challenge from </span>
            <a
              className="underline"
              href="https://devchallenges.io/"
              target="_blank"
            >
              devChallenges.io
            </a>
            <span> and Developed by </span>
            <a
              className="underline"
              href="https://github.com/sanlinnphyo1006"
              target="_blank"
            >
              San Linn Phyo
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-14">
          <div
            className={`w-full relative ${
              isImgLoading ? "loading-img-container" : ""
            }`}
          >
            <img
              className={`w-full max-w-xs mx-auto lg:max-w-md ${
                isImgLoading ? "opacity-0" : ""
              }`}
              src={ScarecrowImg}
              alt=""
              onLoad={handleLoad}
            />
            {isImgLoading ? <span className="loading-indicator"></span> : null}
          </div>
          <div className="w-full">
            <h1 className="text-5xl font-bold">I have bad news for you</h1>
            <p className="pt-8 text-lg">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <a
              className="inline-block px-11 py-6 bg-[#333333] text-white uppercase mt-16"
              href="/"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
