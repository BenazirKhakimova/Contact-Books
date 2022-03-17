import React, { useState } from "react";

const EditContact = (props) => {
  const [name, setName] = useState(props.editContact.name);
  const [lastName, setLastName] = useState(props.editContact.lastName);
  const [phone, setPhone] = useState(props.editContact.phone);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.lastName = lastName;
    contact.phone = phone;

    props.handleSaveEditedContact(contact);
    setName("");
    setLastName("");
    setPhone("");
  }

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
        value={name}
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Фамилия"
        value={lastName}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Номер телефона"
        value={phone}
      />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default EditContact;
