import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const { items, filter } = combineReducers;

export const store = configureStore({
  reducer: {
    items,
    filter,
  },
});
