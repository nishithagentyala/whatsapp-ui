import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ChatSettings from "./ChatSettings";
import StatusSettings from "./StatusSettings";
import "./Layout.css";
import "./FirstLayout.css";
import { useState } from "react";
import CallSettings from "./CallSettings";
const Layout = () => {
  const [isChatActive, setisChatActive] = useState(true);
  const [isStatusActive, setisStatusActive] = useState(false);
  const [isCameraActive, setisCameraActive] = useState(false);
  const [isCallsActive, setisCallsActive] = useState(false);
  const searchbtn = () => {
    document.querySelector(".searchlist").style.display = "flex";
    document.querySelector(".layout").style.display = "none";
    document.querySelector(".chatlists").style.display = "none";
  };
  const backArrow = () => {
    document.querySelector(".layout").style.display = "block";
    document.querySelector(".searchlist").style.display = "none";
    document.querySelector(".chatlists").style.display = "block";
  };
  const settingsbtn = () => {
    if (isChatActive) {
      document.querySelector("#settingsChat").style.display = "block";
    }
    if (isStatusActive) {
      document.querySelector(".settingsStatus").style.display = "block";
    }
    if (isCallsActive)
      document.querySelector(".callsettings").style.display = "block";
  };
  const chats = () => {
    setisChatActive(true);
    setisStatusActive(false);
    setisCameraActive(false);
    setisCallsActive(false);
    document.querySelector(".settingsStatus").style.display = "none";
    document.querySelector(".chatlists").style.display = "block";
    document.querySelector(".callsettings").style.display = "none";
  };
  const status = () => {
    document.querySelector("#settingsChat").style.display = "none";
    document.querySelector(".chatlists").style.display = "none";
    document.querySelector(".callsettings").style.display = "none";
    setisStatusActive(true);
    setisChatActive(false);
    setisCameraActive(false);
    setisCallsActive(false);
  };
  const calls = () => {
    document.querySelector("#settingsChat").style.display = "none";
    document.querySelector(".settingsStatus").style.display = "none";
    document.querySelector(".chatlists").style.display = "none";
    setisCallsActive(true);
    setisCameraActive(false);
    setisChatActive(false);
    setisStatusActive(false);
  };
  const camera = () => {
    setisCameraActive(true);
    setisChatActive(false);
    setisStatusActive(false);
    setisCallsActive(false);
  };
  return (
    <div>
      <div className="searchlist ">
        <AiOutlineArrowLeft className="arrow" onClick={backArrow} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="layout">
        <div className="first">
          <header>WhatsApp</header>
          <button className="search" onClick={searchbtn}>
            <BiSearchAlt2 />
          </button>
          <ChatSettings />
          <StatusSettings />
          <CallSettings />
          <button id="settings" onClick={settingsbtn}>
            <BsThreeDotsVertical />
          </button>
        </div>
        <div className="second">
          <button
            className={isCameraActive ? "activelist" : null}
            id="camera"
            onClick={camera}
          >
            <AiFillCamera />
          </button>
          <div
            id="chats"
            className={isChatActive ? "activelist" : null}
            onClick={chats}
          >
            CHATS
          </div>
          <div
            id="status"
            className={isStatusActive ? "activelist" : null}
            onClick={status}
          >
            STATUS
          </div>
          <div
            className={isCallsActive ? "activelist" : null}
            id="calls"
            onClick={calls}
          >
            CALLS
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
