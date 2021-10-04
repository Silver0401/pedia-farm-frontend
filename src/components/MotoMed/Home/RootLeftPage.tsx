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
        Catálogo médico de síntomas y enfermedades recurrentes en estudiantes
        del colegio motolina
      </p>
      <Button size="lg" colorScheme="telegram" style={{ color: "white" }}>
        → Ir a Quemaduras 🔥
      </Button>
      <Button size="lg" colorScheme="telegram" style={{ color: "white" }}>
        → Ir a Intoxicaciones 🍔
      </Button>
      <Button size="lg" colorScheme="telegram" style={{ color: "white" }}>
        → Ir a Anafilaxias ⚡️
      </Button>
    </div>
  );
};

export default RootLeftPage;
