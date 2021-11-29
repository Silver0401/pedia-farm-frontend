import React, { useEffect, useState } from "react";
import ela1 from "../../assets/ela1.png";

interface drawer {
  state: "open" | "closed";
}

const RetosPage: React.FC = () => {
  const [drawerTracker, setDrawerTracker] = useState<Array<drawer>>([]);
  const drawersCreatedList: Array<drawer> = [];

  const createSection = (
    title: string,
    id: number,
    content: string,
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
          // <iframe width="560" height="315" src= title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          <p>{content}</p>

          <div className="visualsBox">
            {VisualstList.map((visual) => {
              return visual;
            })}
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setDrawerTracker(drawersCreatedList);
  }, []);

  return (
    <div className="RetosPage">
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
          "Seccion 1",
          0,
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, hic? Nulla autem iure tenetur laudantium necessitatibus. Nesciunt aliquam ea ex. Fuga quisquam odit inventore quis laudantium aut quam placeat soluta?",
          ["https://www.youtube.com/embed/HDsBQJhIRZc", ela1]
        )}
        {createSection("Seccion 2", 1, "data", [
          "https://www.youtube.com/embed/HDsBQJhIRZc",
          ela1,
        ])}
        {createSection("Seccion 3", 2, "data", [
          "https://www.youtube.com/embed/HDsBQJhIRZc",
          ela1,
        ])}
      </div>
    </div>
  );
};

export default RetosPage;
