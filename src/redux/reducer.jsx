import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./actions";

const contactsStorage = JSON.parse(localStorage.getItem("contacts") ?? []);

const items = createReducer(contactsStorage, {
  [addContact]: (state, actions) => [...state, actions.payload],
  [deleteContact]: (state, actions) =>
    state.filter((contact) => contact.id !== actions.payload),
});

const filter = createReducer("", {
  [filterContact]: (_, actions) => actions.payload,
});

export default combineReducers({
  items,
  filter,
});
