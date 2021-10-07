import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import MotolinaLogo from "./../../../assets/MotolinaLogo.png";

const RootLeftPage: React.FC = () => {
  const History = useHistory();

  return (
    <div className="RootLeftPage">
      <div className="HeaderBox">
        <h1>MotoMeds</h1>
        <img src={MotolinaLogo} alt="MotolinaLogo" />
      </div>
      <p>
        Herramienta de apoyo para signos y síntomas diseñada para el colegio
        Motolinia
      </p>
      <Button
        onClick={() => History.push("/MotoMed/Quemaduras")}
        size="lg"
        colorScheme="linkedin"
        style={{ color: "white" }}
      >
        Quemaduras →
      </Button>
      <Button
        onClick={() => History.push("/MotoMed/Intoxicaciones")}
        size="lg"
        colorScheme="twitter"
        style={{ color: "white" }}
      >
        Intoxicaciones →
      </Button>
      <Button
        onClick={() => History.push("/MotoMed/Anafilaxias")}
        size="lg"
        colorScheme="telegram"
        style={{ color: "white" }}
      >
        Anafilaxias →
      </Button>
    </div>
  );
};

export default RootLeftPage;
