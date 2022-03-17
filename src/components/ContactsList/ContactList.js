import React from "react";

const ContactList = (props) => {
  return (
    <div>
      {props.contact.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.lastName}</li>
          <li>{item.phone}</li>
          <li>
            <button onClick={() => props.handleDeleteContact(item.id)}>
              Delete
            </button>
            <button onClick={() => props.handleEditIndex(index)}>Edit</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
