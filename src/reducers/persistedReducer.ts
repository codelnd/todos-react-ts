import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "todolist",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
