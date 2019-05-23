import React from "react";
import "./ContactCard.css";

function ContactCard(props) {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="contact portrait" />
      </td>
      <td>
        <h3>{props.name}</h3>
      </td>
      <td>
        <h3>{props.popularity}</h3>
      </td>
      <td>
        <button
          className="btn-delete"
          onClick={() => props.deleteContact(props.index)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactCard;
