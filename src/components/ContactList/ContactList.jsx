import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div>
      {contacts?.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </div>
  );
};
