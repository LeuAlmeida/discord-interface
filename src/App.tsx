import React from "react";

import { isMobile, isTablet } from "mobile-device-detect";

import Layout from "./components/Layout";
import ErrorScreen from "./components/ErrorScreen";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      {isMobile || isTablet ? <ErrorScreen /> : <Layout />}
      <GlobalStyles />
    </>
  );
}

export default App;
