import React from "react";
import "./ContactCard.css";

function ContactCard(props) {
  return (
    <div className="card">
      <img src={props.pictureUrl} alt="contact portrait" />
      <h3>{props.name}</h3>
      <h3>{props.popularity}</h3>
    </div>
  );
}

export default ContactCard;
