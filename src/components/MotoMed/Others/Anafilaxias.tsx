import React from "react";
import ReturnButton from "./ReturnButton";

const Anafilaxias: React.FC = () => {
  return (
    <div className="AnafilaxiasPage">
      <ReturnButton />
      <div className="informationContainer">
        <h1>Anafilaxia</h1>
        <hr />
        <h2>Definición</h2>
        <p>
          La anafilaxia es una reacción alérgica grave en todo el cuerpo a un
          químico que se ha convertido en alergeno. Un alergeno es una sustancia
          que puede ocasionar una reacción alérgica.
        </p>

        <h2>Causas</h2>
        <li>Alergias farmacológicas</li>
        <li>Alergias a alimentos</li>
        <li>Picaduras/mordeduras de insectos</li>

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
      </div>
      <div className="infographyContainer"></div>
    </div>
  );
};

export default Anafilaxias;
