import React, { Dispatch, SetStateAction } from "react";
import { useLottie, LottieOptions } from "lottie-react";

// Lotties
import { Button } from "@chakra-ui/button";
import { categories } from "./types";

interface GenericQuestionProps {
  lottie: any;
  question: string;
  index: number;
  setQuestionsList: Dispatch<SetStateAction<GenericQuestionListProps[]>>;
  transitionFunc: (
    direction: "forward" | "backward" | "OutOfInit" | "InOfInit"
  ) => void;
}

interface GenericQuestionListProps {
  lottie: any;
  question: string;
  answer: "yes" | "no" | "awaiting";
  answerForRecomendation?: "yes" | "no";
  recomendation?: string;
  category: categories;
}

interface LottieAnimationProps {
  animation: any;
}

const LottieAnimation = (data: LottieAnimationProps) => {
  const options: LottieOptions = {
    animationData: data.animation,
    loop: true,
    autoplay: true,
    style: { width: "100%", height: "100%" },
  };

  const { View } = useLottie(options);
  return View;
};

const GenericQuestion: React.FC<GenericQuestionProps> = ({
  lottie,
  question,
  index,
  setQuestionsList,
  transitionFunc,
}) => {
  return (
    <section id="GenericQuestion">
      <div className="TopReturnButton">
        <Button
          type="button"
          colorScheme={"whiteAlpha"}
          size="lg"
          onClick={() => transitionFunc("backward")}
        >
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z" />
          </svg>
        </Button>
      </div>

      <div className="questionContainer">
        <h2>{question}</h2>

        <div className="yesNoButtons">
          <Button
            type="button"
            colorScheme={"red"}
            size="lg"
            onClick={() => {
              setQuestionsList((prevQuestionList) => {
                const newArr = [...prevQuestionList];
                newArr[index] = {
                  ...prevQuestionList[index],
                  answer: "no",
                };
                return newArr;
              });
              transitionFunc("forward");
            }}
          >
            {"No"}
          </Button>
          <Button
            type="button"
            colorScheme={"green"}
            size="lg"
            onClick={() => {
              setQuestionsList((prevQuestionList) => {
                const newArr = [...prevQuestionList];
                newArr[index] = {
                  ...prevQuestionList[index],
                  answer: "yes",
                };
                return newArr;
              });
              transitionFunc("forward");
            }}
          >
            {"Si"}
          </Button>
        </div>
      </div>
      <div className="animationContainer">
        <div className="animationInnerContainer">
          {LottieAnimation({
            animation: lottie,
          })}
        </div>
      </div>
    </section>
  );
};

export default GenericQuestion;
