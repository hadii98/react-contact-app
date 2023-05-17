import React from "react";
import { Link } from "react-router-dom";
import Annuar from "../images/Annuar.jpg";
import { Button, Container } from "semantic-ui-react";

const ContactDetails = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <Container style={{ marginTop: "100px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={Annuar} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <Button fluid className="ui button blue center">
            Back to Contact List
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default ContactDetails;
