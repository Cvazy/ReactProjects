import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reduser";
import { thunk } from "redux-thunk";
import { getToDoItems } from "./actions/getToDoItems";

export const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getToDoItems);
