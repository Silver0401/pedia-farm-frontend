import React from "react";
// import useLottie from "lottie-react";
// import { AnimationSegment } from "lottie-web";

interface GenericQuestionListProps {
  lottie: any;
  question: string;
  answer: "yes" | "no" | "awaiting";
  answerForRecomendation?: "yes" | "no";
  recomendation?: string;
  category:
    | "hipertension"
    | "smoking"
    | "sedentarismo"
    | "obesity"
    | "dyslipidemia"
    | "saos"
    | "diabetes"
    | "atherosclerosis"
    | "fibrilaiton";
}

interface props {
  questionsList: GenericQuestionListProps[];
}

// const LottieAnimation = (animation: any) => {
//   // const FrameTime: AnimationSegment = [0, 90];

//   const options = {
//     animationData: animation,
//     loop: true,
//     autoplay: true,
//     // initialSegment: FrameTime,
//   };

//   return useLottie(options);
// };

const Recomendations: React.FC<props> = ({ questionsList }) => {
  return (
    <section id="Recomendations">
      <h1>{"Recomendaciones"}</h1>

      <ul>
        {questionsList.map((question) => {
          return question.answerForRecomendation === question.answer ? (
            <li style={{ margin: "25px 0px" }}>
              {/* <div
                className="lottTop"
                style={{
                  position: "absolute",
                  width: "40px",
                  height: "40px",
                  top: 0,
                  right: 0,
                  borderRadius: "50%",
                  background: "white",
                }}
              >
                {LottieAnimation(question.lottie)}
              </div> */}
              <p
                style={{
                  whiteSpace: "pre-line",
                  textAlign: "left",
                  padding: "0px 40px",
                }}
              >{`${question.recomendation}`}</p>
            </li>
          ) : null;
        })}
      </ul>
    </section>
  );
};

export default Recomendations;
