import React from 'react';
import css from '../ContactItem/ContactItem.module.css';

export const ContactItem = ({ name, number, id, handleDeleteContact }) => {
  return (
    <>
      <p className={css.contactField}>
        {name}:&nbsp;<span className={css.phoneNumber}>{number}</span>
        <button
          className={css.addContactBtn}
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </button>
      </p>
    </>
  );
};
