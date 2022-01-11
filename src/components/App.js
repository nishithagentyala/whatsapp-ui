import React from "react";
import "./App.css";
import Layout from "./Layout";
import Chatlist from "./Chatlist";
import SettingsOfAll from "./SettingsOfAll";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <Contact />
      <SettingsOfAll />
      <Layout />
      <Chatlist />
    </div>
  );
}

export default App;
