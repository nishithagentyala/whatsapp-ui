import React from "react";
import "./Settings.css";
function ChatSettings() {
  const settings = () => {
    document.querySelector(".layout").style.display = "none";
    document.querySelector(".settingsOfAll").style.display = "block";
    document.querySelector(".chatlists").style.display = "none";
  };
  return (
    <div id="settingsChat">
      <div className="settingsClist">New group</div>
      <div className="settingsClist">New broadcast</div>
      <div className="settingsClist">Linked devices</div>
      <div className="settingsClist">Starred messages</div>
      <div className="settingsClist">Payments</div>
      <div className="settingsClist" onClick={settings}>
        Settings
      </div>
    </div>
  );
}
export default ChatSettings;
