import React, { useContext, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Context } from "./data/context";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/home";
import MedsPage from "./pages/meds";
import GlobalNav from "./components/nav";

const App: React.FC = () => {
  const { contextData } = useContext(Context);
  const Location = useLocation();

  useEffect(() => {
    console.log(`current Page: ${contextData.currentPage}`);
  }, [contextData]);

  return (
    <div className="App">
      <GlobalNav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={Location} key={Location.pathname}>
          <Route key="HomePage" exact path="/" component={HomePage} />
          <Route key="MedsPage" exact path="/MedsDB" component={MedsPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
