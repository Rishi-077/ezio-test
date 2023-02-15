import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./todoType";

const addTodo = (value) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const editTodo = (id, value) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      value
    },
  };
};

export { addTodo, deleteTodo, editTodo };
