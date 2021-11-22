import React, { useEffect } from "react";
import useLottie from "lottie-react";
import { AnimationSegment } from "lottie-web";
import { Button } from "@chakra-ui/button";
import anime from "animejs";

import brainAnimation from "../../assets/brain.json";

interface props {
  history: any;
}

const LottieAnimation = () => {
  const FrameTime: AnimationSegment = [0, 90];

  const options = {
    animationData: brainAnimation,
    loop: false,
    autoplay: true,
    initialSegment: FrameTime,
  };

  return useLottie(options);
};

const NeuralinkHome: React.FC<props> = ({ history }) => {
  useEffect(() => {
    anime({
      targets: ".lottieContainer",
      opacity: [0, 1],
      duration: 3000,
      easing: "linear",
    });
  }, []);

  return (
    <section id="NeuralinkHome">
      <div className="RightBox">
        <h1>Elalink</h1>
        <div className="buttonContainer">
          <a href="#InfoBlock1">
            <Button colorScheme="whiteAlpha" size="lg">
              ELA - Esclerosis Lateral Amiotrófica
            </Button>
          </a>
          <Button
            onClick={() => history.push("/Neuralink/RetosCuidador")}
            colorScheme="whiteAlpha"
            size="lg"
          >
            Retos para el cuidador
          </Button>
        </div>
      </div>
      <div className="LeftBox">
        <div className="lottieContainer">
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
};

export default NeuralinkHome;
