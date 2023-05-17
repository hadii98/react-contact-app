import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactDelete = (props) => {
  const location = useLocation();
  const { id, name } = location.state.contact;
  const { removeContactHandler } = useContactsCrud();
  const deleteContact = (id) => {
    removeContactHandler(id);
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h2>Are you sure to delete {name} from Contact List</h2>
      <Link to="/">
        <Button
          className="ui button blue left"
          onClick={() => deleteContact(id)}
        >
          Yes
        </Button>
      </Link>
      <Link to="/">
        <Button className="ui button blue left">No</Button>
      </Link>
    </Container>
  );
};

export default ContactDelete;
