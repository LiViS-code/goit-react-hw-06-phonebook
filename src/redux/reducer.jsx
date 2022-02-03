import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./actions";

const items = createReducer([], {
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
