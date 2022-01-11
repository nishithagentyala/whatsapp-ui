import React from "react";
import "./Settings.css";
function StatusSettings() {
  const settings = () => {
    document.querySelector(".layout").style.display = "none";
    document.querySelector(".settingsOfAll").style.display = "block";
  };
  return (
    <div className="settingsStatus">
      <div className="settingsSlist">Status privacy</div>
      <div className="settingsSlist" onClick={settings}>
        Settings
      </div>
    </div>
  );
}

export default StatusSettings;
