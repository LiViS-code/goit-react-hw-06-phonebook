import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
// import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: { contacts: persistReducer(contactsPersistConfig, reducer) },
  devTools: process.env.NODE_ENV === "development",
  middleware: middleware,
});

export const persistor = persistStore(store);
