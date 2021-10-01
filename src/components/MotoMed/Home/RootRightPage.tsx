import React from "react";
import MotoMedAnimation from "./../../../assets/motoMedLottie.json";
import useLottie from "lottie-react";

const LottieAnimation = () => {
  const options = {
    animationData: MotoMedAnimation,
    loop: true,
    autoplay: true,
  };

  const View = useLottie(options);

  return View;
};

const RootRightPage: React.FC = () => {
  return (
    <div className="RootRightPage">
      <div className="lottieContainer">
        <LottieAnimation />
      </div>

      <div className="bgRedCircle" />
    </div>
  );
};

export default RootRightPage;
