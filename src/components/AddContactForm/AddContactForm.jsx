import React, { Component } from 'react';
import css from '../AddContactForm/AddContactForm.module.css';

export class AddContactForm extends Component {
  handleFormSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.contactName.value;
    const number = event.currentTarget.elements.phoneNumber.value;

    const formData = {
      name,
      number,
    };

    this.props.handleAddContact(formData);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={css.formContact}>
        <label className={css.formLabel}>
          <span className={css.inputTitle}>Name:</span>
          <input
            className={css.formInput}
            type="text"
            placeholder="John Smith"
            name="contactName"
            required
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.inputTitle}>Number:</span>
          <input
            className={css.formInput}
            type="tel"
            name="phoneNumber"
            placeholder="548-48-48"
            pattern="\d{3}-\d{2}-\d{2}"
            required
          />
        </label>

        <button type="submit" className={css.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
