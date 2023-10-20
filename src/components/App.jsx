// import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/Contactlist';
import { Title } from './App.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { type } from '@testing-library/user-event/dist/type';
import { addContacts, deleteContacts, setFilter } from 'redux/contactsReducer';
export const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const phoneBookHasContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (phoneBookHasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    //   setContacts(prevContacts => [...prevContacts, newContact]);
    // dispatch({ type: 'contacts/setContacts', payload: newContact });
    dispatch(addContacts(newContact));
  };

    const handleDeleteContact = contactName => {
      // setContacts(prevContacts =>
      //   prevContacts.filter(contact => contact.name !== contactName)
      // );
      // const deleteContact = contacts.filter(contact => contact.name !== contactName);
      dispatch(deleteContacts(contactName));
    };

    const handleFilterChange = filter => {
      // setFilter(filter);
      dispatch(setFilter(filter));
    };

    // useEffect(() => {
    //   const storedContacts = localStorage.getItem('contacts');
    //   if (storedContacts) {
    //     // setContacts(JSON.parse(storedContacts));
    //     dispatch({ type: 'contacts/setContacts', payload: JSON.parse(storedContacts) })
    //   }
    // }, [dispatch]);

    // useEffect(() => {
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    return (
      <div>
        <ContactForm onAddContact={handleAddContact} contacts={contacts} />
        <Title>Contacts</Title>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    );
  };


