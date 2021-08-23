import React from "react";
import { motion } from "framer-motion";

import FetchedMedsDisplay from "../components/meds/FetchedMedsDisplay";
import SearchBar from "./../components/meds/SearchBar";

const meds: React.FC = () => {
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

  return (
    <motion.div
      className="MedsPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <SearchBar />
      <FetchedMedsDisplay />
    </motion.div>
  );
};

export default meds;
