import React from "react";

import RootRightPage from "../../components/MotoMed/Home/RootRightPage";
import RootLeftPage from "../../components/MotoMed/Home/RootLeftPage";

const Root: React.FC = () => {
  return (
    <div className="RootPage">
      <RootLeftPage />
      <RootRightPage />
      <div className="bgMesh" />
    </div>
  );
};

export default Root;
