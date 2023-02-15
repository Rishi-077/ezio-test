import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./redux/todoAction";

function Todo() {
  const {
    register,
    trigger,
    handleSubmit,
    // formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();

  const todoList = useSelector((state) => state.data);
  console.log(todoList);

  const [Id, setId] = useState();

  const dispatch = useDispatch();

  const addTodoList = (data) => {
    const obj = {
      id: Math.floor(Math.random() * 1000) + 1,
      todo: data.todo,
    };
    dispatch(addTodo(obj));
    reset();
  };

  function selectUser(update) {
    setId(update.id);
    setValue("todo", update.todo);
  }

  const editTodoList = () => {
    let updateData = getValues();
    dispatch(editTodo({ Id }, updateData));
    reset();
  };

  // const todoData = localStorage.getItem("todo");
  // console.log(todoData);
  return (
    <>
      <div className="card w-50 mx-auto mt-5 p-4 h-100">
        <h1 className="h2 fw-bold mb-5">Todo :</h1>
        <form onSubmit={handleSubmit(addTodoList)}>
          <div className="d-flex flex-md-row flex-column align-tiems-center justify-content-center">
            <input
              type="text"
              className="input form-control w-50 shadow-none"
              name="todo"
              placeholder="add todo"
              // onChange={(e) => setTodo(e.target.value)}
              {...register("todo", {
                required: "value is required",
              })}
              onKeyUp={() => {
                trigger("todo");
              }}
            />
            <button className="btn btn-sm btn-info me-3 ms-3" type="submit">
              Add todo
            </button>

            <button
              className="btn btn-sm btn-warning me-3"
              type="button"
              onClick={editTodoList}
            >
              edit todo
            </button>
          </div>
        </form>
        <div className="mt-2 row p-2">
          {Array.from(todoList).map((d, i) => (
            <div
              key={i}
              className="col-md-6 col-12  rounded-3 border-2 border p-3 border-dark"
            >
              <p className="fw-bold me-3">{d.todo}</p>
              <button
                className="btn btn-sm btn-success me-3"
                onClick={() => selectUser(d)}
              >
                edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                type="button"
                onClick={() => dispatch(deleteTodo(d.id))}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
