import { AlertDescription } from "@chakra-ui/alert";
import React, { useState } from "react";

import img1 from "../../assets/Elalink/debilidadMusc.jpeg";
import img2 from "../../assets/Elalink/calambre.jpeg";
import img3 from "../../assets/Elalink/dificultadhablar.jpeg";
import img4 from "../../assets/Elalink/torpeza.jpeg";
import img5 from "../../assets/Elalink/caida.jpeg";
import img6 from "../../assets/Elalink/cotidianas.jpeg";
import img7 from "../../assets/Elalink/dificultadTragar.jpeg";
import img8 from "../../assets/Elalink/comportamiento.jpeg";
import img9 from "../../assets/Elalink/respiratorios.jpeg";
import img10 from "../../assets/Elalink/alimentacion.jpeg";
import img11 from "../../assets/Elalink/demencia.jpeg";

type risk = "alto" | "medio" | "bajo";

interface symptom {
  title: string;
  description: string;
  img: string;
  risk: risk;
}

const symptomsDataList = [
  "falta de fuerza física o muscular y es la sensación de que se requiere un esfuerzo adicional para mover los brazos, las piernas u otros músculos.",
  "Contracciones involuntarias de un músculo, generalmente, inofensivas y temporales, pero que pueden ser dolorosas.",
  "Es una enfermedad que impide que te comuniques. Puede afectar tu capacidad de hablar, escribir y comprender el lenguaje tanto verbal como escrito.",
  "El movimiento descoordinado se debe a un problema con el control muscular que ocasiona una incapacidad para coordinar los movimientos. ",
  "Pueden provocar lesiones, algunas de ellas mortales como fracturas de columna, cadera y golpes en la cabeza.",
  "La persona ya no es capaz, o le cuesta mucho trabajo hacer las actividad diarias que cotidianamente realizada en un pasado. ",
  "La dificultad para tragar se llama disfagia. Significa tener problemas con el descenso de alimentos o líquidos por la garganta.",
  "Hay cambios que pueden afectar la memoria, el estado de ánimo y el comportamiento de la persona",
  "Los problemas respiratorios se producen cuando el cuerpo es incapaz de adquirir el oxígeno que necesita.",
  "Afectación de la seguridad como de la eficacia de la deglución. En algunos casos el primer signo de disfagia es la pérdida progresiva de peso, pero lo más frecuente es que el paciente refiera episodios de atragantamiento y cambios en la voz después de comer.",
  "Deterioro grave de la capacidad mental que interfiere con la vida cotidiana. La pérdida de memoria es un ejemplo.",
];
const symptomsPathList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const InfoBlock2: React.FC = () => {
  const [symptomDisplayed, setSymptomDisplayed] = useState<symptom>({
    title: "Debilidad muscular en manos o pies",
    description:
      "falta de fuerza física o muscular y es la sensación de que se requiere un esfuerzo adicional para mover los brazos, las piernas u otros músculos.",
    img: symptomsPathList[0],
    risk: "bajo",
  });

  const createSymptom = (
    name: string,
    data: string,
    img: string,
    riesgo: risk
  ) => {
    return (
      <div
        className="symptom"
        onClick={() => {
          setSymptomDisplayed({
            title: name,
            img: img,
            description: data,
            risk: riesgo,
          });
        }}
      >
        <p>{name}</p>
      </div>
    );
  };

  return (
    <section id="InfoBlock2">
      <div className="blockContainer">
        <div className="symptomsList">
          <h1>Síntomas de ELA</h1>
          {createSymptom(
            "Debilidad muscular en manos o pies",
            symptomsDataList[0],
            symptomsPathList[0],
            "bajo"
          )}
          {createSymptom(
            "Calambres y espasmos musculares",
            symptomsDataList[1],
            symptomsPathList[1],
            "bajo"
          )}
          {createSymptom(
            "Dificultad para hablar",
            symptomsDataList[2],
            symptomsPathList[2],
            "bajo"
          )}
          {createSymptom(
            "Dificultad y torpeza para moverse",
            symptomsDataList[3],
            symptomsPathList[3],
            "bajo"
          )}
          {createSymptom(
            "Tropezones y caídas frecuentes",
            symptomsDataList[4],
            symptomsPathList[4],
            "bajo"
          )}
          {createSymptom(
            "Dificultad para realizar actividades cotidianas",
            symptomsDataList[5],
            symptomsPathList[5],
            "medio"
          )}
          {createSymptom(
            "Dificultad para tragar",
            symptomsDataList[6],
            symptomsPathList[6],
            "medio"
          )}
          {createSymptom(
            "Cambios en el comportamiento",
            symptomsDataList[7],
            symptomsPathList[7],
            "medio"
          )}
          {createSymptom(
            "Problemas respiratorios",
            symptomsDataList[8],
            symptomsPathList[8],
            "alto"
          )}
          {createSymptom(
            "Problemas de alimentación",
            symptomsDataList[9],
            symptomsPathList[9],
            "alto"
          )}
          {createSymptom(
            "Demencia",
            symptomsDataList[10],
            symptomsPathList[10],
            "alto"
          )}
        </div>
        <div className="symptomsInfo">
          <div className="headerColors">
            <div className="box">
              <div className="ball" style={{ backgroundColor: "red" }} />
              <p>Síntoma muy grave</p>
            </div>
            <div className="box">
              <div className="ball" style={{ backgroundColor: "yellow" }} />
              <p>Síntoma medio grave</p>
            </div>
            <div className="box">
              <div className="ball" style={{ backgroundColor: "lightgreen" }} />
              <p>Síntoma poco grave</p>
            </div>
          </div>

          <div className="symptomsDataBox">
            <h1>{symptomDisplayed?.title}</h1>
            <p>{symptomDisplayed?.description}</p>

            <div
              className="colorBallShifter"
              style={{
                backgroundColor: `${
                  symptomDisplayed?.risk === "alto"
                    ? "red"
                    : symptomDisplayed?.risk === "medio"
                    ? "yellow"
                    : "lightgreen"
                }`,
              }}
            />

            <div className="imgContainer">
              <img alt="coso" src={symptomDisplayed?.img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock2;
