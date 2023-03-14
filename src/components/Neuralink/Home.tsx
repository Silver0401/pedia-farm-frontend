import React, { useEffect, useState } from "react";
import useLottie from "lottie-react";
import { AnimationSegment } from "lottie-web";
import { Button } from "@chakra-ui/button";
import anime from "animejs";
import GenericQuestion from "./GenericQuestion";
import Recomendations from "./Recomendations";

import brainAnimation from "../../assets/brain.json";
import heart from "../../assets/Lotties/heart.json";
import exercise from "../../assets/Lotties/exercise.json";
import sleep from "../../assets/Lotties/sleep.json";

interface GenericQuestionProps {
  lottie: any;
  question: string;
  answerForRecomendation?: "yes" | "no";
  recomendation?: string;
  answer: "yes" | "no" | "awaiting";
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

const NeuralinkHome: React.FC = () => {
  const InitList: GenericQuestionProps[] = [
    {
      lottie: heart,
      question: "¿Padece usted de Hipertensión?",
      answer: "awaiting",
      category: "hipertension",
    },
    {
      lottie: heart,
      question: "¿Toma usted medicamentos para dicha Hipertensión?",
      answer: "awaiting",
      category: "hipertension",
      answerForRecomendation: "no",
      recomendation:
        "El paciente no toma medicamentos para la hipertensión. Se recomienda empezar con un tratamiento farmacológico con el objetivo de estabilizar la presión sistólica del paciente por debajo de 140/90 mmHg. Utilizar medicamentos como: Hidroclorotiazida, Enalapril, Captopril o Clortalidona",
    },
    {
      lottie: sleep,
      question: "¿Con estos medicamentos se siente mejor?",
      answer: "awaiting",
      category: "hipertension",
      answerForRecomendation: "no",
      recomendation:
        "Los medicamentos que toma el paciente para su hipertensión podrían no estar teniendo el efecto deseado. Se recomienda analizar el esquema de tratamiento recetado, evaluar su factibilidad y en caso de ser necesario modificarlo.",
    },
    {
      lottie: exercise,
      question: "¿Hace ejercicio al menos 40 minutos diariamente?",
      answer: "awaiting",
      category: "sedentarismo",
      answerForRecomendation: "no",
      recomendation:
        "El paciente tiene un estilo de vida sedentario. Recomendarle una rutina de ejericio apegada a sus necesidades y posibilidades",
    },
    {
      lottie: exercise,
      question: "¿Tiene usted sobrepeso u obesidad?",
      answer: "awaiting",
      category: "obesity",
      answerForRecomendation: "yes",
      recomendation:
        "El paciente considera tener sobrepeso u obesidad, Se recomienda referir con un nutriólogo para crearle una dieta personalizada",
    },
    {
      lottie: exercise,
      question: "¿Toma medicamentos para bajar de peso?",
      answer: "awaiting",
      category: "obesity",
      answerForRecomendation: "no",
      recomendation:
        "El paciente no utiliza medicamentos hipolipemiantes, dependiendo del examen fisico evaluar la posibilidad de recetarle dichos fármacos",
    },
    {
      lottie: exercise,
      question: "Se siente mejor tomando estos medicamentos?",
      answer: "awaiting",
      category: "obesity",
      answerForRecomendation: "no",
      recomendation:
        "Los fármacos parecen no estar teniendo efectos significativamente positivo en el paciente. Evaluar la utilidad de estos y modificar el esquema farmacológico de ser necesario.",
    },
    // {
    //   lottie: exercise,
    //   question:
    //     "¿Le han mencionado sus parientes que ronca al dormir o usted tiene problemas para dormir?",
    //   answer: "awaiting",
    //   category: "saos",
    // },
    {
      lottie: exercise,
      question:
        "¿Se le ha diagnósticado el síndrome de apnea obstructiva del sueño?",
      answer: "awaiting",
      category: "saos",
    },
    {
      lottie: exercise,
      question: "¿La han dado algun tratamiento para su apnea del sueño?",
      answer: "awaiting",
      category: "saos",
      answerForRecomendation: "no",
      recomendation:
        "El paciente menciona tener SAOS sin tratamiento, verificar veracidad y severidad para recomendar un posible tratamiento",
    },
    {
      lottie: exercise,
      question: "¿Tiene usted Diabetes?",
      answer: "awaiting",
      category: "diabetes",
    },
    {
      lottie: exercise,
      question: "¿Toma Medicamentos para la Diabetes?",
      answer: "awaiting",
      category: "diabetes",
      answerForRecomendation: "no",
      recomendation:
        "El paciente no toma medicamentos para la diabetes. Se recomienda empezar con un tratamiento farmacológico",
    },
    {
      lottie: exercise,
      question: "¿Se siente mejor con dichos medicamentos?",
      answer: "awaiting",
      category: "diabetes",
      answerForRecomendation: "no",
      recomendation:
        "Posibilidad de tratamiento diabético ineficaz, analizar y evaluar la posibilidad de un cambio del esquema farmacológico del paciente, buscando obtener: Una glucosa en ayuno estable de 70 a 130mg/dl, Hemoglobina glucosilada menor a 1%, glucosa postpandrial menor de 180 mg/dl y mantener su presión arterial en menos de 130/80 mmHg",
    },
    {
      lottie: exercise,
      question: "¿Usted fuma Tabaco?",
      answer: "awaiting",
      category: "smoking",
      answerForRecomendation: "yes",
      recomendation:
        "Es importante diseñar una estrategia personalizada para el paciente con el objetivo de que este deje de fumar o se reduzca el consumo de Tabaco.",
    },
  ];

  const [questionSelected, setQuestionSelected] = useState<number>(0);

  const [GenericQuestionsList, setGenericQuestionsList] =
    useState<GenericQuestionProps[]>(InitList);

  const AnimateQuestionTransition = (
    direction: "forward" | "backward" | "OutOfInit" | "InOfInit"
  ) => {
    if (direction === "OutOfInit") {
      anime({
        targets: ".GenericContainer",
        opacity: [1, 0],
        translateY: "-100%",
        duration: 1000,
        easing: "easeInOutExpo",
      });
    }
    if (direction === "InOfInit") {
      anime({
        targets: ".GenericContainer",
        opacity: [0, 1],
        translateY: "0%",
        duration: 1000,
        easing: "easeInOutExpo",
      });
    }
    if (direction === "forward") {
      if (questionSelected === GenericQuestionsList.length - 1) {
        anime({
          targets: "#GenericQuestion",
          opacity: [1, 0],
          translateY: "100%",
          duration: 1000,
          easing: "easeInOutExpo",
        });
      } else {
        const tl = anime.timeline({
          targets: "#NeuralinkHome",
          easing: "easeInOutQuad",
          duration: 600,
        });

        tl.add({
          opacity: [1, 0],
          translateX: ["0%", "-100%"],
        });

        tl.add({
          opacity: [0, 1],
          translateX: ["100%", "0%"],
        });
      }
      setTimeout(() => {
        setQuestionSelected((prevQuestionSelected) =>
          prevQuestionSelected === GenericQuestionsList.length - 1
            ? prevQuestionSelected
            : prevQuestionSelected + 1
        );
      }, 600);
    }
    if (direction === "backward") {
      if (questionSelected === 0) {
        anime({
          targets: ".GenericContainer",
          opacity: [0, 1],
          translateY: "0%",
          duration: 1000,
          easing: "easeInOutExpo",
        });
      } else {
        const tl = anime.timeline({
          targets: "#NeuralinkHome",
          easing: "easeInOutQuad",
          duration: 600,
        });

        tl.add({
          opacity: [1, 0],
          translateX: ["0%", "100%"],
        });

        tl.add({
          opacity: [0, 1],
          translateX: ["-100%", "0%"],
        });
      }

      setTimeout(() => {
        setQuestionSelected((prevQuestionSelected) =>
          prevQuestionSelected !== 0
            ? prevQuestionSelected - 1
            : prevQuestionSelected
        );
      }, 600);
    }
  };

  useEffect(() => {
    anime({
      targets: "#NeuralinkHome",
      opacity: [0, 1],
      duration: 1500,
      easing: "linear",
    });
  }, []);

  useEffect(() => {
    const HandleRouteToFollowOfQuestion = (
      index: number,
      shortPathAnswer: "yes" | "no"
    ) => {
      const QuestionAnswer = GenericQuestionsList[index].answer;
      const QuestionCategory = GenericQuestionsList[index].category;
      if (QuestionAnswer === shortPathAnswer) {
        setGenericQuestionsList((prevQuestionList) => {
          const removedList = prevQuestionList.filter((question, index2) => {
            if (index2 <= index) return question;
            else if (index >= index && question.category !== QuestionCategory)
              return question;
          });

          console.log("removedList", removedList);
          return removedList;
        });
      } else {
        const restoredList = InitList.map((question) => {
          let newList = question;

          GenericQuestionsList.forEach((question2) => {
            if (question.question === question2.question) {
              newList.answer = question2.answer;
            }
          });

          return newList;
        });

        console.log("restoredList", restoredList);
        setGenericQuestionsList(restoredList);
      }
    };

    if (questionSelected !== 0) {
      if (
        GenericQuestionsList[questionSelected - 1].question ===
        "¿Padece usted de Hipertensión?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
      if (
        GenericQuestionsList[questionSelected - 1].question ===
        "¿Toma usted medicamentos para dicha Hipertensión?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
      if (
        GenericQuestionsList[questionSelected - 1].question ===
        "¿Tiene usted sobrepeso u obesidad?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
      if (
        GenericQuestionsList[questionSelected - 1].question ===
        "¿Toma medicamentos para bajar de peso?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
      if (
        GenericQuestionsList[questionSelected - 1].question ===
        "¿Se le ha diagnósticado el síndrome de apnea obstructiva del sueño?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
      if (
        GenericQuestionsList[questionSelected - 1].question ===
        "¿La han dado algun tratamiento para su apnea del sueño?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
      if (
        GenericQuestionsList[questionSelected - 1].question ===
        "¿Tiene usted Diabetes?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
      if (
        GenericQuestionsList[questionSelected - 1].question ===
        "¿Toma Medicamentos para la Diabetes?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
    }
  }, [questionSelected]);

  return (
    <section id="NeuralinkHome">
      <Recomendations questionsList={GenericQuestionsList} />

      <div className="GenericContainer">
        <div className="RightBox">
          <h1>Cuestionario de Salud</h1>
          <p>
            Contesta las siguientes preguntas para ayudarnos a saber un poco más
            acerca de tu estado de salud
          </p>
          <div className="buttonContainer">
            <Button
              onClick={() => AnimateQuestionTransition("OutOfInit")}
              colorScheme="whiteAlpha"
              size="lg"
              style={{ height: "100px" }}
            >
              Empezar el Cuestionario
            </Button>
          </div>
        </div>
        <div className="LeftBox">
          <div className="lottieContainer">
            <LottieAnimation />
          </div>
        </div>
      </div>
      <GenericQuestion
        lottie={GenericQuestionsList[questionSelected].lottie}
        question={GenericQuestionsList[questionSelected].question}
        index={questionSelected}
        transitionFunc={AnimateQuestionTransition}
        setQuestionsList={setGenericQuestionsList}
      />
    </section>
  );
};

export default NeuralinkHome;
