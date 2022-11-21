import { createStore } from "redux";
import { persistedReducer } from "../reducers/persistedReducer";

const store = createStore(persistedReducer);

export default store;
