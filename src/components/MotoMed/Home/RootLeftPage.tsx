import React from "react";
import { Button } from "@chakra-ui/button";
import MotolinaLogo from "./../../../assets/MotolinaLogo.png";

const RootLeftPage: React.FC = () => {
  return (
    <div className="RootLeftPage">
      <div className="HeaderBox">
        <h1>MotoMeds</h1>
        <img src={MotolinaLogo} alt="MotolinaLogo" />
      </div>
      <p>
        Herramienta de apoyo para signos y síntomas diseñada para el colegio
        motolina
      </p>
      <Button size="lg" colorScheme="telegram" style={{ color: "white" }}>
        Quemaduras 🔥
      </Button>
      <Button size="lg" colorScheme="telegram" style={{ color: "white" }}>
        Intoxicaciones 🍔
      </Button>
      <Button size="lg" colorScheme="telegram" style={{ color: "white" }}>
        Anafilaxias ⚡️
      </Button>
    </div>
  );
};

export default RootLeftPage;
