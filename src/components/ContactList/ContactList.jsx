import styles from './ContactList.module.css';

// export const Contactlist = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul className={styles.contactList}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id} id={id} className={styles.contactList__item}>
//           {name}: {number}
//           <button
//             type="button"
//             className={styles.contactList__button}
//             onClick={onDeleteContact}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export const ContactList = ({ contacts, onRemoveContact }) => (
//   <ul className={styles.contactList}>
//     {contacts.map(contact => (
//       <li key={contact.id} className={styles.contactList__item}>
//         {contact.name + ' : ' + contact.number}
//         {
//           <Button
//             type="button"
//             name="delete"
//             onClick={() => onRemoveContact(contact.id)}
//           >
//             delete
//           </Button>
//         }
//       </li>
//     ))}
//   </List>
// );

export const ContactList = ({ contacts, onDeleteContact }) => {
  const filteredContacts = contacts();
  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={styles.contactList_item}>
            {contact.name + ' : ' + contact.number}
            <button
              type="button"
              className={styles.contactList_button}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};