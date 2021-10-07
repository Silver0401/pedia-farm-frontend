import React from "react";
import ReturnButton from "./ReturnButton";

const Intoxicaciones: React.FC = () => {
  return (
    <div className="IntoxicacionesPage">
      <ReturnButton />

      <div className="informationContainer">
        <h1>Intoxicación Alimentaria</h1>
        <hr />
        <h2>Definición</h2>
        <p>
          Es una infección o irritación del aparato digestivo causada por el
          consumo de algunos alimentos o bebidas (NIDDK, 2019).
        </p>
        <h2>Causas</h2>
        <li>La comida no está cocida o recalentada correctamente</li>
        <li>No es almacenada correctamente (mal refrigeración)</li>
        <li>Se deja afuera mucho tiempo</li>
        <li>
          Fue preparada por alguien enfermo o alguien que no se lavó las manos
        </li>
        <li>Se ingiere después de la fecha de caducidad establecida</li>
        <h2>Signos y Síntomas</h2>
        <li>Diarrea</li>
        <li>Vómito</li>
        <li>Náuseas</li>
        <li>Dolor de Estómago</li>
        <li>Dolor de Cabeza</li>
        <li>Fiebre</li>
      </div>
      <div className="infographyContainer"></div>
    </div>
  );
};

export default Intoxicaciones;
