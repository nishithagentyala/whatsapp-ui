import React from "react";
import { BsChatRightTextFill } from "react-icons/bs";
import "./Chatlist.css";

function Chatlist() {
  const selectContact = () => {
    document.querySelector(".layout").style.display = "none";
    document.querySelector(".contact").style.display = "block";
    document.querySelector(".chatlists").style.display = "none";
  };
  return (
    <div className="chatlists">
      <button className="chaticon" onClick={selectContact}>
        <BsChatRightTextFill />
      </button>
    </div>
  );
}
export default Chatlist;
