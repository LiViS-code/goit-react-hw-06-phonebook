import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/add", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction("contact/delete");

export const filterContact = createAction("contact/filter");
