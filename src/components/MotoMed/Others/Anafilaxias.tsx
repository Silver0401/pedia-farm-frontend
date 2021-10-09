import React from "react";
import ReturnButton from "./ReturnButton";
import Carousel from "./Carousel";

import AnaImg1 from "./../../../assets/Anafilaxia1.png";
import AnaImg2 from "./../../../assets/Anafilaxia2.png";
import AnaImg3 from "./../../../assets/Anafilaxia3.png";
import AnaImg4 from "./../../../assets/Anafilaxia4.png";

const Anafilaxias: React.FC = () => {
  const imageList = [
    {
      original: AnaImg4,
      thumbnail: "Alimentos Alergenos",
    },
    {
      original: AnaImg1,
      thumbnail: "Epi-pen",
    },
    {
      original: AnaImg2,
      thumbnail: "",
    },
    {
      original: AnaImg3,
      thumbnail: "",
    },
  ];

  return (
    <div className="AnafilaxiasPage">
      <ReturnButton />
      <div className="informationContainer">
        <h1>Anafilaxia</h1>
        <hr />
        <h2>Definición</h2>
        <p>
          La anafilaxia se define como una reacción alérgica grave en todo el
          cuerpo en respuesta a un químico que se ha convertido en alergeno. Se
          le conoce como alergeno a una sustancia que puede ocasionar una
          reacción alérgica. Cualquier alergeno es capaz de desatar una reacción
          anafiláctica. Las causas comunes incluyen:
        </p>

        <li>Alergias farmacológicas</li>
        <li>Alergias a alimentos</li>
        <li>Picaduras/mordeduras de insectos</li>

        <p>
          Los síntomas se desarrollan rápidamente, generalmente en cuestión de
          segundos o minutos. Pueden incluir cualquiera de los siguientes:
        </p>

        <h2>Signos y Síntomas</h2>
        <li>Dolor abdominal</li>
        <li>Sentirse ansioso</li>
        <li>Molestia u opresión en el pecho</li>
        <li>Diarrea</li>
        <li>
          Dificultad para respirar, tos, sibilancias o ruidos respiratorios
          agudos
        </li>
        <li>Dificultad para tragar</li>
        <li>Mareo o vértigo</li>
        <li>Urticaria, picazón, enrojecimiento de la piel</li>
        <li>Congestión nasal</li>
        <li>Náuseas y vómitos</li>
        <li>Palpitaciones</li>
        <li>Mala articulación del lenguaje</li>
        <li>Hinchazón de cara, ojos y lengua</li>
        <li>Pérdida del conocimiento</li>

        <h2>Puntos Esenciales</h2>
        <li>
          La anafilaxia es una reacción alérgica grave y peligrosamente mortal.
          La causa de muerte en niños es generalmente de un estado sin síntomas
          previos
        </li>
        <li>
          Fuera de un hospital, los alimentos se consideran la causa más
          frecuente de anafilaxia.
        </li>
        <li>
          Los niños con antecedente de alergia a alimentos son el principal
          grupo de riesgo para el desarrollo de anafilaxia.
        </li>
        <li>
          Los principales lugares donde ocurren los episodios anafilácticos son
          en el domicilio familiar y en la escuela
        </li>
        <li>
          La adrenalina se considera el tratamiento de elección y debe de ser
          administrada precozmente tras desencadenarse el episodio anafiláctico
        </li>
        <li>
          El retraso de la administración de adrenalina incrementa la
          probabilidad de muerte de la persona
        </li>
        <li>
          En los niños con factores de riesgo aumentados de desarrollar
          anafilaxia se les debe de identificar y plantear un plan de acción
          personalizado
        </li>
        <li>
          Dicho plan de acción debe de facilitar el reconocimiento y tratamiento
          de la anafilaxia en la escuela
        </li>

        <h2>Tratamiento</h2>
        <li>
          ADMINISTRAR AUTOINYECTOR DE ADRENALINA RÁPIDAMENTE. las imágenes a la
          derecha muestran la manera correcta de la aplicar un autoinyector de
          adrenalina. Se puede repetir la dosis a los 10 minutos. Es esencial
          que el niño esté tumbado con las piernas elevadas. En el caso de
          presentar dificultad respiratoria considerable, puede estar
          semiincorporado
        </li>
        <li>
          LLAMAR AL SERVICIO DE EMERGENCIA PARA EL TRASLADO HOSPITALARIO POR
          ANAFILAXIA y AVISAR A LOS PADRES
        </li>
      </div>
      <div className="infographyContainer">
        <Carousel imageList={imageList} />
      </div>
    </div>
  );
};

export default Anafilaxias;
