import React from "react";
import photo from "./images/nishu.jpeg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiWinkSmile } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { AiFillCrown } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { MdDataUsage } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import "./settingsOfAll.css";
function SettingsOfAll() {
  const backChat = () => {
    document.querySelector(".layout").style.display = "block";
    document.querySelector(".settingsOfAll").style.display = "none";
  };
  return (
    <div className="settingsOfAll">
      <div className="header">
        <AiOutlineArrowLeft
          fontSize="20px"
          onClick={backChat}
          cursor="pointer"
        />
        <header>Settings</header>
      </div>
      <div className="user">
        <img src={photo} className="pic" alt="profile" />
        <div className="userdetails">
          <p className="username">
            NISHITHA GENTYALA
            <AiFillCrown />
          </p>
          <p className="about">
            JUST SMILE
            <BiWinkSmile />
            <GiSelfLove />
          </p>
        </div>
      </div>
      <div className=" list account">
        <FaKey className="icon" />
        <span>
          <header>Account</header>
          <p>Privacy,security,change number</p>
        </span>
      </div>
      <div className="list chats">
        <BsFillChatRightTextFill className="icon" />
        <span>
          <header> Chats</header>
          <p>Theme,wallpapers,chat history</p>
        </span>
      </div>
      <div className="list notifications">
        <BsBellFill className="icon" />
        <span>
          <header>Notifications</header>
          <p>Message,group&call tones</p>
        </span>
      </div>
      <div className="list storageData">
        <MdDataUsage className="icon" />
        <span>
          <header>Storage and data</header>
          <p>Netwrok usage,auto-download</p>
        </span>
      </div>
      <div className="list help">
        <IoMdHelpCircleOutline className="icon" />
        <span>
          <header>Help</header>
          <p>Help center,contact us, privacy policy</p>
        </span>
      </div>
      <div className="list invite">
        <IoMdContacts className="icon" />
        <header>Invite a friend</header>
      </div>
      <p>
        from<span> FACEBOOK</span>
      </p>
    </div>
  );
}

export default SettingsOfAll;
