import React, { useState } from "react";
import { motion } from "framer-motion";
import { input } from "../data/types";

import FetchedMedsDisplay from "../components/meds/FetchedMedsDisplay";
import SearchBar from "./../components/meds/SearchBar";

const Meds: React.FC = () => {
  const [searchBarData, setSearchBarData] = useState<input>(null);

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
      <SearchBar input={(data) => setSearchBarData(data)} />
      <FetchedMedsDisplay input={searchBarData} />
    </motion.div>
  );
};

export default Meds;
