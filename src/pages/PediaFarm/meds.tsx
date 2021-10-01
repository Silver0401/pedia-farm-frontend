import React, { useState } from "react";
import { motion } from "framer-motion";
import { input } from "../../data/types";

import FetchedMedsDisplay from "./../../components/PediaFarm/meds/FetchedMedsDisplay";
import SearchBar from "../../components/PediaFarm/meds/SearchBar";
import RiskBox from "../../components/PediaFarm/meds/RiskBox";

const Meds: React.FC = () => {
  const [searchBarData, setSearchBarData] = useState<input>(null);
  const [buttonToggled, setButtonTogled] = useState<boolean>(false);

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
      <SearchBar
        input={(data) => setSearchBarData(data)}
        buttonState={buttonToggled}
        setButtonState={(state) => setButtonTogled(state)}
      />
      <FetchedMedsDisplay input={searchBarData} />
      <RiskBox buttonState={buttonToggled} />
    </motion.div>
  );
};

export default Meds;
