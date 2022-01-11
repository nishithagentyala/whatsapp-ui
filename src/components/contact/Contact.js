import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Contactlist from "./Contactlist";
import DisplayContact from "./DisplayContact";
import { useState } from "react";
import "./FirstLayout.css";
function Contact() {
  const [person, setperson] = useState(Contactlist);
  console.log(person);
  const backChat = () => {
    document.querySelector(".layout").style.display = "block";
    document.querySelector(".contact").style.display = "none";
    document.querySelector(".chatlists").style.display = "block";
  };
  const searchbtn = () => {
    document.querySelector(".searchlist").style.display = "flex";
    document.querySelector(".contact").style.display = "none";
  };
  return (
    <div className="contact ">
      <div className=" first">
        <button onClick={backChat}>
          <AiOutlineArrowLeft />
        </button>
        <header>Select contact</header>
        <button className="search" onClick={searchbtn}>
          <BiSearchAlt2 />
        </button>
        <button id="settings">
          <BsThreeDotsVertical />
        </button>
      </div>
      <DisplayContact person={person} />
    </div>
  );
}

export default Contact;
