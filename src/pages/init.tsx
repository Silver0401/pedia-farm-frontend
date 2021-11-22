import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";

interface proyectInfo {
  Title: string;
  Block: string;
  Semester: number;
}

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

  const CreateNewProyect = (
    route: string,
    className: string,
    colorScheme: string,
    info: proyectInfo
  ) => {
    return (
      <div className={className}>
        <h1>{info.Title}</h1>
        <p>{`Bloque: ${info.Block}`}</p>
        <p>{`Semestre: ${info.Semester}`}</p>
        <Button
          size="lg"
          colorScheme={colorScheme}
          leftIcon={ArrowIcon}
          onClick={() => History.push(`/${route}`)}
        />
      </div>
    );
  };

  return (
    <div className="InitPage">
      {CreateNewProyect("PediaFarm", "PediaFarmBox", "blue", {
        Title: "PediaFarm",
        Block: "Farmacoterapia",
        Semester: 5,
      })}

      {CreateNewProyect("MotoMed", "MotoMedBox", "green", {
        Title: "MotoMeds",
        Block: "Propedéutica",
        Semester: 5,
      })}

      {CreateNewProyect("Neuralink", "NeuralinkBox", "purple", {
        Title: "Elalink",
        Block: "Bases Neuroendocrinas",
        Semester: 5,
      })}
    </div>
  );
};

export default Init;
