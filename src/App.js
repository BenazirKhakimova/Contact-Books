import { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactsList/ContactList";
import EditContact from "./components/EditContact/EditContact";
function App() {
  const [contact, setContact] = useState([]);
  const [editContact, setEditContacts] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    const newContactArray = [...contact];
    newContactArray.push(newContact);

    setContact(newContactArray);
  }

  function handleDeleteContact(id) {
    let deletedContact = contact.filter((item) => {
      return item.id !== id;
    });
    setContact(deletedContact);
  }
  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContacts(contact[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContactArray = contact.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContact(newContactArray);
    setIsEdit(false);
  }
  return (
    <div>
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContact
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}
      <ContactList
        contact={contact}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
}

export default App;
