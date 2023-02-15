import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./todoType";

const initialState = {
  data: [
    {
      id: 1,
      todo: "study",
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_TODO:
      console.error(payload);
      return {
        data: [...state.data, payload],
      };

    case DELETE_TODO:
      return {
        data: state.data.filter((d) => d.id !== payload),
      };

    case EDIT_TODO:
      console.log(payload);
      const edit_data = { ...payload.id, ...payload.value };
      console.log(edit_data);
      return {
        ...state.data,
        data: state.data.map((d) =>
          d.id === edit_data.Id
            ? {
                ...d,
                id: edit_data.Id,
                todo: edit_data.todo,
              }
            : d
        ),
      };
    default:
      return state;
  }
};
