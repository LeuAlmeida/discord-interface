import React from "react";
import GithubCorner from 'react-github-corner';

import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";

import './App.css';

function App() {
  return (
    <>
      <GithubCorner
        className="github-corner"
        href="https://github.com/leualmeida/discord-interface"
        bannerColor="#6e86d6"
        octoColor="#272727"
      />
      <Layout />
      <GlobalStyles />
    </>
  );
}

export default App;
