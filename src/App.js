import React from "react";
import Header from './components/Header/header.component'
import Intro from './components/Intro/intro.component'
import About from './components/About/about.component'

import "./styles/global.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Intro />
      <About />
    </div>
  );
};

export default App;
