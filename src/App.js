import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import ContactDelete from "./components/ContactDelete";
import EditContact from "./components/EditContact";
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/add" exact element={<AddContact />} />
            <Route path="/contacts/:id" exact element={<EditContact />} />
            <Route path="/" exact element={<ContactList />} />
            <Route path="/contact/:id" exact component={ContactDetails} />
            <Route path="/delete" exact element={<ContactDelete />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
