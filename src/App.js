import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { Container, Logo, Title, ContactsTitle, Message } from "./App.styled";
import toastMsg from "./utils/toastMsg";
import phonebook from "./img/phonebook.png";
import { addContact, deleteContact, filterContact } from "./redux/actions";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const onContactsGroup = contacts.length !== 0 ? true : false;
  const onContactsFilter = contacts.length >= 2 ? true : false;

  const onChangeState = (name, number) => {
    if (matchCheckName(name, contacts)) {
      toastMsg(name, "warn");
      return "not success";
    }
    dispatch(addContact(name, number));

    toastMsg(name, "success");

    return "success";
  };

  const matchCheckName = (name, contacts) => {
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].name === name) return true;
    }
    return false;
  };

  const onDelete = (id) => {
    dispatch(deleteContact(id));

    if (contacts.length <= 2) {
      onFilter("");
    }
  };

  const onFilter = (word) => dispatch(filterContact(word));

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
