import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";

const Init: React.FC = () => {
  const History = useHistory();

  const ArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M14 12l-14 9v-18l14 9zm-4-9v4l8.022 5-8.022 5v4l14-9-14-9z" />
    </svg>
  );

  return (
    <div className="InitPage">
      <div className="PediaFarmBox">
        <h1>PediaFarm</h1>
        <p>Bloque: Farmacoterapia</p>
        <p>Semestre: 5</p>
        <Button
          size="lg"
          colorScheme="linkedin"
          leftIcon={ArrowIcon}
          onClick={() => History.push("/PediaFarm")}
        />
      </div>
      <div className="MotoMedBox">
        <h1>MotoMed</h1>
        <p>Bloque: Propedéutica</p>
        <p>Semestre: 5</p>
        <Button
          size="lg"
          colorScheme="red"
          leftIcon={ArrowIcon}
          onClick={() => History.push("/MotoMed")}
        />
      </div>
    </div>
  );
};

export default Init;
