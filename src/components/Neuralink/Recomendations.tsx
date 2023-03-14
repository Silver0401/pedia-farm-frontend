import React from "react";

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

const Recomendations: React.FC<props> = ({ questionsList }) => {
  return (
    <section id="Recomendations">
      <h1>{"Recomendaciones"}</h1>

      <ul>
        {questionsList.map((question) => {
          return question.answerForRecomendation === question.answer ? (
            <li>{question.recomendation}</li>
          ) : null;
        })}
      </ul>
    </section>
  );
};

export default Recomendations;
