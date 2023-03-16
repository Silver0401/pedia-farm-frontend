import React from "react";
import { props } from "./types";

const Recomendations: React.FC<props> = ({ questionsList }) => {
  return (
    <section id="Recomendations">
      <h1>{"Recomendaciones"}</h1>

      <ul>
        {questionsList.map((question) => {
          return question.answerForRecomendation === question.answer ? (
            <li key={question.question} style={{ margin: "25px 0px" }}>
              <h5
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  marginBottom: "20px",
                }}
              >{`Categoría: ${question.category}`}</h5>
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
