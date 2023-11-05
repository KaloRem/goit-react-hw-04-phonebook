import { useState } from 'react';
import styles from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
    const form = e.currentTarget;
    form.reset();
  };

  const saveName = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

    return (
      <form className={styles.contactForm} onSubmit={onHandleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className={styles.contactForm_input}
          id="name"
          value={name}
          onChange={saveName}
          pattern={
            "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          required
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          className={styles.contactForm_input}
          id="number"
          value={number}
          onChange={saveName}
          pattern={
            '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
          }
          required
        />
        <button type="submit" className={styles.contactForm_button}>
          Add contact
        </button>
      </form>
    );
  }