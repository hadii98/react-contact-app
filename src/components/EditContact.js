import React, { useState } from "react";
import { Button, Container } from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const { updateContactHandler } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    const emailFormat = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (newName === "" || newEmail === "") {
      alert("All the fields are mandatory!");
      return;
    } else if (emailFormat.test(email) === false) {
      alert("Invalid email address!");
      return;
    }
    updateContactHandler({ id, name: newName, email: newEmail });
    setNewName("");
    setNewEmail("");
    navigate("/");
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <Button className="ui button blue">Update</Button>
      </form>
    </Container>
  );
};

export default EditContact;
