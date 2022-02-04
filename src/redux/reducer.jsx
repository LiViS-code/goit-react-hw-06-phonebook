import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./actions";

// const contactsStorage = JSON.parse(localStorage.getItem("contacts") ?? []);

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
