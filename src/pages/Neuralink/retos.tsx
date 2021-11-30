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
            para dichas problemáticas:{" "}
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
          Cuidar a pacientes con ELA, no es un trabajo fácil, por lo cual
          decidimos incluir esta sección con información de posible ayuda, en
          cuanto a las dificultades que se pueden encontrar cuidando a personas
          con esta patología, así como tips para resolver dichas problemáticas
        </p>
      </div>

      <div className="sectionsBox">
        {createSection(
          "1. Afrontamiento",
          0,
          [
            "Puede ser difícil para el paciente y la familia afrontarse a un diagnóstico como éste, aceptar las limitaciones y pronóstico del paciente podría incluso requerir de ayuda profesional. Una forma eficiente de mejorar el afrontamiento del paciente es reconocer sus capacidades y permitirle involucrarse en sus cuidados, así como garantizarles un buen tratamiento para cualquier malestar físico o psicológico.",
            "El acercamiento a personas en situaciones similares o grupos de apoyo puede ser de gran ayuda.",
          ],
          [],
          ["https://www.youtube.com/embed/C_XCqbtiVnI"]
        )}
        {createSection(
          "2. Respiración",
          1,
          [
            "La evolución de esta enfermedad implica la atrofia gradual de músculos de la respiración. Los síntomas de insuficiencia respiratoria (cuando los pulmones no oxigenan correctamente la sangre) pueden pasar desapercibidos para el cuidador, por lo que se recomienda realizar pruebas de función respiratoria con frecuencia.",
            "La participación del cuidador puede ser de gran ayuda para evitar la fatiga de los músculos respiratorios garantizando un aporte calórico adecuado, y fomentando la realización de ejercicios de respiración y el uso de un inspirómetro incentivo en caso de que estos hayan sido indicados por su médico.",
            "Es frecuente que el paciente presente dificultad para expulsar secreciones, en estos casos es recomendable la fisioterapia.",
            "Se puede prevenir la aparición de enfermedades respiratorias teniendo al corriente la administración de las vacunas antineumocócica y antigripal.",
            "La dificultad para respirar puede desencadenar intolerancia a la actividad, esto significa que puede cansarse con facilidad al realizar ciertas actividades. La correcta nutrición, sueño y reposo del paciente son factores clave para mejorar el nivel de actividad que podrá tolerar el paciente. ",
          ],
          [
            "No fumar, evitar ambientes contaminados",
            "Las prendas ajustadas dificultan la respiración por lo que es mejor evitarlas",
            "Mantener al paciente en una posición semisentada con el soporte de varias almohadas para facilitar su respiración",
            "Reconocer signos de insuficiencia respiratoria",
            "Programar las actividades a realizar y establecer descansos entre ellas",
            "Utilizar técnicas que le faciliten las actividades diarias",
            "Un fisioterapeuta puede indicar una rutina de ejercicios para mejorar la movilidad del paciente y fortalecer sus músculos",
          ],
          []
        )}
        {createSection(
          "3. Nutrición",
          2,
          [
            "Desde las primeras etapas de la enfermedad el paciente puede manifestar dificultad para tragar alimentos, puede presentarse tos o fatiga al comer, atragantamientos o regurgitación de líquido por la nariz. Existen ciertas medidas que facilitan el consumo de alimentos en los pacientes con ELA. ",
          ],
          [
            "Consultar a un profesional en nutrición para diseñar una dieta que cubra las necesidades del paciente",
            "Se sugiere que el paciente utilice ropa holgada, sobre todo durante y después de ingerir alimentos",
            "El paciente debe consumir sus alimentos con calma y en compañía de otras personas",
            "Mantener una adecuada ingesta de líquidos (a menos que haya una contraindicación por parte de su médico)",
            "Conocer la maniobra Heimlich como precaución en casos de atragantamiento",
            "Mantener la posición de sentado al ingerir alimentos y por lo menos durante una hora después",
            "Al preparar los alimentos procurar no mezclar diferentes consistencias, deben tener una textura blanda",
            "Al paciente le resultará más sencillo tragar alimentos fríos",
            "Usar un popote o cuchara para la ingesta de líquidos",
          ],
          ["https://www.youtube.com/embed/HDsBQJhIRZc"]
        )}
        {createSection(
          "4. Eliminación de Desechos",
          3,
          [
            "La esclerosis lateral amiotrófica no afecta los esfínteres, por lo que el paciente aún posee control sobre la eliminación de desechos.",
            "Es frecuente la presencia de estreñimiento en este tipo de pacientes, es importante tratarlo si ocurre con frecuencia ya que el esfuerzo necesario para evacuar puede fatigar al paciente e incluso alterar su respiración.",
          ],
          [
            "Acudir con un profesional en nutrición que pueda indicar una dieta rica en fibra",
            "Mantener un consumo de agua mínimo de 2 litros al día a menos que exista una contraindicacion",
            "Establecer una rutina diaria de ejercicios con ayuda de un fisioterapeuta",
            "Mantener un horario para la evacuación",
            "Evitar el uso de laxantes, supositorios o enemas sin consultar previamente a su médico",
          ],
          []
        )}
        {createSection(
          "5. Actividad y Reposo",
          4,
          [
            "A pesar del inevitable avance de la enfermedad es importante mantener el mayor tiempo posible la autonomía del paciente, motivándolo a realizar lo mejor posible sus actividades diarias y adaptando el uso de herramientas o brindando la ayuda necesaria cuando ya no le sea posible realizarlas por cuenta propia.",
            "Si el paciente se encuentra en cama es propenso al desarrollo de úlceras cutáneas por presión, por lo que es fundamental implementar cuidados para prevenir el daño a la piel.",
          ],
          [
            "Mantener al paciente en una buena postura todo el tiempo posible",
            "Evitar esfuerzos innecesarios, alternar las actividades con periodos de descanso",
            "Implementación de materiales de apoyo para el movimiento como bastón, muletas, andadera o silla de ruedas",
            "Realizar los ejercicios indicados por el fisioterapeuta",
            "Movilizar al paciente de forma adecuada",
            "Revisar diariamente el estado de la piel",
            "Disminuir la presión en los puntos de apoyo con el uso de almohadillas",
            "Realizar el aseo diario con agua tibia y jabón neutro, secar correctamente y evitar frotar",
            "Mantener hidratada la piel",
            "Establecer un horario de sueño",
            "Vaciar vejiga e intestino antes de dormir",
            "Crear un ambiente tranquilo en el que el paciente se encuentre relajado",
            "No consumir bebidas o alimentos con cafeína previo a intentar dormir",
            "Mantenerlo en una posición cómoda",
          ],
          []
        )}
        {createSection(
          "6. Comunicación",
          5,
          [
            "Es recomendable acudir a un terapeuta del lenguaje (logopeda) desde la aparición de los primeros signos de dificultad para hablar o comer. Otro punto importante a recordar es que a pesar de la pérdida de comunicación por parte del paciente, él o ella sigue siendo capaz de comprender lo que se le dice y lo que sucede a su alrededor, por ello es imprescindible siempre mantener la comunicación con ellos a pesar de no obtener una respuesta.",
          ],
          [
            "Explicar al paciente sobre cualquier procedimiento que le será realizado",
            "Mientras sea posible es ideal incentivar al paciente a hablar",
            "Escuchar con atención al paciente, mantener una comunicación con él o ella",
            "Si el padecimiento ya no permite la comunicación verbal, buscar alternativas que se adapten a sus necesidades como gestos, miradas, escritura, etc.",
          ],
          []
        )}
      </div>
    </div>
  );
};

export default RetosPage;
