import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { Button, Container } from "semantic-ui-react";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = (props) => {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, [retrieveContacts]);

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h2 className="container">
        Contact List
        <Link to="/add">
          <Button floated="right" color="blue">
            Add Contact
          </Button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No contacts available!"}
      </div>
    </Container>
  );
};

export default ContactList;
