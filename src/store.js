import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./components/Todo/redux/todoReducer";

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;