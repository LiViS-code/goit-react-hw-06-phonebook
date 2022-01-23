import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { Container, Logo, Title, ContactsTitle, Message } from "./App.styled";
import toastMsg from "./utils/toastMsg";
import phonebook from "./img/phonebook.png";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const onChangeState = (name, number) => {
    if (matchCheckName(name, contacts)) {
      toastMsg(name, "warn");
      return "not success";
    }

    const newContact = [{ id: nanoid(), name: name, number: number }];

    setContacts([...contacts, ...newContact]);

    toastMsg(name, "success");
    return "success";
  };

  const matchCheckName = (name, contacts) => {
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].name === name) return true;
    }
    return false;
  };

  const onFilter = (word) => {
    setFilter(word ? word.toLowerCase() : "");
  };

  const onDelete = (id) => {
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].id === id) {
        const name = contacts[i].name;
        contacts.splice(i, 1);
        setContacts([...contacts]);
        toastMsg(name, "info");
        break;
      }
    }

    if (contacts.length <= 1) {
      onFilter();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onContactsGroup = contacts.length !== 0 ? true : false;
  const onContactsFilter = contacts.length >= 2 ? true : false;

  return (
    <Container>
      <Title>
        <Logo src={phonebook} alt="fonebook" width="50px" />
        Phonebook
      </Title>
      <ContactForm onChangeState={onChangeState} />
      {onContactsGroup ? (
        <>
          <ContactsTitle>Contacts</ContactsTitle>
          {onContactsFilter && <Filter onFilter={onFilter} filter={filter} />}
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={onDelete}
          />
        </>
      ) : (
        <Message>You have no saved contacts</Message>
      )}
    </Container>
  );
}
