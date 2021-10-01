import React, { useContext, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Context } from "./data/context";
import { AnimatePresence } from "framer-motion";

// Init Proyect Files
import GlobalNav from "./components/nav";
import InitPage from "./pages/init";

// PediaFarm
import HomePage from "./pages/PediaFarm/home";
import MedsPage from "./pages/PediaFarm/meds";
import PusherPage from "./pages/PediaFarm/pusher";

// MotoMed
import RootPage from "./pages/MotoMed/root";

const App: React.FC = () => {
  const { contextData } = useContext(Context);
  const Location = useLocation();

  useEffect(() => {
    console.log(`current Page: ${contextData.currentPage}`);
  }, [contextData]);

  return (
    <div className="App">
      {/* <GlobalNav /> */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={Location} key={Location.pathname}>
          <Route key="ProyectsInit" exact path="/" component={InitPage} />

          {/* PediaFarm Paths */}

          <Route
            key="PediaFarmHomePage"
            exact
            path="/PediaFarm"
            component={HomePage}
          />
          <Route
            key="PediaFarmMedsPage"
            exact
            path="/PediaFarm/MedsDB"
            component={MedsPage}
          />
          <Route
            key="PediaFarmPusherPage"
            exact
            path="/PediaFarm/Pusher"
            component={PusherPage}
          />

          {/* MotoMeds Paths */}

          <Route
            key="MotoMedsHomePage"
            exact
            path="/MotoMed"
            component={RootPage}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
