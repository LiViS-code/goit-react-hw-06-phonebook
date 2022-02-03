// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { Container, Logo, Title, ContactsTitle, Message } from "./App.styled";
import toastMsg from "./utils/toastMsg";
import phonebook from "./img/phonebook.png";
import { deleteContact } from "./redux/actions";

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  // const onContactsGroup = contacts.length !== 0 ? true : false;
  // const onContactsFilter = contacts.length >= 2 ? true : false;

  const onContactsGroup = true;
  const onContactsFilter = true;

  const onChangeState = (name, number) => {
    if (matchCheckName(name, contacts)) {
      toastMsg(name, "warn");
      return "not success";
    }

    toastMsg(name, "success");
    return "success";
  };

  const matchCheckName = (name, contacts) => {
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].name === name) return true;
    }
    return false;
  };

  const onDelete = (id) => dispatch(deleteContact(id));

  const onFilter = () => console.log("используем фильтр");

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
