import React from "react";
import { Button } from "@chakra-ui/button";

const RiskBox: React.FC = () => {
  return (
    <div className="RiskBox">
      <h2>Clasificación de Riesgos</h2>
      <p id="hr">Riesgo Alto</p>
      <p id="mr">Riesgo Medio</p>
      <p id="lr">Riesgo Bajo</p>

      <label>
        Si tiene algun síntoma de <strong>riesgo alto</strong>, favor de acudir
        a su doctor lo más rápido posible, en caso de
        <strong> riesgo medio</strong> favor de contactar a un médico y para
        <strong> riesgos bajos</strong> ayudar y monitorear al paciente.
      </label>

      <Button size="md" colorScheme="whatsapp">
        Contactar a un médico 📞
      </Button>
    </div>
  );
};

export default RiskBox;
