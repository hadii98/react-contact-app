import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { addContactHandler } = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    const emailFormat = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    } else if (emailFormat.test(email) === false) {
      alert("Invalid email address!");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button className="ui button blue">Add</Button>
      </form>
    </Container>
  );
};

export default AddContact;
