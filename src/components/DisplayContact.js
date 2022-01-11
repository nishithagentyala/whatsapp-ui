import React from "react";
import "./DisplayContact.css";
const DisplayContact = ({ person }) => {
  return person.map((people) => {
    const { id, name, about, image } = people;
    return (
      <div key={id} className="AllContacts">
        <img src={image} alt={name} className="pictures" />
        <div className="userinfo">
          <h4>{name}</h4>
          <p className="abt">{about}</p>
        </div>
      </div>
    );
  });
};

export default DisplayContact;
