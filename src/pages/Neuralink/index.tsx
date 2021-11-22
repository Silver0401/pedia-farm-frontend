import React from "react";

import NeuralinkHome from "../../components/Neuralink/Home";
import InfoBlock1 from "../../components/Neuralink/InfoBlock1";
import InfoBlock2 from "../../components/Neuralink/InfoBlock2";

const NeuralinkPage: React.FC = (props: any) => {
  return (
    <div className="NeuralinkPage">
      <NeuralinkHome history={props.history} />

      <InfoBlock1 />

      <InfoBlock2 />
    </div>
  );
};

export default NeuralinkPage;
