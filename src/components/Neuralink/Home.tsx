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
import blood from "../../assets/Lotties/blood.json";
import blood2 from "../../assets/Lotties/blood2.json";
import meds from "../../assets/Lotties/meds.json";
import smoke from "../../assets/Lotties/smoke.json";
import weight from "../../assets/Lotties/weight.json";
import hipertension from "../../assets/Lotties/hipertension.json";

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
      lottie: hipertension,
      question: "¿Padece usted de presión alta?",
      answer: "awaiting",
      category: "hipertension",
      answerForRecomendation: "yes",
      recomendation:
        "El Paciente menciona tener hipertension, se recomienda: \n-Calcular IMC (Controlar peso) \n-Ejercicio: Adultos a la semana por lo menos 2 horas y 30 min (es decir 30 min por 5 días a un nivel moderado- intenso), y en adolescentes 1 hora diaria \n -Evitar fumar y tomar alcohol (hombres deberán de tomar menos de 2 copas diarias y mujeres 1) \n -Dieta DASH",
    },
    {
      lottie: meds,
      question: "¿Toma usted medicamentos para dicha presión alta?",
      answer: "awaiting",
      category: "hipertension",
      answerForRecomendation: "no",
      recomendation:
        "El paciente no toma medicamentos para la hipertensión, se recomienda:  \n-Empezar con un tratamiento farmacológico con el objetivo de estabilizar la presión sistólica del paciente por debajo de 140/90 mmHg \n-Utilizar medicamentos como: \nHidroclorotiazida \nEnalapril \nCaptopril \nClortalidona",
    },
    {
      lottie: smoke,
      question: "¿Usted fuma Tabaco?",
      answer: "awaiting",
      category: "smoking",
      answerForRecomendation: "yes",
      recomendation:
        "El paciente menciona fumar tabaco. Promover el cese del tabaquismo (usar las 5 A’s de la US Preventive Services Task Force (USPSTF)) \n -Ask about smoking habits \n -Advise to quit \n-Assess willingness to quit \n-Assist in quitting \n-Arrange follow-up and support. \nLas intervenciones conductuales que resultaron eficaces para ayudar a los adultos a dejar de fumar incluyen asesoramiento en persona, asesoramiento telefónico y materiales de autoayuda. Estas intervenciones pueden aumentar las tasas de abandono del hábito de fumar desde un valor inicial del 5 % al 11 % en los grupos de control al 7 % al 13 % en los grupos de intervención. \nLas intervenciones de farmacoterapia aprobadas por la FDA para el tratamiento de la dependencia del tabaco en adultos incluyen bupropion SR, vareniclina y NRT (terapia de reemplazo de nicotina)",
    },
    {
      lottie: exercise,
      question: "¿Hace ejercicio al menos 40 minutos diariamente?",
      answer: "awaiting",
      category: "sedentarismo",
      answerForRecomendation: "no",
      recomendation:
        "El paciente tiene un estilo de vida sedentario, se recomienda: realizar de 150 a 300 minutos de ejercicio que sea de intensidad moderada o 75-150 minutos de ejercicio de intensidad vigorosa (se puede hacer una combinación de ejercicio aeróbico moderado y vigoroso) a la semana.",
    },
    {
      lottie: weight,
      question: "¿Tiene usted sobrepeso u obesidad?",
      answer: "awaiting",
      category: "obesity",
      answerForRecomendation: "yes",
      recomendation:
        "El paciente considera tener sobrepeso u obesidad, valorar veracidad con mediciones somatométricas y referir con un nutriólogo para crearle una dieta personalizada",
    },
    {
      lottie: meds,
      question: "¿Toma medicamentos para bajar de peso?",
      answer: "awaiting",
      category: "obesity",
      answerForRecomendation: "no",
      recomendation:
        "El paciente no utiliza medicamentos hipolipemiantes, dependiendo del examen fisico evaluar la posibilidad de a la par de cambios en la dieta y estilo de vida, recetarle dichos fármacos",
    },
    {
      lottie: blood,
      question: "¿Se le ha dicho que tiene el colesterol elevado?",
      answer: "awaiting",
      category: "dyslipidemia",
      answerForRecomendation: "yes",
      recomendation:
        "El paciente menciona tener una posible dislipidemia, recomendaciones: Concentraciones de colesterol entre 200 y 300 mg/dl generalmente son generadas por obesidad, fármacos, consumo excesivo de grasas saturadas y/o colesterol, entre otros factores. \n-En personas sin factores de riesgo a partir de los 20 años, se recomiendo realizar tamizaje para dislipidemia con perfil de lípidos: Colesterol total, HDL, LDL y calcular el C- No HDL (Colesterol total - colesterol HDL). \nSospechar de hipercolesterolemia familiar con niveles de C-LDL mayor a 190 mg/dl y al excluir causas secundarias de elevación de C-LDL",
    },
    {
      lottie: meds,
      question: "¿Toma Medicamentos para controlar el colesterol?",
      answer: "awaiting",
      category: "dyslipidemia",
      answerForRecomendation: "no",
      recomendation:
        "El paciente no toma medicamentos para dislipidemia se recomienda: Valorar la posibilidad si los rangos de LDL son mayores o igual a 100 mg/dl de iniciar tratamiento farmacológico donde se busque: \nAjustar dosis manteniendo LDL-C < 100 mg/dL \nUsar fármacos como: \nAtorvastatina \nBezafibrato \nPravastatina \nEzetimiba",
    },
    {
      lottie: blood2,
      question: "¿Tiene usted Diabetes?",
      answer: "awaiting",
      category: "diabetes",
      answerForRecomendation: "yes",
      recomendation:
        "Recalcar la importancia de mantener una dieta saludable y la realización de actividad \nSe ha demostrado que las dietas ricas en cereales integrales, frutas, verduras, legumbres, frutos secos, moderadas en el consumo de alcohol y bajas en cereales refinados, carnes rojas/procesadas y bebidas azucaradas reducen el riesgo de diabetes y mejoran el control glucémico y los lípidos en sangre de los pacientes con diabetes",
    },
    {
      lottie: meds,
      question: "¿Toma Medicamentos para la Diabetes?",
      answer: "awaiting",
      category: "diabetes",
      answerForRecomendation: "no",
      recomendation:
        "El paciente no toma medicamentos para la diabetes se recomienda: empezar con un tratamiento farmacológico en el cual busquemos como objetivos: \nGlucosa en ayuno: de 70 a 130 mg/dl \nHemoglobina glucosilada (HbA1c) menor al 7% \nGlucosa postprandial (90-120 minutos después de las comidas): menor de 180 mg/dl \nMantener cifras de presión arterial menor a 130/80 mmHg",
    },
    {
      lottie: sleep,
      question:
        "¿Tiene problemas durante el sueño? (Ej: roncar o sentir que te ahogas)",
      answer: "awaiting",
      category: "saos",
      answerForRecomendation: "yes",
      recomendation:
        "El paciente menciona tener problemas de sueño: Evaluar la posibilidad de que el paciente padezca síndrome de apnea obstructivo del sueño, para esto se recomienda hacer el test de SAOS",
    },

    {
      lottie: heart,
      question: "¿Se le ha diagnosticado algun problema del corazón?",
      answer: "awaiting",
      category: "fibrilaiton",
      answerForRecomendation: "no",
      recomendation:
        "El paciente no toma medicamentos para la diabetes se recomienda: empezar con un tratamiento farmacológico en el cual busquemos como objetivos: \nGlucosa en ayuno: de 70 a 130 mg/dl \nHemoglobina glucosilada (HbA1c) menor al 7% \nGlucosa postprandial (90-120 minutos después de las comidas): menor de 180 mg/dl \nMantener cifras de presión arterial menor a 130/80 mmHg",
    },
    {
      lottie: meds,
      question: "¿Toma Medicamentos para el Corazón?",
      answer: "awaiting",
      category: "fibrilaiton",
      answerForRecomendation: "no",
      recomendation:
        "El paciente menciona tener problemas cardiacos y no toma medicamentos, se recomienda: Evaluar la posibilidad de fibrilación auricular (u otras arritmias) no valvular, paroxística o permanente. \nEn caso de confirmar, se busca como objetivos: \nMantener un INR de 2.5 (rango entre 2.0 – 3.0) \n Usar fármacos como: \n-Antagonistas de la vitamina K \n-Apixaban \n-Dabigatran  \n-Rivaroxaban",
    },
    // {
    //   lottie: exercise,
    //   question: "Se siente mejor tomando estos medicamentos?",
    //   answer: "awaiting",
    //   category: "obesity",
    //   answerForRecomendation: "no",
    //   recomendation:
    //     "Los fármacos parecen no estar teniendo efectos significativamente positivo en el paciente. Evaluar la utilidad de estos y modificar el esquema farmacológico de ser necesario.",
    // },
    // {
    //   lottie: exercise,
    //   question:
    //     "¿Le han mencionado sus parientes que ronca al dormir o usted tiene problemas para dormir?",
    //   answer: "awaiting",
    //   category: "saos",
    // },
    // {
    //   lottie: exercise,
    //   question:
    //     "¿Se le ha diagnósticado el síndrome de apnea obstructiva del sueño?",
    //   answer: "awaiting",
    //   category: "saos",
    // },
    // {
    //   lottie: exercise,
    //   question: "¿La han dado algun tratamiento para su apnea del sueño?",
    //   answer: "awaiting",
    //   category: "saos",
    //   answerForRecomendation: "no",
    //   recomendation:
    //     "El paciente menciona tener SAOS sin tratamiento, verificar veracidad y severidad para recomendar un posible tratamiento",
    // },

    // {
    //   lottie: exercise,
    //   question: "¿Se siente mejor con dichos medicamentos?",
    //   answer: "awaiting",
    //   category: "diabetes",
    //   answerForRecomendation: "no",
    //   recomendation:
    //     "Posibilidad de tratamiento diabético ineficaz, analizar y evaluar la posibilidad de un cambio del esquema farmacológico del paciente, buscando obtener: Una glucosa en ayuno estable de 70 a 130mg/dl, Hemoglobina glucosilada menor a 1%, glucosa postpandrial menor de 180 mg/dl y mantener su presión arterial en menos de 130/80 mmHg",
    // },
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
        "¿Padece usted de presión alta?"
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
        "¿Se le ha dicho que tiene el colesterol elevado?"
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
        "¿Se le ha diagnosticado algun problema del corazón?"
      ) {
        HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      }
      // if (
      //   GenericQuestionsList[questionSelected - 1].question ===
      //   "¿Toma medicamentos para bajar de peso?"
      // ) {
      //   HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      // }
      // if (
      //   GenericQuestionsList[questionSelected - 1].question ===
      //   "¿Se le ha diagnósticado el síndrome de apnea obstructiva del sueño?"
      // ) {
      //   HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      // }
      // if (
      //   GenericQuestionsList[questionSelected - 1].question ===
      //   "¿La han dado algun tratamiento para su apnea del sueño?"
      // ) {
      //   HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      // }
      // if (
      //   GenericQuestionsList[questionSelected - 1].question ===
      //   "¿Tiene usted Diabetes?"
      // ) {
      //   HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      // }
      // if (
      //   GenericQuestionsList[questionSelected - 1].question ===
      //   "¿Toma Medicamentos para la Diabetes?"
      // ) {
      //   HandleRouteToFollowOfQuestion(questionSelected - 1, "no");
      // }
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
