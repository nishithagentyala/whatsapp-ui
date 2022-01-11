import React from "react";
import "./Settings.css";
function CallSettings() {
  const settings = () => {
    document.querySelector(".layout").style.display = "none";
    document.querySelector(".settingsOfAll").style.display = "block";
    document.querySelector(".chatlists").style.display = "none";
  };
  return (
    <div className="callsettings" onClick={settings}>
      Settings
    </div>
  );
}
export default CallSettings;
