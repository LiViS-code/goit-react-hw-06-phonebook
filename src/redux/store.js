import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export const store = configureStore({
  reducer: {
    items: combineReducers.items,
    filter: combineReducers.filter,
  },
});
