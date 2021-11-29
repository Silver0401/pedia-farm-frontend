import React, { useState } from "react";

interface symptom {
  title: string;
  description: string;
  img: string;
}

const symptomsDataList = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus doloremque veniam quia dolore sequi neque rerum nesciunt, saepe in ipsam! Facilis doloribus error ad harum quaerat at perspiciatis saepe?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus doloremque veniam quia dolore sequi neque rerum nesciunt, saepe in ipsam! Facilis doloribus error ad harum quaerat at perspiciatis saepe?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus doloremque veniam quia dolore sequi neque rerum nesciunt, saepe in ipsam! Facilis doloribus error ad harum quaerat at perspiciatis saepe?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, delectus doloremque veniam quia dolore sequi neque rerum nesciunt, saepe in ipsam! Facilis doloribus error ad harum quaerat at perspiciatis saepe?",
];
const symptomsPathList = [
  "M15.131 5s1.692 2.025 2.268 2.711c1.213 1.461 1.573 2.31 1.601 4.161v10.128c-.015 1.094-.859 1.961-1.925 1.999-3.368.043-6.736.043-10.104 0-1.073-.038-1.964-.917-1.971-1.999v-10.134c.009-2.04.587-2.921 1.948-4.508.591-.689 1.941-2.358 1.941-2.358h6.242zm1.869 15h-10v2h10v-2zm-4-7h-2v2h-2v2h2v2h2v-2h2.023l-.023-2h-2v-2zm1.245-6h-4.457c-.634.787-1.224 1.522-1.489 1.857-1.026 1.3-1.293 1.807-1.299 3.143h10c-.013-1.346-.184-1.757-1.137-3.008-.268-.353-.929-1.157-1.618-1.992zm1.755-3h-8v-3c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v3z",
  "M17.5 10c3.587 0 6.5 2.913 6.5 6.5s-2.913 6.5-6.5 6.5-6.5-2.913-6.5-6.5 2.913-6.5 6.5-6.5zm-7.802 9.864l-.363.635c-1.381 2.391-4.443 3.211-6.834 1.831-2.391-1.381-3.211-4.443-1.831-6.834l6.868-11.995c.925-1.602 2.606-2.499 4.333-2.501.85-.001 1.712.215 2.501.67 2.245 1.297 3.106 4.076 2.058 6.39-.979.125-1.906.416-2.753.844l.793-1.401c.828-1.434.336-3.272-1.099-4.1-1.434-.828-3.272-.336-4.1 1.099l-2.866 5.063 3.975 2.295c-.363.557-.663 1.16-.889 1.797l-4.086-2.359-3.002 5.199c-.828 1.434-.336 3.272 1.099 4.1 1.434.828 3.272.336 4.1-1.099l1.42-2.459c.063.998.298 1.949.676 2.825zm10.882-6.644l-4.381 7.589c.412.124.849.191 1.301.191 2.484 0 4.5-2.016 4.5-4.5 0-1.293-.546-2.459-1.42-3.28zm-1.725-1.012c-.428-.135-.883-.208-1.355-.208-2.484 0-4.5 2.016-4.5 4.5 0 1.313.563 2.495 1.461 3.318l4.394-7.61z",
  "M12 0c-3.371 2.866-5.485 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 6.5c3.036 0 5.5 2.464 5.5 5.5s-2.464 5.5-5.5 5.5-5.5-2.464-5.5-5.5 2.464-5.5 5.5-5.5zm1 2.5v2h2v2h-2v2h-2v-2h-2v-2h2v-2h2z",
  "M22 6c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h5v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h5zm0 2.5c0-.276-.224-.5-.5-.5h-19c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h19c.276 0 .5-.224.5-.5v-11zm-9 4.5h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3zm1.5-9h-5c-.276 0-.5.224-.5.5v1.5h6v-1.5c0-.276-.224-.5-.5-.5",
];

const InfoBlock2: React.FC = () => {
  const [symptomDisplayed, setSymptomDisplayed] = useState<symptom>({
    title: "symptom 1",
    description: symptomsDataList[0],
    img: symptomsPathList[0],
  });

  const createSymptom = (name: string, data: string, svgPath: string) => {
    return (
      <div
        className="symptom"
        onClick={() => {
          setSymptomDisplayed({
            title: name,
            description: data,
            img: svgPath,
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
            "Debilidad muscular en manos o pies ",
            symptomsDataList[0],
            symptomsPathList[0]
          )}
          {createSymptom(
            "Calambres y espasmos musculares",
            symptomsDataList[1],
            symptomsPathList[1]
          )}
          {createSymptom(
            "Dificultad para hablar",
            symptomsDataList[2],
            symptomsPathList[2]
          )}
          {createSymptom(
            "Dificultad y torpeza para moverse",
            symptomsDataList[3],
            symptomsPathList[3]
          )}
          {createSymptom(
            "Tropezones y caídas frecuentes",
            symptomsDataList[3],
            symptomsPathList[3]
          )}
          {createSymptom(
            "Dificultad para realizar actividades cotidianas",
            symptomsDataList[3],
            symptomsPathList[3]
          )}
          {createSymptom(
            "Dificultad para tragar",
            symptomsDataList[3],
            symptomsPathList[3]
          )}
          {createSymptom(
            "Cambios en el comportamiento",
            symptomsDataList[3],
            symptomsPathList[3]
          )}
          {createSymptom(
            "Problemas respiratorios",
            symptomsDataList[3],
            symptomsPathList[3]
          )}
          {createSymptom(
            "Problemas de alimentación",
            symptomsDataList[3],
            symptomsPathList[3]
          )}
          {createSymptom("Demencia", symptomsDataList[3], symptomsPathList[3])}
        </div>
        <div className="symptomsInfo">
          <h1>{symptomDisplayed?.title}</h1>
          <p>{symptomDisplayed?.description}</p>

          <div className="imgContainer">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d={symptomDisplayed?.img} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock2;
