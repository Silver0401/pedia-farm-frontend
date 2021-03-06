import React, { useEffect, useState } from "react";

interface drawer {
  state: "open" | "closed";
}

const RetosPage: React.FC = (props: any) => {
  const [drawerTracker, setDrawerTracker] = useState<Array<drawer>>([]);
  const drawersCreatedList: Array<drawer> = [];

  const createSection = (
    title: string,
    id: number,
    content: Array<string>,
    recommendations: Array<string>,
    visuals: Array<string>
  ) => {
    drawersCreatedList.push({
      state: "closed",
    });

    const VisualstList: Array<any> = [];

    visuals.forEach((visual) => {
      if (visual.includes("youtube")) {
        VisualstList.push(
          <iframe width="420" height="315" src={visual}></iframe>
        );
      } else {
        VisualstList.push(
          <div className="imgContainer">
            <img alt={`${title} resource`} src={visual} />
          </div>
        );
      }
    });

    return (
      <div className={`drawer ${drawerTracker[id]?.state}`}>
        <div
          className="headerBox"
          onClick={() => {
            const updatedTracker = [...drawerTracker];
            updatedTracker[id] = {
              state: drawerTracker[id].state === "closed" ? "open" : "closed",
            };
            setDrawerTracker(updatedTracker);
          }}
        >
          <h1>{title}</h1>

          <div className="svgBox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
            </svg>
          </div>
        </div>

        <div className="contentBox">
          {content.map((paragraph) => {
            return <p>{paragraph}</p>;
          })}

          <p>
            Tomando en cuenta lo anterior, estas son algunas recomendaciones
            para dichas problem??ticas:{" "}
          </p>

          <ul>
            {recommendations.map((recommendation) => {
              return <li>{recommendation}</li>;
            })}
          </ul>

          {visuals ? (
            <div className="visualsBox">
              {VisualstList.map((visual) => {
                return visual;
              })}
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  useEffect(() => {
    setDrawerTracker(drawersCreatedList);
  }, []);

  return (
    <div className="RetosPage">
      <div
        className="returnButton"
        onClick={() => props.history?.push("/Neuralink")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16 8v-4l8 8-8 8v-4h-8.929c-9.059 0-7.134-9.521-6.335-11.418.789 2.445 2.465 3.418 5.372 3.418h9.892z" />
        </svg>
      </div>

      <div className="titlesBox">
        <h1>Retos y Recursos para el cuidador</h1>
        <p>
          Cuidar a pacientes con ELA, no es un trabajo f??cil, por lo cual
          decidimos incluir esta secci??n con informaci??n de posible ayuda, en
          cuanto a las dificultades que se pueden encontrar cuidando a personas
          con esta patolog??a, as?? como tips para resolver dichas problem??ticas
        </p>
      </div>

      <div className="sectionsBox">
        {createSection(
          "1. Afrontamiento",
          0,
          [
            "Puede ser dif??cil para el paciente y la familia afrontarse a un diagn??stico como ??ste, aceptar las limitaciones y pron??stico del paciente podr??a incluso requerir de ayuda profesional. Una forma eficiente de mejorar el afrontamiento del paciente es reconocer sus capacidades y permitirle involucrarse en sus cuidados, as?? como garantizarles un buen tratamiento para cualquier malestar f??sico o psicol??gico.",
            "El acercamiento a personas en situaciones similares o grupos de apoyo puede ser de gran ayuda.",
          ],
          [],
          ["https://www.youtube.com/embed/C_XCqbtiVnI"]
        )}
        {createSection(
          "2. Respiraci??n",
          1,
          [
            "La evoluci??n de esta enfermedad implica la atrofia gradual de m??sculos de la respiraci??n. Los s??ntomas de insuficiencia respiratoria (cuando los pulmones no oxigenan correctamente la sangre) pueden pasar desapercibidos para el cuidador, por lo que se recomienda realizar pruebas de funci??n respiratoria con frecuencia.",
            "La participaci??n del cuidador puede ser de gran ayuda para evitar la fatiga de los m??sculos respiratorios garantizando un aporte cal??rico adecuado, y fomentando la realizaci??n de ejercicios de respiraci??n y el uso de un inspir??metro incentivo en caso de que estos hayan sido indicados por su m??dico.",
            "Es frecuente que el paciente presente dificultad para expulsar secreciones, en estos casos es recomendable la fisioterapia.",
            "Se puede prevenir la aparici??n de enfermedades respiratorias teniendo al corriente la administraci??n de las vacunas antineumoc??cica y antigripal.",
            "La dificultad para respirar puede desencadenar intolerancia a la actividad, esto significa que puede cansarse con facilidad al realizar ciertas actividades. La correcta nutrici??n, sue??o y reposo del paciente son factores clave para mejorar el nivel de actividad que podr?? tolerar el paciente. ",
          ],
          [
            "No fumar, evitar ambientes contaminados",
            "Las prendas ajustadas dificultan la respiraci??n por lo que es mejor evitarlas",
            "Mantener al paciente en una posici??n semisentada con el soporte de varias almohadas para facilitar su respiraci??n",
            "Reconocer signos de insuficiencia respiratoria",
            "Programar las actividades a realizar y establecer descansos entre ellas",
            "Utilizar t??cnicas que le faciliten las actividades diarias",
            "Un fisioterapeuta puede indicar una rutina de ejercicios para mejorar la movilidad del paciente y fortalecer sus m??sculos",
          ],
          []
        )}
        {createSection(
          "3. Nutrici??n",
          2,
          [
            "Desde las primeras etapas de la enfermedad el paciente puede manifestar dificultad para tragar alimentos, puede presentarse tos o fatiga al comer, atragantamientos o regurgitaci??n de l??quido por la nariz. Existen ciertas medidas que facilitan el consumo de alimentos en los pacientes con ELA. ",
          ],
          [
            "Consultar a un profesional en nutrici??n para dise??ar una dieta que cubra las necesidades del paciente",
            "Se sugiere que el paciente utilice ropa holgada, sobre todo durante y despu??s de ingerir alimentos",
            "El paciente debe consumir sus alimentos con calma y en compa????a de otras personas",
            "Mantener una adecuada ingesta de l??quidos (a menos que haya una contraindicaci??n por parte de su m??dico)",
            "Conocer la maniobra Heimlich como precauci??n en casos de atragantamiento",
            "Mantener la posici??n de sentado al ingerir alimentos y por lo menos durante una hora despu??s",
            "Al preparar los alimentos procurar no mezclar diferentes consistencias, deben tener una textura blanda",
            "Al paciente le resultar?? m??s sencillo tragar alimentos fr??os",
            "Usar un popote o cuchara para la ingesta de l??quidos",
          ],
          ["https://www.youtube.com/embed/HDsBQJhIRZc"]
        )}
        {createSection(
          "4. Eliminaci??n de Desechos",
          3,
          [
            "La esclerosis lateral amiotr??fica no afecta los esf??nteres, por lo que el paciente a??n posee control sobre la eliminaci??n de desechos.",
            "Es frecuente la presencia de estre??imiento en este tipo de pacientes, es importante tratarlo si ocurre con frecuencia ya que el esfuerzo necesario para evacuar puede fatigar al paciente e incluso alterar su respiraci??n.",
          ],
          [
            "Acudir con un profesional en nutrici??n que pueda indicar una dieta rica en fibra",
            "Mantener un consumo de agua m??nimo de 2 litros al d??a a menos que exista una contraindicacion",
            "Establecer una rutina diaria de ejercicios con ayuda de un fisioterapeuta",
            "Mantener un horario para la evacuaci??n",
            "Evitar el uso de laxantes, supositorios o enemas sin consultar previamente a su m??dico",
          ],
          []
        )}
        {createSection(
          "5. Actividad y Reposo",
          4,
          [
            "A pesar del inevitable avance de la enfermedad es importante mantener el mayor tiempo posible la autonom??a del paciente, motiv??ndolo a realizar lo mejor posible sus actividades diarias y adaptando el uso de herramientas o brindando la ayuda necesaria cuando ya no le sea posible realizarlas por cuenta propia.",
            "Si el paciente se encuentra en cama es propenso al desarrollo de ??lceras cut??neas por presi??n, por lo que es fundamental implementar cuidados para prevenir el da??o a la piel.",
          ],
          [
            "Mantener al paciente en una buena postura todo el tiempo posible",
            "Evitar esfuerzos innecesarios, alternar las actividades con periodos de descanso",
            "Implementaci??n de materiales de apoyo para el movimiento como bast??n, muletas, andadera o silla de ruedas",
            "Realizar los ejercicios indicados por el fisioterapeuta",
            "Movilizar al paciente de forma adecuada",
            "Revisar diariamente el estado de la piel",
            "Disminuir la presi??n en los puntos de apoyo con el uso de almohadillas",
            "Realizar el aseo diario con agua tibia y jab??n neutro, secar correctamente y evitar frotar",
            "Mantener hidratada la piel",
            "Establecer un horario de sue??o",
            "Vaciar vejiga e intestino antes de dormir",
            "Crear un ambiente tranquilo en el que el paciente se encuentre relajado",
            "No consumir bebidas o alimentos con cafe??na previo a intentar dormir",
            "Mantenerlo en una posici??n c??moda",
          ],
          []
        )}
        {createSection(
          "6. Comunicaci??n",
          5,
          [
            "Es recomendable acudir a un terapeuta del lenguaje (logopeda) desde la aparici??n de los primeros signos de dificultad para hablar o comer. Otro punto importante a recordar es que a pesar de la p??rdida de comunicaci??n por parte del paciente, ??l o ella sigue siendo capaz de comprender lo que se le dice y lo que sucede a su alrededor, por ello es imprescindible siempre mantener la comunicaci??n con ellos a pesar de no obtener una respuesta.",
          ],
          [
            "Explicar al paciente sobre cualquier procedimiento que le ser?? realizado",
            "Mientras sea posible es ideal incentivar al paciente a hablar",
            "Escuchar con atenci??n al paciente, mantener una comunicaci??n con ??l o ella",
            "Si el padecimiento ya no permite la comunicaci??n verbal, buscar alternativas que se adapten a sus necesidades como gestos, miradas, escritura, etc.",
          ],
          []
        )}
      </div>
    </div>
  );
};

export default RetosPage;
