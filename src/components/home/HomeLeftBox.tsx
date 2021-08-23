import React from "react";
import useLottie from "lottie-react";
import { motion } from "framer-motion";
import PharmaAnimation from "./../../assets/pharmaLottie.json";

const LottieAnimation = () => {
  const options = {
    animationData: PharmaAnimation,
    loop: true,
    autoplay: true,
  };

  const View = useLottie(options);

  return View;
};

const HomeLeftBox: React.FC = () => {
  const MotionTransitionVariants = {
    initPosition: {
      opacity: 0,
    },
    DesiredPosition: {
      opacity: 1,
    },
    ExitPosition: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="HomeLeftBox"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <div className="lottieBox">
        <LottieAnimation />
      </div>
    </motion.div>
  );
};

export default HomeLeftBox;
