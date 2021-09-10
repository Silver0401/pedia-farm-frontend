import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const HomeRightBox: React.FC = () => {
  const MotionTransitionVariants = {
    initPosition: {
      opacity: 0,
    },
    DesiredPosition: {
      opacity: 1,
    },
    ExitPosition: {
      opacity: 0,
    },
  };
  const History = useHistory();

  return (
    <motion.div
      className="HomeRightBox"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <div className="TitlesBox">
        <h2>Bienvenido a </h2>
        <h1>Pedia-Farm</h1>
        <h3>
          El Catálogo de Medicamentos Pediátricos utilizados en Insuficiencia
          Cardiaca.
        </h3>
      </div>
      <div className="ButtonsBox">
        <Button
          size="lg"
          colorScheme="twitter"
          onClick={() => History.push("/MedsDB")}
        >
          Ir al Catálogo Pediátrico ⚕️
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={() => History.push("/Pusher")}
        >
          Añadir Fármacos 📇
        </Button>
      </div>
    </motion.div>
  );
};

export default HomeRightBox;
