import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  const addContact = newContact => {
    const { name, number } = newContact;
    const isExist = isInPhonebook(name);
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contact = {
      name,
      id: nanoid(),
      number,
    };

    setContacts(prev => [...prev, contact]);
  };

    const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const searchContact = e => {
    const filter = e.target.value;
    setFilter (filter);
  };

   const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const isInPhonebook = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

    return (
      <div className="container">
        <h1 className="phonebookTitle">Phonebook</h1>
        <ContactForm onAddContact={addContact}></ContactForm>
        <h2 className="contactsTitle">Contacts</h2>
        {contacts && contacts.length !== 0 && (
          <ContactList
            contacts={getFilteredContacts}
            onDeleteContact={deleteContact}
          ></ContactList>
        )}
        {contacts && contacts.length > 1 && (
          <SearchFilter
            filter={filter}
            onHandleChange={searchContact}
          ></SearchFilter>
        )}
      </div>
    );
  }
