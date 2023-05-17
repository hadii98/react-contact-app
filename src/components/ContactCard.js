import React from "react";
import { Link } from "react-router-dom";
import Annuar from "../images/Annuar.jpg";
import { Icon } from "semantic-ui-react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={Annuar} alt="annuar" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link to={`/delete`} state={{ contact: props.contact }}>
        <Icon
          name="user delete"
          bordered
          circular
          size="large"
          color="red"
          corner
          style={{ float: "right" }}
        ></Icon>
      </Link>
      <Link to={`/contacts/${id}`} state={{ contact: props.contact }}>
        <Icon
          name="edit"
          bordered
          circular
          size="large"
          color="blue"
          corner
          style={{ float: "right" }}
        ></Icon>
      </Link>
    </div>
  );
};

export default ContactCard;
