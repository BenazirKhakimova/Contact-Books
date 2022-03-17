import React, { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  function handleClick() {
    const newContact = {
      name,
      lastName,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
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
      <button onClick={() => handleClick()}>Add Contact</button>
    </div>
  );
};

export default AddContact;
