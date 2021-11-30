import React, { useEffect, useState } from "react";
import ela1 from "../../assets/ela1.png";
import sentidos from "../../assets/sentidos.jpeg";
import flecha from "../../assets/flecha.png";

interface cardData {
  cardState: "front" | "back";
}

const card1Data = [
  "Estás siglas se refieren a la enfermedad de Esclerosis Lateral Amiotrófica pero se le puede conocer con otros nombres como Enfermedad de Motoneurona o Enfermedad de Lou Gehrig, en honor a un jugador de Béisbol (imágen al final de la carta).",
  "Esta es una enfermedad que se agrava (*o agudiza no se cual se escucha menos rimbombante) con el tiempo y que ocasiona debilidad muscular, lo que da pie a la aparición de afecciones que se describen más adelante como lo es la dificultad para moverse.",
];
const card2Data = [
  "Esta enfermedad provoca la pérdida de neuronas motoras (ver anexo 1) en el sistema nervioso central (SNC) (ver anexo 2), por lo que se afecta la movilidad, más no la sensibilidad por lo que la persona no perderá la vista, olfato, gusto, oído o tacto",
  "Actualmente no se conoce con exactitud los causantes de la enfermedad, sin embargo puede ser familiar (ELAf) o esporádica (ELAe)",
  "En la ELAf, la enfermedad se manifiesta en la familia y puede ser heredada por lo que la causa es genética.",
  "En la ELAe, que es la forma más común en la que se presenta la enfermedad, esta aparece de manera imprevisible, sin antecedentes de la enfermedad dentro de la familia.",
  "El ambiente también influye en el desarrollo de la enfermedad como la continua exposición a situaciones de estrés o daño, por alteraciones de la inmunidad, exposición a tóxicos, virus o bacterias.",
];
const card3Data = [
  "El diagnóstico es principalmente basado en las manifestaciones signos y que van presentando las personas en las diferentes etapas de esta patología; existen signos iniciales y tardíos.",
  "En la siguiente sección los veremos con más detalle.",
];

const InfoBlock1: React.FC = () => {
  const [cardTracker, setCardTracker] = useState<Array<cardData>>([]);
  const cardList: Array<cardData> = [];

  const CreateCard = (
    question: string,
    classname: string,
    data: Array<string>,
    path: string,
    cardID: number,
    visual: string
  ) => {
    cardList.push({
      cardState: "front",
    });

    return (
      <div
        onClick={() => {
          const updatedArray = [...cardTracker];
          updatedArray[cardID] = {
            cardState:
              cardTracker[cardID].cardState === "front" ? "back" : "front",
          };
          setCardTracker(updatedArray);
        }}
        className={`card ${classname} ${
          cardTracker[cardID]?.cardState === "front" ? "front" : "back"
        }`}
      >
        <div className="infoBox">
          <h2>{question}</h2>
          {data.map((sentence) => {
            return <p>{sentence}</p>;
          })}

          <img alt={question} src={visual} />
        </div>
        <div className="svgBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d={path} />
          </svg>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setCardTracker(cardList);
  }, []);

  return (
    <section id="InfoBlock1">
      {CreateCard(
        "¿Qué es ELA?",
        "quees",
        card1Data,
        "M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z",
        0,
        ela1
      )}
      {CreateCard(
        "¿Qué Provoca?",
        "queprovoca",
        card2Data,
        "M22.971 17.322l-.721.72c-.322.322-.846.322-1.168 0l-1.568-1.568-2.005 2.005 1.568 1.568c.322.322.323.845 0 1.168l-.721.72 1.031 1.065 4.613-4.649-1.029-1.029zm-16.38-10.567l-5.591-5.755h2.581l4.436 4.372c.914-.692 2.303-1.458 3.388-1.45l7.632 7.632c.324.323.846.323 1.169 0l.601-.6 1.405 1.405-8.64 8.641-1.406-1.405.602-.601c.322-.323.322-.846 0-1.169l-7.634-7.633c-.008-1.085.764-2.523 1.457-3.437zm7.433 9.492l.703.704 3.44-3.441-3.951-3.951-3.44 3.441 1.141 1.141 1.669-1.671.694.693-1.67 1.671.721.72 1.669-1.67.694.693-1.67 1.67zm-12.305-12.691c1.046 1.56 1.717 2.536 1.717 3.485 0 .949-.768 1.718-1.717 1.718-.95 0-1.719-.769-1.719-1.718s.673-1.925 1.719-3.485z",
        1,
        sentidos
      )}
      {CreateCard(
        "¿Cómo se diagnostica?",
        "diagnostico",
        card3Data,
        "M13.7 4.054c-.354.568-.982.946-1.7.946-1.104 0-2-.896-2-2s.896-2 2-2c.759 0 1.42.424 1.759 1.047 2.59.295 4.386 1.786 4.233 4.239-.185 2.859-3.294 7.619-6.001 9.69-.097 1.073-.709 2.232-1.794 2.908.993 1.609 2.536 2.285 4.218 2.087 1.629-.191 3.144-1.366 3.96-2.693-.836-.641-1.375-1.647-1.375-2.778 0-1.932 1.568-3.501 3.5-3.501 1.931 0 3.5 1.569 3.5 3.501 0 1.936-1.597 3.601-3.728 3.491-1.155 2.132-3.601 4.009-6.352 4.009-2.713 0-4.791-1.497-5.92-4.001-1.053-.631-1.829-1.937-1.985-3.029-2.775-2.138-6.015-7.171-6.015-9.963 0-2.382 1.875-3.682 4.24-3.957.338-.625 1-1.05 1.76-1.05 1.104 0 2 .896 2 2s-.896 2-2 2c-.715 0-1.343-.376-1.696-.941-2.05.299-2.552 1.287-2.19 2.732.633 2.567 3.605 6.868 5.908 8.121.757.416 1.193.421 1.96.002 2.726-1.483 5.981-6.697 6.018-8.858.022-1.288-1.029-1.821-2.3-2.002m6.8 12.946c-.828 0-1.5-.674-1.5-1.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .826-.672 1.5-1.5 1.5",
        2,
        flecha
      )}
    </section>
  );
};

export default InfoBlock1;
